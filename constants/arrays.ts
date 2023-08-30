import { PaymentMode } from '@/apis/enums';

export const dailyReportArray = [
  {
    name: 'Tap to Pay',
    slug: PaymentMode.TAPTOPAY,
  },
  {
    name: 'Cash Invoice',
    slug: PaymentMode.CASHPAYMENT,
  },
  {
    name: 'Pay by Link',
    slug: PaymentMode.PAYBYLINK,
  },
  {
    name: 'Pay by QR',
    slug: PaymentMode.PAYBYQRCODE,
  },
];
