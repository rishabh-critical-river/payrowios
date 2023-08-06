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
 * Verify the Device is
 * @returns
 */
const verifyDevice = async (payload: Payload) => {
  const response = await api.put<Response>(`/onboarding/login/verify`, payload);
  return response;
};
export default verifyDevice;

/**
 * @endpoint https://payrowdev.uaenorth.cloudapp.azure.com
 * @api {put} /onboarding/login/verify Verify the Device is
 */
