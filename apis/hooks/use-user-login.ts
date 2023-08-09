import React from 'react';
import loginOTP from '../mutations/auth/login-otp';
import base64 from '@/lib/base64';
import verifyAuthCode from '../mutations/auth/verify';
import * as CryptoJS from 'crypto-js';
import { useLocalSearchParams } from 'expo-router';
import userLogin from '../mutations/auth/users-login';

type Params = {
  tid: string;
  mobileNumber: string;
};

const useLoginOTP = () => {
  const params = useLocalSearchParams<Params>();
  // console.log({ params });
  const [state, setState] = React.useState({
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
      // @ts-expect-error
      setState((prev) => ({
        ...prev,
        [key]: value,
      }));
    },
    [state]
  );

  console.log({ state });

  const onUserLogin = React.useCallback(async () => {
    try {
      await userLogin({
        pin: 1234,
        imeiNumber: '7685203077',
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return {
    state,
    onChangeState,
    onUserLogin,
  };
};

export default useLoginOTP;

//   val encrypt = EncryptDecrypt.encrypt(
//     jsonObject.toString(),
//     sharedPreferenceUtil.getAESKey(),
//     sharedPreferenceUtil.getIV(), sharedPreferenceUtil.getAlg()
// )

//     val jsonObject = JSONObject()
// jsonObject.put("code", authCodeRequest.code)
// jsonObject.put("tid", authCodeRequest.tid)
// jsonObject.put("keyValidation", authCodeRequest.keyValidation)
// jsonObject.put("imeiNumber", authCodeRequest.imeiNumber)

// const jsonObject = {
//   code: '5150',
//   tid: '072837',
//   imeiNumber: '7685203077',
//   keyValidation: nanoid(5),
// };
// const encrypt = JSON.stringify({
//   // code: '5150',
//   // tid: '072837',
//   // imeiNumber: '7685203077',
//   // keyValidation: nanoid(5),
//   iv: 'gaOr3uvhZEwFeSbRHwlHcg==',
//   AES: 'AES/CBC/NoPADDING',
//   ALG: 'AES/CBC/PKCS5PADDING',
// }).replace(/"/g, '');

// console.log({ encrypt });
// const data = base64.encode(encrypt);
// console.log({ data });
