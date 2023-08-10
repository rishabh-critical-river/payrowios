import api from '@/apis/config';

type options = {
  imei: string | number;
};
type Data = {
  success: boolean;
  message: string;
  data: any;
};

/**
 * Get the list of products
 * ```tsx
 * {
 *  success: true,
 *  data: [Array of products]
 * }
 * ```
 * @param imei
 * @returns
 */
const getProducts = async (token: string) => {
  const response = await api.get<Data>(`/services/smbServices/product`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};
export default getProducts;

/**
 * @endpoint https://payrowdev.uaenorth.cloudapp.azure.com
 * @api {get} /onboarding/login/imeiCheck/:imei Check if the IMEI is valid
 */
