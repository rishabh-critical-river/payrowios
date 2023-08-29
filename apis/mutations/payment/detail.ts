import api from '@/apis/config';

type Payload = {
  dates: {
    from: string;
    to: string;
  };
  tid: string;
  key: string;
  channel: string;
  merchantId: string;
};

type Response = {
  success: boolean;
  message: string;
};

/**
 * Fetch Payment Details
 */
const paymentDetails = async (payload: Payload, token: string) => {
  const response = await api.post<Response>(
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

// https://payrowdev.uaenorth.cloudapp.azure.com/gateway/payrow/paymentdetails

// {
//   "tid": "RAMZ101",
//    "key": "eyJudW0iOjc5ODIzMzQyLCJ2YWxpZGF0aW9uIjoiS2V5IFZhbGlkYXRpb24ifQ==",
//   "channel": "Cash",
//   "merchantId":"PRMID63",
//   "dates": {
//       "from": "2023-08-29"

//   }
// }
