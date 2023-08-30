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
const getProductByQR = async (orderNumber: string, token: string) => {
  console.log('Order Number', orderNumber);
  console.log('Token', token);
  const response = await api.get<Data>(
    `/gateway/payrow/getQrCodeOrderDetails/${orderNumber}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response;
};
export default getProductByQR;

/**
 * @endpoint https://payrowdev.uaenorth.cloudapp.azure.com
 * @api {get} /onboarding/login/imeiCheck/:imei Check if the IMEI is valid
 */
