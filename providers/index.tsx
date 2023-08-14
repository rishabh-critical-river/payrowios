import React from 'react';
import PaymentModeProvider from './context/payment-mode';

const Providers = ({ children }: React.PropsWithChildren<{}>) => {
  return <PaymentModeProvider>{children}</PaymentModeProvider>;
};

export default Providers;
