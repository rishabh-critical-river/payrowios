// https://payrowdev.uaenorth.cloudapp.azure.com/gateway/payrow/purchase

import api from '@/apis/config';

export interface Payload {
  username: string;
  password: string;
  orderNumber: string;
  customerAddressLine1: string;
  customerAddressLine2: string;
  language: string;
  channel: string;
  governmentServices: boolean;
  addTransactionFeesOnTop: boolean;
  merchantSiteUrl: string;
  merchantBankTransferReturnUrl: string;
  paymentMethodList: string[];
  sessionTimeoutSecs: string;
  customerName: string;
  urn: string;
  paymentMethod: string;
  orderStatus: string;
  customerEmail: string;
  customerPhone: string;
  customerCity: string;
  customerState: string;
  customerCountry: string;
  customerPostalCode: string;
  purchaseDetails: PurchaseDetails;
}

export interface PurchaseDetails {
  service: Service[];
}

export interface Service {
  serviceCode: string;
  quantity: number;
  transactionAmount: number;
  numberOfUnits: number;
}

type Response = {
  success: boolean;
  data: string;
};

/**
 * Generate Invoice by invoice number
 */
const orderByLink = async (payload: Payload, token: string) => {
  const response = await api.post<Response>(
    `/gateway/payrow/purchase`,
    payload,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response;
};
export default orderByLink;

/**
 * @endpoint https://payrowdev.uaenorth.cloudapp.azure.com
 * @api {post} api/report/generate/invoice/ Create Pin
 */
