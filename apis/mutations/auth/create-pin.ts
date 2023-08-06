import api from '@/apis/config';

type Payload = {
  tid: string | number;
  mobileNumber: string | number;
};
type Response = {
  success: boolean;
  message: string;
};

/**
 * Create Pin
 */
const checkDevice = async (payload: Payload) => {
  const response = await api.post<Response>(`/onboarding/login/pin`, payload);
  return response;
};
export default checkDevice;

/**
 * @endpoint https://payrowdev.uaenorth.cloudapp.azure.com
 * @api {post} /onboarding/login/pin Create Pin
 */
