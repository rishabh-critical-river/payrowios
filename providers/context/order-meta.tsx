import moment from 'moment';
import React from 'react';
import keyValidation from '@/hooks/lib/num-characters';

type OrderMetaData = {
  date?: string;
  orderNumber?: string;
};

type OrderMetaContextType = [
  OrderMetaData,
  React.Dispatch<React.SetStateAction<any>>,
];

/**
 * Payment mode context
 */
export const OrderMetaContext = React.createContext<OrderMetaContextType>([
  {},
  () => {},
]);
/**
 * Payment mode provider
 */
const OrderMetaProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const _ref = React.useRef(false);
  const state = React.useMemo(() => {
    return {
      date: moment().format('DD-MMM-YY'),
      orderNumber: keyValidation(16),
    };
  }, []);
  const [orderMeta, updateOrderMeta] = React.useState(state);
  React.useEffect(() => {
    _ref.current = true;
    if (_ref.current) {
      updateOrderMeta(state);
    }
    return () => {
      _ref.current = false;
    };
  }, [state]);

  return (
    <OrderMetaContext.Provider value={[orderMeta, updateOrderMeta]}>
      {children}
    </OrderMetaContext.Provider>
  );
};

export default OrderMetaProvider;
