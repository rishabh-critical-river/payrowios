import api from '@/apis/config';

type Payload = {
  data: string;
};
type Response = {
  success: boolean;
  message: string;
};

/**
 * Create Pin
 */
const createPin = async (payload: Payload) => {
  const response = await api.post<Response>(`/onboarding/login/pin`, payload);
  return response;
};
export default createPin;

/**
 * @endpoint https://payrowdev.uaenorth.cloudapp.azure.com
 * @api {post} /onboarding/login/pin Create Pin
 */
