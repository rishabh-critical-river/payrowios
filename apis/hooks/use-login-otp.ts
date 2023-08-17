import React from 'react';
import loginOTP from '../mutations/auth/login-otp';
import base64 from '@/hooks/lib/base64';
import verifyAuthCode from '../mutations/auth/verify';
import { router, useLocalSearchParams } from 'expo-router';
import cryptoActions from '@/hooks/lib/crypto-actions';
import keyValidation from '@/hooks/lib/num-characters';
import useDeviceId from '@/hooks/use-device-id';
import SnackbarModel from '@/components/snack-bar/snack-bar';

type Params = {
  tid: string;
  mobileNumber: string;
};

const useLoginOTP = () => {
  const { deviceId } = useDeviceId();
  const params = useLocalSearchParams<Params>();

  const [state, setState] = React.useState({
    code: '',
    decode: {
      key: '',
      iv: '',
      AES: '',
      ALG: '',
    },
  });

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

  console.log(state);

  /**
   * Send Auth Code
   */
  const onSendAuthCode = React.useCallback(async () => {
    if (!params.tid) {
      throw new Error('TID is required');
    }
    if (params.tid) {
      try {
        const { data } = await loginOTP({
          tid: params?.tid,
        });
        if (data.data) {
          const decode = base64.decode(data.data);
          const parseDecode = JSON.parse(decode.replace(/\\/g, ''));
          console.log(parseDecode, 'check');
          onChangeState('decode', parseDecode);
          onChangeState('code', '');
        }
      } catch (error: any) {
        console.log(error);
      }
    }
  }, [params?.tid]);

  /**
   * Verify Auth Code
   */
  const onVerifyAuthCode = React.useCallback(async () => {
    try {
      if (!deviceId) {
        throw new Error('Device Id is required');
      }
      if (!params.tid) {
        throw new Error('TID is required');
      }
      if (!state.code) {
        throw new Error('Auth Code is required');
      }

      if (state.decode) {
        const plaintext = JSON.stringify({
          code: state.code,
          tid: params.tid,
          imeiNumber: deviceId,
          keyValidation: keyValidation(5),
        });

        // console.log({ plaintext });

        // Encrypt Plaintext
        const encryptedBase64 = cryptoActions.encrypt({
          iv: state.decode.iv,
          key: state.decode.key,
          AES: state.decode.AES,
          ALG: state.decode.ALG,
          plaintext,
        });

        console.log({ encryptedBase64 });
        // Verify Auth Code
        const res = await verifyAuthCode({ data: encryptedBase64 });
        console.log('Verify Auth Code', res.data);
        // Decrypt Response Data
        const decryptedBase64 = cryptoActions.decrypt({
          iv: state.decode.iv,
          key: state.decode.key,
          AES: state.decode.AES,
          ALG: state.decode.ALG,
          plaintext: res.data.encrypt,
        });
        const decryptedData = decryptedBase64.replace(/\\/g, '');
        const decryptedJson = JSON.parse(decryptedData);
        console.log(decryptedJson, 'decryptedJson');
        if (decryptedJson.success === true) {
          router.push({
            pathname: '/auth/create-pin',
            params: {
              tid: params.tid,
              iv: state.decode.iv,
              key: state.decode.key,
              AES: state.decode.AES,
              ALG: state.decode.ALG,
            },
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  }, [
    deviceId,
    params.tid,
    state.code,
    state.decode.key,
    state.decode.iv,
    state.decode.AES,
    state.decode.ALG,
  ]);

  // console.log('Removed', removeBackslash(state.decode?.key));

  return {
    state,
    onChangeState,
    onSendAuthCode,
    onVerifyAuthCode,
  };
};

export default useLoginOTP;
