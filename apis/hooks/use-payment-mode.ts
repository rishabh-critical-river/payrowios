import React from 'react';
import useProduct from '@/store/hooks/use-product';
import useStorageData from './use-storage-data';
import jwtActions from '@/lib/jwt-actions';
import keyValidation from '@/lib/num-characters';
import orders from '../mutations/products/orders';

type User = {
  role: string;
  id: string;
  userId: string;
  firstName: string;
  lastName: string;
  merchantId: string;
  reportingID: string;
  storeId: string;
  mobileNumber: number;
  emailId: string;
  businessType: string;
  key: string;
  iv: string;
  AES: string;
  validation: string;
  iat: number;
};

const paymentMode = {
  cash: 'Cash',
  link: 'Link',
};

const usePaymentMode = () => {
  const { user } = useStorageData('user');
  const { state } = useProduct();
  const adminData = jwtActions.decode<User>(user?.token);

  const orderNumber = React.useMemo(() => {
    return keyValidation(10);
  }, []);

  const onPayByCash = React.useCallback(async () => {
    if (adminData) {
      try {
        const payload = {
          storeId: adminData?.storeId,
          orderNumber,
          channel: paymentMode.cash,
          merchantPhone: adminData?.mobileNumber,
          posType: 'pos',
          posId: adminData?.userId,
          posEmail: adminData?.emailId,
          posMobile: adminData?.mobileNumber,
          paymentDate: new Date().toISOString(),
          totalTaxAmount: 1,
          totalAmount: state.total,
          toggleExpiration: true,
          distributorId: 'MANZ101',
          userId: adminData?.userId,
          mainMerchantId: adminData?.merchantId,
          purchaseBreakdown: state.purchaseBreakdown,
        };
        // console.log('Ready To Pay', { payload });
        const { data } = await orders(payload, user?.token);
        console.log('Data from Orders', { data: data });
      } catch (error) {
        console.log('Error from Orders', { error });
      }
    }
  }, [
    adminData,
    state.purchaseBreakdown,
    state.total,
    paymentMode.cash,
    orderNumber,
  ]);

  return {
    onPayByCash,
  };
};

export default usePaymentMode;
