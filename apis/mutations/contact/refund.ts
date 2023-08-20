import api from '@/apis/config';

type Payload = {
  username: string;
  password: string;
  checkoutId: string;
};

type Response = {
  success: boolean;
  message: string;
};

/**
 * For Contact
 */
const createRefund = async (payload: Payload, token: string) => {
  const response = await api.post<Response>(`/gateway/payrow/refund`, payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};
export default createRefund;

/**
 * @endpoint https://payrowdev.uaenorth.cloudapp.azure.com
 * @api {post} api/contact/contactCreation For Contact
 */
