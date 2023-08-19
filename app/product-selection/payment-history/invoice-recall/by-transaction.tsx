import React, { useState } from 'react';

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import moment from 'moment';
import ShareModel from '@/components/share-model';
import payInvoice from '@/apis/mutations/order/pay-invoice';
import useStorageData from '@/apis/hooks/use-storage-data';

function ByTransactionPage() {
  const router = useRouter();

  const [model, setModal] = useState(false);
  const { auth } = useStorageData('auth');

  const toggleModal = React.useCallback(() => {
    setModal(!model);
  }, [model]);

  // For Token and User

  const { user } = useStorageData('user');
  const params = useLocalSearchParams();

  const safeRef = React.useRef<boolean>(false);
  const [transactionData, setTransactionData] = React.useState<any>(null);

  React.useEffect(() => {
    safeRef.current = true;
    if (safeRef.current && user?.token) {
      safeRef.current = true;
      const payload = {
        invoiceNum: '023521559598' as string,
      };
      payInvoice(payload, user?.token).then(({ data }) => {
        setTransactionData(data);
      });
    }
    return () => {
      safeRef.current = false;
    };
  }, [user?.token]);

  console.log('HELLO', transactionData);

  // {"data": [{"__v": 0,
  // "_id": "64dfb7f6f5ed563332b1fc3c",
  // "channel": "Cash",
  // "createdAt": "2023-08-18T18:27:02.409Z",
  // "distributorId": "MANZ101",
  // "mainMerchantId": "PRMID63",
  // "orderNumber": "023521559598",
  // "paymentDate": "2023-08-18T18:27:01.682Z",
  // "posId": "PRMID63", "posType":
  // "pos", "purchaseBreakdown": [Object],
  // "storeId": "Owner",
  // "toggleExpiration": true,
  // "totalAmount": 6.3,
  // "totalTaxAmount": 0.3,
  // "updatedAt": "2023-08-18T18:28:35.748Z", "userId": "PRMID63"}], "success": true}

  const invoiceMeta = React.useMemo(() => {
    return {
      'Merchant #': transactionData?.mainMerchantId,
      'Terminal ID': auth?.tid,
      Sequence: '---',
      InvoiceNumber: transactionData?.orderNumber,
      'Total Amount': transactionData?.totalAmount,
      'Cash Received': '---',
      'Customer Balance': '---',
      '5% VAT': transactionData?.totalTaxAmount,
    };
  }, [transactionData]);

  console.log(transactionData?.mainMerchantId);

  return (
    <>
      <ScrollView style={{ backgroundColor: 'white' }}>
        <View style={{ display: 'flex', flex: 1, backgroundColor: 'white' }}>
          <View
            style={{
              marginLeft: 19.98,
              marginTop: 17,
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <TouchableOpacity onPress={router.back}>
              <Image
                source={require('@/assets/icons/arrow_back.png')}
                style={{
                  width: 16.03,
                  height: 16.03,
                  marginRight: 35.98,
                }}
              />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '500',
                lineHeight: 32,
                letterSpacing: 0.5,
                color: '#4B5050',
              }}
            >
              Invoice
            </Text>
          </View>
          <Image
            style={{
              width: 150,
              height: 48.3,
              alignSelf: 'center',
              marginTop: 24,
            }}
            source={require('@/assets/onboarding/payrowLogo.png')}
          />
          <Text
            style={{
              textAlign: 'center',
              fontWeight: '400',
              fontSize: 22,
              marginTop: 10,
              color: '#333333',
              marginBottom: 6,
              lineHeight: 28,
            }}
          >
            Textiles Inc.
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: '400',
              fontSize: 14,
              marginBottom: 12,
              lineHeight: 20,

              color: '#4B5050B2',
            }}
          >
            Location details & PO Box
          </Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginLeft: 32,
              marginRight: 32,
            }}
          >
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: 12,
              }}
            >
              <Text
                style={{
                  color: '#4B5050B2',
                  fontWeight: '400',
                  fontSize: 12,
                }}
              >
                Date:
              </Text>
              <Text style={{ color: '#4B5050B2' }}>
                {/* 24/08/2023 */}
                {moment().format(`D/M/YYYY`)}
              </Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: 12,
              }}
            >
              <Text style={{ color: '#4B5050B2' }}>Time:</Text>
              <Text style={{ color: '#4B5050B2' }}>
                {moment().format(`HH:MM`)}
              </Text>
            </View>
          </View>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: '500',
              fontSize: 16,
              marginTop: 16,
              color: '#4B5050',
              marginBottom: 16,
            }}
          >
            Transaction Successful
          </Text>
          {Object.entries(invoiceMeta).map(([key, value], index) => {
            return (
              <View
                key={index}
                style={{ display: 'flex', flexDirection: 'column', gap: 0 }}
              >
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginLeft: 32,
                    marginRight: 32,
                  }}
                >
                  <Text
                    style={{
                      color: '#4B5050B2',
                      fontWeight: '400',
                      fontSize: 12,
                    }}
                  >
                    {key}
                  </Text>

                  <Text
                    style={{
                      color: '#4B5050B2',
                      fontWeight: '400',
                      fontSize: 12,
                    }}
                  >
                    {value}
                  </Text>
                </View>
              </View>
            );
          })}
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginLeft: 32,
              marginRight: 32,

              marginTop: 20,
            }}
          >
            <Text
              style={{
                color: '#333333',
                fontWeight: '500',
                fontSize: 14,
                lineHeight: 20,
              }}
            >
              Amount: AED 250
            </Text>

            <Text
              style={{
                color: '#333333',
                fontWeight: '500',
                fontSize: 14,
                lineHeight: 20,
              }}
            >
              AUTH CODE: 00
            </Text>
          </View>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: '500',
              fontSize: 16,
              marginTop: 20,
              color: '#4B5050',
              marginBottom: 32,
              opacity: 0.800000011920929,
            }}
          >
            -- Thank You --
          </Text>
        </View>
        <View style={{ backgroundColor: 'white' }}>
          <TouchableOpacity
            style={styles.goToSummaryButton}
            onPress={toggleModal}
          >
            <View style={styles.buttonContent}>
              <Text style={styles.buttonText}>SHARE CUSTOMER COPY </Text>
              <View style={styles.arrowIcon}>
                <Entypo name="share" size={22} color="white" />
              </View>
            </View>
          </TouchableOpacity>

          <Text
            style={{
              fontSize: 14,
              backgroundColor: 'white',
              color: '#7f7f7f',
              textAlign: 'center',
              // paddingBottom: 15,
              fontWeight: '400',
              lineHeight: 20,
              letterSpacing: 0.25,
              marginTop: 16,
              paddingBottom: 16,
            }}
          >
            ©2022 PayRow Company. All rights reserved
          </Text>
        </View>
      </ScrollView>
      <ShareModel onClose={() => toggleModal()} show={model} />
    </>
  );
}

