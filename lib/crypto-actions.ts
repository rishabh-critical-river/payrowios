import * as CryptoJS from 'crypto-js';

type Params = {
  iv: string;
  key: string;
  AES: string;
  ALG: string;
  plaintext: string;
};

const cryptoActions = {
  encrypt: (params: Params) => {
    const key = CryptoJS.enc.Base64.parse(params.key);
    const iv = CryptoJS.enc.Base64.parse(params.iv);
    const AES = params.AES;
    const ALG = params.ALG;
    const encrypted = CryptoJS.AES.encrypt(params.plaintext, key, {
      iv,
    });
    const encryptedBase64 = encrypted.toString();
    return encryptedBase64;
  },
  decrypt: (params: Params) => {
    const key = CryptoJS.enc.Base64.parse(params.key);
    const iv = CryptoJS.enc.Base64.parse(params.iv);
    const AES = params.AES;
    const ALG = params.ALG;
    const decrypt = CryptoJS.AES.decrypt(params.plaintext, key, {
      iv,
    });
    return decrypt.toString(CryptoJS.enc.Utf8);
  },
  orderNumber: (length: number) => {
    const random = CryptoJS.lib.WordArray.random(length);
    return random.toString(CryptoJS.enc.Hex);
  },
};

export default cryptoActions;
