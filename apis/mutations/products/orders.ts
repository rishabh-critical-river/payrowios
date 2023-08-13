import api from '@/apis/config';

type Payload = {
  storeId: string;
  orderNumber: string;
  channel: string;
  merchantPhone: string;
  posType: string;
  posId: string;
  posEmail: string;
  posMobile: string;
  paymentDate: string;
  totalTaxAmount: number;
  totalAmount: number;
  toggleExpiration: boolean;
  distributorId: string;
  userId: string;
  mainMerchantId: string;
  purchaseBreakdown: {
    service: {
      serviceCode: string;
      serviceCat: string;
      englishName: string;
      arabicName: string;
      quantity: number;
      transactionAmount: number;
      totalAmount: number;
    }[];
  };
};
type Response = {
  success: boolean;
  data: string;
};
// https://payrowdev.uaenorth.cloudapp.azure.com/api/orders/

/**
 * Create Pin
 */
const orders = async (payload: Payload) => {
  const response = await api.post<Response>(`/api/orders`, payload);
  return response;
};
export default orders;

/**
 * @endpoint https://payrowdev.uaenorth.cloudapp.azure.com
 * @api {post} /api/orders Create Pin
 */
