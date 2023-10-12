import api from '@/apis/config';

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
const getRingChart = async (merchantId: string, token: string) => {
  console.log('merchantId', merchantId);
  const response = await api.get<Data>(
    `/api/orders/totalAmount/${merchantId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response;
};
export default getRingChart;

/**
 * @endpoint https://payrowdev.uaenorth.cloudapp.azure.com
 * @api {get} /api/orders/totalAmount/:merchantId Check if the IMEI is valid
 */

// https://payrowdev.uaenorth.cloudapp.azure.com
