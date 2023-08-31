export interface PaymentDetailsResponse {
  success: boolean;
  data: Daum[];
  reportPath: string;
}

export interface Daum {
  purchaseBreakdown: PurchaseBreakdown;
  responseCode: number;
  _id: string;
  storeId: string;
  orderNumber: string;
  channel: string;
  posType: string;
  posId: string;
  paymentDate: string;
  customerPhone: string;
  totalTaxAmount: number;
  totalAmount: number;
  toggleExpiration: boolean;
  distributorId: string;
  userId: string;
  mainMerchantId: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface PurchaseBreakdown {
  service: Service[];
  fee: any[];
}

export interface Service {
  serviceCode: string;
  serviceCat: string;
  englishName: string;
  arabicName: string;
  quantity: number;
  transactionAmount: number;
  totalAmount: number;
  _id: string;
  taxDetails: any[];
}
