import api from '@/apis/config';

type Payload = {
  imeiNumber: string;
  pin: number;
}; // base64 encoded string
type Response = {
  token: string;
  expires: string;
};

/**
 * Verify Auth Code
 * @returns
 */
const userLogin = async (payload: Payload) => {
  const response = await api.post<Response>(`/onboarding/users/login`, payload);
  return response;
};
export default userLogin;

/**
 * @endpoint https://payrowdev.uaenorth.cloudapp.azure.com
 * @api {put} /onboarding/users/login Login User
 */
