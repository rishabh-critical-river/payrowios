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
 * Check Device is valid
 * @returns
 * ```json
 * {
 *  "success": false,
 *  "message": "Mobile number not Matching",
 * }
 * ```
 */
const checkDevice = async (payload: Payload) => {
  const response = await api.post<Response>(
    `/onboarding/login/checkDevice`,
    payload
  );
  return response;
};
export default checkDevice;

/**
 * @endpoint https://payrowdev.uaenorth.cloudapp.azure.com
 * @api {post} /onboarding/login/checkDevice Check if Device is valid
 */
