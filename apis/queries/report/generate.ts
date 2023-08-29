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
const generateReport = async (orderID: string, token: string) => {
  const response = await api.get<Data>(
    `/api/report/generate/invoice/${orderID}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response;
};
export default generateReport;

/**
 * @endpoint https://payrowdev.uaenorth.cloudapp.azure.com
 * @api {get} /api/report/generate/invoice/orderID  Generate Report
 */

// https://payrowdev.uaenorth.cloudapp.azure.com/api/report/generate/invoice/2737263212227
