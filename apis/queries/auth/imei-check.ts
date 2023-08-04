import api from '@/apis/config';

type Data = {
  success: boolean;
  message: string;
  data: string;
};

/**
 * Check if the IMEI is valid
 *
 * Return the base64 encoded string of the IMEI
 * ```tsx
 * {
 *  success: true,
 *  message: "IMEI is valid",
 *  data: "base64 encoded string of the IMEI"
 * }
 * ```
 * @param imei
 * @returns
 */
const imeiCheck = async (imei: string) => {
  const response = await api.get<Data>(`/onboarding/login/imeiCheck/${imei}`);
  return response.data;
};
export default imeiCheck;

/**
 * @endpoint https://payrowdev.uaenorth.cloudapp.azure.com
 * @api {get} /onboarding/login/imeiCheck/:imei Check if the IMEI is valid
 */