export default ByTransactionPage;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  modalContainer: {
    flex: 0.8,
    justifyContent: 'center',
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 16,
  },
  modalContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  phoneNumberInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 16,
    borderRadius: 8,
  },
  submitButton: {
    backgroundColor: 'blue',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resendCode: {
    alignSelf: 'center',
    marginTop: 16,
    width: '80%',
  },
  buttonContent: {
    borderWidth: 0.6,
    borderColor: '#4B5050',
    backgroundColor: '#4B5050',
    borderRadius: 8,

    height: 48,
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonText: {
    fontSize: 16,
    paddingLeft: 16,
    paddingTop: 12,
    fontWeight: '500',
    lineHeight: 24,
    justifyContent: 'center',
    color: 'white',
    letterSpacing: 0.1,
    flex: 1,
  },
  goToSummaryButton: {
    alignSelf: 'center',

    width: '80%',
  },

  logo: {
    width: 150,
    height: 48.3,
    alignSelf: 'center',
    marginTop: 32,
  },
  arrowIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  languageLogo: {
    width: 40,
    height: 40,
    marginLeft: 170,
    marginTop: 30,
  },
  homeBlocks: {
    fontSize: 14,
    fontWeight: '500',
    flex: 1,
    marginTop: 14,

    color: '#4B5050',
    lineHeight: 20,

    marginLeft: 16,
  },
  homeElements: {
    marginTop: 24,

    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxHeight: 448,
  },
  text: {
    fontSize: 15,
    fontWeight: '500',
    color: '#838c95',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 15,
  },
  box: {
    borderWidth: 1,
    borderColor: '#4B505040',
    borderRadius: 9,
    marginBottom: 16,
    width: 296,
    height: 48,
    textAlign: 'center',
    flexDirection: 'row',
  },
  button: {
    alignSelf: 'center',

    color: 'black',
    padding: 10,
    fontSize: 20,
    height: 60,
    width: 60,
    cursor: 'pointer',
    borderRadius: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
