import useStorageData from '@/apis/hooks/use-storage-data';
import keyValidation from '@/lib/num-characters';
import moment from 'moment';
import React from 'react';

type OrderMetaData = {
  date?: string;
  orderNumber?: string;
  user?: {
    merchantId: string;
  };
};

type OrderMetaContextType = [
  OrderMetaData,
  React.Dispatch<React.SetStateAction<any>>
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
  const { user } = useStorageData('user', { decode: true });
  const _ref = React.useRef(false);

  const [orderMeta, updateOrderMeta] = React.useState({
    date: moment().format('DD-MMM-YY'),
    orderNumber: keyValidation(12),
    user: {
      merchantId: user?.merchantId,
    },
  });

  React.useEffect(() => {
    _ref.current = true;
    if (_ref.current) {
      updateOrderMeta({
        date: moment().format('DD-MMM-YY'),
        orderNumber: keyValidation(12),
        user: {
          merchantId: user?.merchantId,
        },
      });
    }

    return () => {
      _ref.current = false;
    };
  }, [user]);

  return (
    <OrderMetaContext.Provider value={[orderMeta, updateOrderMeta]}>
      {children}
    </OrderMetaContext.Provider>
  );
};

export default OrderMetaProvider;
