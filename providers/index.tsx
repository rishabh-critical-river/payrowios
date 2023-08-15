import React from 'react';
import PaymentModeProvider from './context/payment-mode';
import OrderMetaProvider from './context/order-meta';

const Providers = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <PaymentModeProvider>
      <OrderMetaProvider>{children}</OrderMetaProvider>
    </PaymentModeProvider>
  );
};

export default Providers;
