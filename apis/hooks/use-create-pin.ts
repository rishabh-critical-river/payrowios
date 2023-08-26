import React from 'react';
import cryptoActions from '@/hooks/lib/crypto-actions';
import { Params } from '@/typings/params';
import createPin from '../mutations/auth/create-pin';
import userLogin from '../mutations/auth/users-login';
import useDeviceId from '@/hooks/use-device-id';
import storage from '@/hooks/lib/storage';
import { useLocalSearchParams, useRouter } from 'expo-router';

const useCreatePin = () => {
  const router = useRouter();
  const { deviceId } = useDeviceId();
  const [state, setState] = React.useState({
    pin: '',
  });

  const params = useLocalSearchParams<Params>();

  type Key = keyof typeof state;
  const onChangeState = React.useCallback(
    (key: Key, value: string) => {
      setState((prev) => ({
        ...prev,
        [key]: value,
      }));
    },
    [state]
  );

  const onConfirmPin = React.useCallback(async () => {
    if (params.pin !== state.pin) {
      throw Error('PINS are not matching, please enter the pin again');
    } else if (params) {
      const plaintext = JSON.stringify({
        termainalId: params.tid,
        pin: Number(state.pin),
        status: 'Active',
      });

      const ecrypted = cryptoActions.encrypt({
        iv: params.iv,
        key: params.key,
        AES: params.AES,
        ALG: params.ALG,
        plaintext,
      });
      console.log('Ecrypted Data from Create Pin', { ecrypted });
      const response = await createPin({ data: ecrypted });
      console.log('Response', response.data);
      if (response.data.success === true) {
        console.log('Worked Inside response.data.success');
        router.replace('/auth/enter-pin');
      }
    }
  }, [state, params?.iv, params?.key, params?.AES, params?.ALG]);

  const onLoginByPin = React.useCallback(async () => {
    if (deviceId) {
      const data = await userLogin({
        pin: Number(state.pin),
        imeiNumber: deviceId,
      });
      if (data.data) {
        await storage.setLocalData('user', JSON.stringify(data.data));
        router.replace('/products/add-item');
      }
      console.log('User', data.data);
    }
  }, [state.pin]);

  return {
    state,
    onChangeState,
    onConfirmPin,
    onLoginByPin,
  };
};
export default useCreatePin;
