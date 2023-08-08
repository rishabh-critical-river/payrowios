import React from 'react';
import loginOTP from '../mutations/auth/login-otp';
import base64 from '@/lib/base64';
import verifyAuthCode from '../mutations/auth/verify';
import { useLocalSearchParams } from 'expo-router';
import cryptoActions from '@/lib/crypto-actions';
import keyValidation from '@/lib/num-characters';
import useDeviceId from '@/hooks/use-device-id';

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

  console.log({ state });

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
          onChangeState('decode', decode);
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
        throw new Error('Device Id is is required');
      }
      if (!params.tid) {
        throw new Error('TID is is required');
      }
      if (!state.code) {
        throw new Error('Auth Code is required');
      }
      if (state.decode) {
        const plaintext = JSON.stringify({
          code: state.code,
          tid: params.tid,
          imeiNumber: deviceId,
          keyValidation: keyValidation(),
        });

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
        console.log({ decryptedBase64 });
      }
    } catch (error) {
      console.log(error);
    }
  }, [deviceId, params.tid, state.code, state.decode]);

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
// const key = CryptoJS.enc.Base64.parse(state.decode.key);
// const iv = CryptoJS.enc.Base64.parse(state.decode.iv);
// const AES = state.decode.AES;
// const ALG = state.decode.ALG;
// console.log({ tid: params.tid });

// const en = `JQiAdcOuNVXQ1KbNhFS/DT0n42VlYNe4b6SXuNzt61t/TjM5MAatnYlBWoe/lAnS8ipXrxGsJ7ZTbT5jzojoBFnGpBiXehqh0wn+Sx+jXWM=`;

// const decrypt = CryptoJS.AES.decrypt(en, key, {
//   iv,
// });
// console.log(decrypt.toString(CryptoJS.enc.Utf8), 'decrypt');
// try {
//   if (state.decode) {
//     console.log({ decode: state.decode, tid: params.tid });
//     const key = CryptoJS.enc.Base64.parse(state.decode.key);
//     const iv = CryptoJS.enc.Base64.parse(state.decode.iv);
//     const aesMode = state.decode.AES;
//     const algPadding = state.decode.ALG;

//     const plaintext = JSON.stringify({
//       code: '6934',
//       tid: params.tid,
//       imeiNumber: '5935433282',
//       keyValidation: '92932',
//     });

//     const encrypted = CryptoJS.AES.encrypt(plaintext, key, {
//       iv,
//       AES: aesMode,
//       ALG: algPadding,
//     });

//     const encryptedBase64 = encrypted.toString();
//     console.log(encryptedBase64, 'encrypted');
//     // const res = await verifyAuthCode(encryptedBase64);

//     // console.log(res, 'res');
//     // const decrypt = CryptoJS.AES.decrypt(encryptedBase64, key, {
//     //   iv,
//     // });
//     // console.log(decrypt.toString(CryptoJS.enc.Utf8), 'decrypt');

//     // create aes-256-cbc cipher from key and iv
//     // const cipher = crypto.createCipheriv(key, iv);
//     // console.log(res, 'res');
//   }
// } catch (error: any) {
//   console.log(error.response.data.message);
// }
