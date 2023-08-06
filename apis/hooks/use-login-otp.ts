import React from 'react';
import loginOTP from '../mutations/auth/login-otp';
import base64 from '@/lib/base64';
import verifyAuthCode from '../mutations/auth/verify';
import { nanoid } from 'nanoid';
import { AES, enc } from 'crypto-js';

const useLoginOTP = () => {
  const [state, setState] = React.useState({
    tid: '072857',
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

  const onSendAuthCode = React.useCallback(async () => {
    try {
      const { status, data } = await loginOTP({
        tid: state.tid,
      });
      // console.log({ status, data });
      if (data.data) {
        const decode = base64.decode(data.data);
        console.log({ decode });
      }
    } catch (error: any) {
      console.log(error);
    }
  }, [state]);
  const onVerifyAuthCode = React.useCallback(async () => {
    try {
      const jsonObject = JSON.stringify({
        code: '8557',
        tid: '072837',
        keyValidation: nanoid(5),
        imeiNumber: '7685203077',
      });
      // "{\"key\":\"J/PYjc1ftDFK5+77U1PB80v2TamokGap5yCIP2YI6tQ=\",\"iv\":\"gaOr3uvhZEwFeSbRHwlHcg==\",\"AES\":\"AES/CBC/NoPADDING\",\"ALG\":\"AES/CBC/PKCS5PADDING\"}"

      const decrypt = {
        iv: 'gaOr3uvhZEwFeSbRHwlHcg==',
        AES: 'AES/CBC/NoPADDING',
        ALG: 'AES/CBC/PKCS5PADDING',
      };
      const encryptedBytes = AES.encrypt(jsonObject, decrypt.AES, {
        iv: decrypt.iv as any,
      });
      const encryptedBase64 = encryptedBytes.toString(enc.Base64 as any);

      const response = await verifyAuthCode(encryptedBase64);
      console.log('Verify Auth Code', {
        status: response.status,
        data: response.data,
      });
    } catch (error: any) {
      console.log(error);
    }
  }, []);

  return {
    state,
    onChangeState,
    onSendAuthCode,
    onVerifyAuthCode,
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
