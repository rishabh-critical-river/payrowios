import api from '@/apis/config';
import useSWR from 'swr';
type options = {
  imei: string | number;
};
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
const getProducts = async () => {
  const response = await api.get<Data>(`/services/smbServices/product`);
  return response;
};
export default getProducts;

/**
 * @endpoint https://payrowdev.uaenorth.cloudapp.azure.com
 * @api {get} /onboarding/login/imeiCheck/:imei Check if the IMEI is valid
 */
