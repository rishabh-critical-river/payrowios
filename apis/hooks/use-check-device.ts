import React from 'react';
import { useRouter } from 'expo-router';
import checkDevice from '../mutations/auth/check-device';
import { Alert } from 'react-native';
import storage from '@/hooks/lib/storage';

type mixed = string | number | boolean | null | undefined;

const useCheckDevice = () => {
  const router = useRouter();
  //   const safeRef = React.useRef<boolean>(false);
  const [state, setState] = React.useState({
    tid: '',
    alert: false,
    mobileNumber: '',
  });

  type Key = keyof typeof state;

  const isValid = React.useMemo(() => {
    if (state.tid && state.mobileNumber) {
      return true;
    } else {
      return false;
    }
  }, [state]);

  const onChangeState = React.useCallback(
    (key: Key, value: mixed) => {
      setState((prev) => ({
        ...prev,
        [key]: value,
      }));
    },
    [state]
  );

  //   const payload = {
  //     tid: '072857',
  //     mobileNumber: 9718247826581,
  //   };

  const onCheckDevice = React.useCallback(async () => {
    if (state.tid && state.mobileNumber) {
      const payload = {
        tid: state.tid,
        mobileNumber: Number(`971${state.mobileNumber}`),
      };
      // console.log({ payload });
      try {
        const { status, data } = await checkDevice(payload);
        if (status === 200) {
          router.push({
            pathname: '/auth/create-account',
            params: {
              tid: state.tid,
              mobileNumber: state.mobileNumber,
            },
          });
          const payload = {
            tid: state.tid,
            mobileNumber: state.mobileNumber,
          };
          await storage.setLocalData('auth', JSON.stringify(payload));
        }
        // console.log({ status, data });
      } catch (error: any) {
        //
        if (error.response.status === 500) {
          onChangeState('alert', true);
        }
        if (error.response.status === 400) {
          Alert.alert('Error', 'Mobile number not Matching');
        }
        if (error.response.status === 300) {
          Alert.alert('Error', 'Device Not found');
        }
        console.log(error.response.status);
        console.log({ message: error.response.data.message });
      }
    }
  }, [state]);

  return {
    state,
    isValid,
    onChangeState,
    onCheckDevice,
  };
};

export default useCheckDevice;
