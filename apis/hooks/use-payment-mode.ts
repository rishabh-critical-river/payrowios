import React from 'react';
import useProduct from '@/store/hooks/use-product';
import useStorageData from './use-storage-data';
import jwtActions from '@/lib/jwt-actions';
import orders from '../mutations/products/orders';
import { OrderMetaContext } from '@/providers/context/order-meta';

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
  const { state } = useProduct();

  const { user } = useStorageData('user');
  const [orderMeta] = React.useContext(OrderMetaContext);
  const adminData = jwtActions.decode<User>(user?.token);

  const onPayByCash = React.useCallback(async () => {
    if (adminData) {
      try {
        const _purchaseBreakdown = state.purchaseBreakdown.service.map(
          (item) => {
            return {
              serviceCode: item.serviceCode,
              serviceCat: item.serviceCat,
              englishName: item.englishName,
              arabicName: item.arabicName,
              quantity: item.quantity,
              transactionAmount: item.transactionAmount,
              totalAmount: item.totalAmount,
            };
          }
        );

        const payload = {
          storeId: adminData?.storeId,
          orderNumber: orderMeta.orderNumber,
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
          purchaseBreakdown: _purchaseBreakdown,
        };
        // console.log('Ready To Pay', { payload });
        const { data } = await orders(payload, user?.token);
        console.log('Data from Orders', { data: data });
      } catch (error) {
        console.log('Error from Orders', { error });
      }
    }
  }, [adminData, state.purchaseBreakdown, state.total, paymentMode.cash]);

  return {
    onPayByCash,
  };
};

export default usePaymentMode;
