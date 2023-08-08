import api from '@/apis/config';

type Payload = {
  data: string;
}; // base64 encoded string
type Response = {
  encrypt: string;
};

/**
 * Verify Auth Code
 * @returns
 */
const verifyAuthCode = async (payload: Payload) => {
  console.log({ payload });
  const response = await api.put<Response>(`/onboarding/login/verify`, payload);
  return response;
};
export default verifyAuthCode;

/**
 * @endpoint https://payrowdev.uaenorth.cloudapp.azure.com
 * @api {put} /onboarding/login/verify Verify Auth Code
 */
