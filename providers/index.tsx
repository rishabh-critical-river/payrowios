import React from 'react';
import PaymentModeProvider from './context/payment-mode';
import OrderMetaProvider from './context/order-meta';
import InvoiceRecallProvider from './context/invoice-recall';

const Providers = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <PaymentModeProvider>
      <OrderMetaProvider>
        <InvoiceRecallProvider>{children}</InvoiceRecallProvider>
      </OrderMetaProvider>
    </PaymentModeProvider>
  );
};

export default Providers;
