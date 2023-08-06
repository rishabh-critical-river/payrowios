import api from '@/apis/config';

type Payload = string; // base64 encoded string
type Response = {
  success: boolean;
  message: string;
};

/**
 * Verify Auth Code
 * @returns
 */
const verifyAuthCode = async (payload: Payload) => {
  const response = await api.put<Response>(`/onboarding/login/verify`, payload);
  return response;
};
export default verifyAuthCode;

/**
 * @endpoint https://payrowdev.uaenorth.cloudapp.azure.com
 * @api {put} /onboarding/login/verify Verify Auth Code
 */
