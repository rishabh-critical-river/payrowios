import api from '@/apis/config';

type Payload = {
  name: string;
  email: string;
  message: string;
  mobileNumber: string;
};

type Response = {
  success: boolean;
  message: string;
};

/**
 * For Contact
 */
const createContact = async (payload: Payload, token: string) => {
  const response = await api.post<Response>(
    `api/contact/contactCreation`,
    payload,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response;
};
export default createContact;

/**
 * @endpoint https://payrowdev.uaenorth.cloudapp.azure.com
 * @api {post} api/contact/contactCreation For Contact
 */
