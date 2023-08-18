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
 * Fetch Payment Details
 */
const paymentDetails = async (payload: Payload, token: string) => {
  const response = await api.put<Response>(
    `/gateway/payrow/paymentdetails`,
    payload,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response;
};
export default paymentDetails;

/**
 * @endpoint https://payrowdev.uaenorth.cloudapp.azure.com
 * @api {post} /gateway/payrow/paymentdetails Fetch Payment Details
 */
