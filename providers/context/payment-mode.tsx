import React from 'react';
import { PaymentMode } from '@/apis/enums';

type PaymentModeContextType = [
  PaymentMode | null,
  React.Dispatch<React.SetStateAction<any>>
];
/**
 * Payment mode context
 */
export const PaymentModeContext = React.createContext<PaymentModeContextType>([
  null,
  () => {},
]);
/**
 * Payment mode provider
 */
const PaymentModeProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [paymentMode, setPaymentMode] = React.useState(null);

  return (
    <PaymentModeContext.Provider value={[paymentMode, setPaymentMode]}>
      {children}
    </PaymentModeContext.Provider>
  );
};

export default PaymentModeProvider;
/**
 * Payment method types
 */
export type PaymentMethodTypes = {
  country: string;
  route: 'tap-to-pay' | 'cash-payment' | 'pay-by-link' | 'pay-by-qr-code';
  value: string;
};
/**
 * Payment methods
 */
export const paymentMethods: PaymentMethodTypes[] = [
  { country: 'TAP TO PAY', route: 'tap-to-pay', value: PaymentMode.TAPTOPAY },
  {
    country: 'CASH PAYMENT',
    route: 'cash-payment',
    value: PaymentMode.CASHPAYMENT,
  },
  {
    country: 'PAY BY LINK',
    route: 'pay-by-link',
    value: PaymentMode.PAYBYLINK,
  },
  {
    country: 'PAY BY QR CODE',
    route: 'pay-by-qr-code',
    value: PaymentMode.PAYBYQRCODE,
  },
];
