import api from '@/apis/config';

/**
 * Need to encrypt this in base 64 format
 * {"merchantId":"UAQ02","tid":"123458","imeiNumber":"3336699907"}
 */

type Payload = {
  data: string;
};

type Response = {
  data: any;
};

/**
 * Generate Invoice by invoice number
 */
const sales = async (payload: Payload, token: string) => {
  const response = await api.post<Response>(`/api/orders/sales`, payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};
export default sales;

/**
 * @endpoint https://payrowdev.uaenorth.cloudapp.azure.com
 * @api {post} /api/orders/sales Create Pin
 */
