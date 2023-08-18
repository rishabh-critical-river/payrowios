import React from 'react';
import { RecallMethodTypes } from '@/apis/enums';

type PaymentModeContextType = [
  null | RecallMethodTypes,
  React.Dispatch<React.SetStateAction<any>>
];
/**
 * Payment mode context
 */
export const InvoiceRecallContext = React.createContext<PaymentModeContextType>(
  [null, () => {}]
);
/**
 * Payment mode provider
 */
const InvoiceRecallProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [recallMethod, setRecallMethod] = React.useState(
    RecallMethodTypes.BYTRANSACTIONID
  );

  return (
    <InvoiceRecallContext.Provider value={[recallMethod, setRecallMethod]}>
      {children}
    </InvoiceRecallContext.Provider>
  );
};

export default InvoiceRecallProvider;
