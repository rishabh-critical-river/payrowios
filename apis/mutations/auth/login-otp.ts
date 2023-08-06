import api from '@/apis/config';

type Payload = {
  tid: string | number;
};
type Response = {
  success: boolean;
  data: string;
};

/**
 * Create Pin
 */
const loginOTP = async (payload: Payload) => {
  const response = await api.post<Response>(
    `/onboarding/login/loginOtp`,
    payload
  );
  return response;
};
export default loginOTP;

/**
 * @endpoint https://payrowdev.uaenorth.cloudapp.azure.com
 * @api {post} /onboarding/login/loginOtp Create Pin
 */
