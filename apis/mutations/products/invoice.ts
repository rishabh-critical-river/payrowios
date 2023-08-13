import api from '@/apis/config';

type Response = {
  success: boolean;
  data: string;
};

/**
 * Generate Invoice by invoice number
 */
const generateInvoice = async (invoiceNumber: string | number) => {
  const response = await api.get<Response>(
    `/api/report/generate/invoice/${invoiceNumber}`
  );
  return response;
};
export default generateInvoice;

/**
 * @endpoint https://payrowdev.uaenorth.cloudapp.azure.com
 * @api {post} api/report/generate/invoice/ Create Pin
 */
