import React from 'react';
import { Alert } from 'react-native';
import keyValidation from '@/hooks/lib/num-characters';
import cryptoActions from '@/hooks/lib/crypto-actions';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Params } from '@/typings/params';
import createPin from '../mutations/auth/create-pin';
import userLogin from '../mutations/auth/users-login';
import useDeviceId from '@/hooks/use-device-id';
import storage from '@/hooks/lib/storage';

const useCreatePin = () => {
  const { deviceId } = useDeviceId();
  const router = useRouter();
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
  console.log({ params });
  console.log({ state });

  const onConfirmPin = React.useCallback(async () => {
    if (params.pin !== state.pin) {
      Alert.alert('Pin not mathing');
    }
    if (params) {
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
        router.push('/auth/enter-pin');
        //   // if (deviceId) {
        //   // const user = await userLogin({
        //   //   pin: Number(state.pin),
        //   //   imeiNumber: deviceId,
        //   // });
        //   // console.log(user.data);
        //   // }
      }
      // const decrypted = cryptoActions.decrypt({
      //   iv: params.iv,
      //   key: params.key,
      //   AES: params.AES,
      //   ALG: params.ALG,
      //   plaintext: ecrypted,
      // });
      // const decryptedData = decrypted.replace(/\\/g, '');
      // const decryptedJson = JSON.parse(decryptedData);
      // console.log('Decrypted Data from Create Pin', { decryptedJson });
    }
  }, [state, params?.iv, params?.key, params?.AES, params?.ALG]);

  const onLoginByPin = React.useCallback(async () => {
    if (deviceId) {
      const user = await userLogin({
        pin: Number(state.pin),
        imeiNumber: deviceId,
      });
      if (user.data) {
        await storage.setLocalData('user', JSON.stringify(user.data));
        router.push('/products/add-item');
      }
      console.log('User', user.data);
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
