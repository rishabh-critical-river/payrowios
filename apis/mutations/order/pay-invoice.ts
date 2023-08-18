import api from '@/apis/config';

type Payload = {
  invoiceNum: string;
};

type Response = {
  success: boolean;
  message: string;
};

/**
 * Generate Invoice by invoice number
 */
const payInvoice = async (payload: Payload, token: string) => {
  const response = await api.put<Response>(`api/orders/payInvoice`, payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};
export default payInvoice;

/**
 * @endpoint https://payrowdev.uaenorth.cloudapp.azure.com
 * @api {post} api/orders/payInvoice Create Pin
 */
