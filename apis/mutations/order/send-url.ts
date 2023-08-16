import api from '@/apis/config';

type Payload = {
  subject: string;
  email: string;
  url: string;
};

type Response = {
  success: boolean;
  message: string;
};

/**
 * Generate Invoice by invoice number
 */
const sendUrl = async (payload: Payload, token: string) => {
  const response = await api.post<Response>(
    `/gateway/payrow/sendUrl/`,
    payload,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response;
};
export default sendUrl;

/**
 * @endpoint https://payrowdev.uaenorth.cloudapp.azure.com
 * @api {post} /gateway/payrow/sendUrl Create Pin
 */
