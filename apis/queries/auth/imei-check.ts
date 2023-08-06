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
const imeiCheck = async (imei: string | number) => {
  const response = await api.get<Data>(`/onboarding/login/imeiCheck/${imei}`);
  return response;
};
export default imeiCheck;

/**
 * @endpoint https://payrowdev.uaenorth.cloudapp.azure.com
 * @api {get} /onboarding/login/imeiCheck/:imei Check if the IMEI is valid
 */

const fetcher = (url: string) => api.get(url).then((res) => res.data);

export const useImeiCheck = ({ imei }: options) => {
  const res = useSWR(`/onboarding/login/imeiCheck/${imei}`, fetcher, {
    revalidateOnFocus: true,
  });
  console.log(res.error);

  return res;
};
