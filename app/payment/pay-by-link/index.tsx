import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from 'react-native';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import Modal from 'react-native-modal';
import { useRouter } from 'expo-router';
import { PaymentMode, SharingApps } from '@/apis/enums';
import useStorageData from '@/apis/hooks/use-storage-data';
import PanelView from '@/components/view/PanelView';
import sendUrl from '@/apis/mutations/order/send-url';
import useShare from '@/hooks/use-share';
import useProduct from '@/store/hooks/use-product';
import percentange from '@/hooks/lib/percentange';
import { OrderMetaContext } from '@/providers/context/order-meta';
import orderByLink from '@/apis/mutations/products/by-link';
import ShareModel from '@/components/share-model';

type Response = {
  checkoutUrl: string;
};

function CashPayment() {
  const router = useRouter();
  const { state } = useProduct();
  const totalAmount = state.total;
  const taxAmount = percentange(5, Number(totalAmount));
  const finalAmount = totalAmount + taxAmount;
  const { user } = useStorageData('user', { decode: true });
  const { user: withToken } = useStorageData('user');
  // console.log({ withToken });
  const [response, setResponse] = useState<Response | null>(null);
  const [orderMeta] = React.useContext(OrderMetaContext);

  const handleDismissKeyboard = () => {
    Keyboard.dismiss();
  };
  const [isModalVisible, setModalVisible] = useState(false);

  const onPayByCash = React.useCallback(async () => {
    if (user) {
      try {
        const payload = {
          username: 'DED',
          password: 'k9WXdMG9U0IINHN',
          orderNumber: orderMeta.orderNumber,
          customerAddressLine1: '3435646464',
          customerAddressLine2: 'MagnatiPay',
          language: 'EN',
          channel: 'ECOMMERCE',
          governmentServices: true,
          addTransactionFeesOnTop: true,
          merchantSiteUrl: 'http://172.16.4.44:6500/login',
          merchantBankTransferReturnUrl:
            'https://payrowdev.uaenorth.cloudapp.azure.com/gateway/payrow/reponseCheck',
          paymentMethodList: ['EDIRHAM_CARD', 'NON_EDIRHAM_CARD'],
          sessionTimeoutSecs: '600',
          customerName: 'khaja',
          urn: '1234',
          paymentMethod: 'EDIRHAM_CARD',
          orderStatus: 'Pending',
          customerEmail: user?.emailId,
          customerPhone: user?.mobileNumber,
          customerCity: 'Test City',
          customerState: 'Test State',
          customerCountry: 'UAE',
          customerPostalCode: '225 Umm Al Quwain – UAE',
          purchaseDetails: {
            service: state.purchaseBreakdown.service.map((item) => {
              return {
                serviceCode: '10000',
                quantity: item.quantity,
                transactionAmount: item.transactionAmount,
                numberOfUnits: item.quantity,
              };
            }),
          },
        };
        // console.log('Ready To Pay', { payload });
        console.log(payload);
        const { data } = await orderByLink(payload, withToken?.token);
        setResponse(data);
        setModalVisible(true);
      } catch (error) {
        console.log('Error from Orders', { error });
      }
    }
  }, [user, state.purchaseBreakdown, finalAmount, taxAmount, withToken?.token]);

  return (
    <>
      <TouchableWithoutFeedback onPress={handleDismissKeyboard}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <View style={styles.container}>
            <View
              style={{
                marginLeft: 16,
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
                }}
              >
                Pay By Link
              </Text>
            </View>
            <View
              style={{
                marginLeft: 32,
                marginRight: 32,
              }}
            >
              <Image
                style={{
                  width: 150,
                  height: 48.3,
                  alignSelf: 'center',
                  marginTop: 22,
                }}
                source={require('@/assets/onboarding/payrowLogo.png')}
              />
              <Text
                style={{
                  fontSize: 22,
                  fontWeight: '400',
                  lineHeight: 28,
                  textAlign: 'center',
                  marginTop: 22,
                }}
              >
                Textiles INC.
              </Text>

              <View
                style={{
                  borderWidth: 1,
                  borderColor: '#4B50500D',
                  borderRadius: 8,
                  marginTop: 16,
                  width: 133,
                  height: 30,
                  alignSelf: 'center',

                  backgroundColor: '#4B50500D',
                }}
              >
                <Text
                  style={{
                    alignSelf: 'center',
                    marginTop: 6,
                    fontWeight: '500',
                    fontSize: 13,
                    lineHeight: 18,
                    letterSpacing: -0.08,
                    color: '#4B5050',
                  }}
                >
                  MID: {user?.merchantId}
                </Text>
              </View>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: '#4B505040',

                  shadowColor: '#757E6E14',
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,

                  borderRadius: 8,
                  marginTop: 24,
                  width: 296,
                  height: 48,
                  alignSelf: 'center',
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    router.push('/products/add-item');
                  }}
                  style={{
                    flexDirection: 'row',
                  }}
                >
                  <Text
                    style={{
                      flex: 1,
                      marginLeft: 16,
                      marginTop: 14,
                      fontWeight: '500',
                      fontSize: 14,
                      lineHeight: 20,
                      letterSpacing: 0.1,
                      color: '#4B5050',
                    }}
                  >
                    ADD ITEMS
                  </Text>
                  <Image
                    source={require('@/assets/icons/plusicon.png')}
                    style={{
                      width: 20,
                      height: 20,
                      marginRight: 16,
                      marginTop: 15,
                      backgroundColor: '#4B5050E5',
                      borderRadius: 10,
                    }}
                  />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: '#4B505040',

                  shadowColor: '#757E6E14',
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,

                  borderRadius: 8,
                  marginTop: 16,
                  width: 296,
                  height: 48,
                  alignSelf: 'center',
                }}
              >
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 10,
                  }}
                >
                  <Text
                    style={{
                      flex: 1,
                      marginLeft: 16,

                      fontWeight: '500',
                      fontSize: 14,
                      lineHeight: 20,
                      letterSpacing: 0.1,
                      color: '#4B5050',
                    }}
                  >
                    SCAN BARCODE
                  </Text>
                  <MaterialCommunityIcons
                    style={{ marginRight: 16 }}
                    name="barcode-scan"
                    size={24}
                    color="black"
                  />
                </View>
              </View>
            </View>
            <View
              style={{
                width: 296,

                marginTop: 32,

                alignSelf: 'center',
                flexDirection: 'row',
                gap: 3,
              }}
            >
              {Array.from({ length: 60 }).map((_, index) => (
                <View
                  key={index}
                  style={{
                    backgroundColor: '#4B5050E5',
                    width: 2,
                    height: 1.2,
                  }}
                />
              ))}
            </View>
          </View>

          <View
            style={{
              backgroundColor: 'white',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
            }}
          >
            <View style={{ alignSelf: 'center', marginTop: 20 }}>
              <Text
                style={{
                  marginBottom: 36,
                  fontSize: 14,
                  lineHeight: 20,
                  color: '#4B5050',
                  fontWeight: '400',
                  opacity: 0.800000011920929,
                  alignSelf: 'center',
                }}
              >
                Add amount to pay
              </Text>
              <Text
                style={{
                  // marginBottom: 5,
                  fontSize: 12,
                  color: '#4B5050',
                  fontWeight: '400',
                  opacity: 0.800000011920929,
                }}
              >
                Amount
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <TextInput
                  keyboardType="numeric"
                  style={{
                    color: '#4B5050',
                    fontWeight: '400',
                    fontSize: 16,
                    lineHeight: 18,
                    opacity: 0.7,
                    // marginBottom: 8,
                  }}
                  placeholder="0.0"
                  value={totalAmount.toFixed(2)}
                  editable={false}
                />
                <Text
                  style={{
                    color: '#4B505099',
                    fontWeight: '400',
                    letterSpacing: 0.25,
                    fontSize: 14,
                    marginLeft: 5,
                    lineHeight: 20,
                    opacity: 0.7,
                    marginBottom: 4,
                  }}
                >
                  AED
                </Text>
              </View>

              <View
                //horizontal line
                style={{
                  backgroundColor: '#4B505099',

                  width: 296,
                  height: 1.5,
                  opacity: 0.7,
                  alignSelf: 'center',
                }}
              />
            </View>

            {/* <View
            style={{
              borderWidth: 1,
              borderColor: "#4B505040",
              borderRadius: 8,
              marginTop: 26.5,
              width: 296,
              height: 52,
              alignSelf: "center",
              backgroundColor: "#4B505080",
            }}
          >
            <View
              style={{
                marginTop: 18,
                marginLeft: 16,
                flexDirection: "row",
              }}
            >
              <View>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: "#FFFFFF",

                    width: 14,
                    height: 3.61,

                    backgroundColor: "#FFFFFF",
                    marginBottom: 2.58,
                  }}
                />
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: "#FFFFFF",

                    width: 14,
                    height: 3.61,

                    marginBottom: 2.58,
                    backgroundColor: "#FFFFFF",
                  }}
                />
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: "#FFFFFF",

                    width: 14,
                    height: 3.61,

                    backgroundColor: "#FFFFFF",
                  }}
                />
              </View>
              <Text
                style={{
                  fontWeight: "400",
                  fontSize: 22,
                  lineHeight: 28,
                  color: "#FFFFFF",
                  marginLeft: 4,
                  bottom: 6,
                }}
              >
                Pay
              </Text>
            </View>
          </View> */}

            {/* <View
            style={{
              width: "80%",
              alignSelf: "center",
              height: 48,
              borderRadius: 10,

              borderWidth: 1,
              borderColor: "rgba(75, 80, 80, 0.2)",
              flexDirection: "row",
              alignItems: "center",
              marginTop: 22,
            }}
          >
            <Text style={styles.priceLabel}>Balance</Text>
            <View style={styles.priceTextContainer}>
              <Text style={styles.priceText}>300</Text>
              <Text style={styles.priceCurrency}>AED</Text>
            </View>
          </View> */}

            <TouchableOpacity
              style={styles.goToSummaryButton}
              // onPress={() => {
              //   router.push("/payment/pay-by-link/cash-invoice");
              // }}
              onPress={onPayByCash}
            >
              <View style={styles.buttonContent}>
                <View style={{ justifyContent: 'center', marginLeft: 16 }}>
                  <View
                    style={{
                      borderWidth: 1,
                      borderColor: '#8EBD6C',

                      width: 14,
                      height: 3.61,

                      backgroundColor: '#8EBD6C',
                      marginBottom: 2.58,
                    }}
                  />
                  <View
                    style={{
                      borderWidth: 1,
                      borderColor: '#8EBD6C',

                      width: 14,
                      height: 3.61,

                      marginBottom: 2.58,
                      backgroundColor: '#8EBD6C',
                    }}
                  />
                  <View
                    style={{
                      borderWidth: 1,
                      borderColor: '#8EBD6C',

                      width: 14,
                      height: 3.61,

                      backgroundColor: '#8EBD6C',
                    }}
                  />
                </View>
                <Text style={styles.buttonText}>Pay</Text>
                <View style={styles.arrowIcon}>
                  <AntDesign name="arrowright" size={22} color="white" />
                </View>
              </View>
            </TouchableOpacity>

            <Text
              style={{
                fontSize: 12,
                backgroundColor: 'white',
                color: '#7f7f7f',
                textAlign: 'center',
                paddingBottom: 15,
                marginTop: 10,
              }}
            >
              ©2022 PayRow Company. All rights reserved
            </Text>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
      <ShareModel
        show={isModalVisible}
        onClose={() => setModalVisible(false)}
        onPressHome={() => router.push('/home/')}
      />
    </>
  );
}

export default CashPayment;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  buttonContainer: {
    width: '80%',
    height: 48,
    backgroundColor: '#4B5050',
    alignSelf: 'center',
    borderRadius: 8,
    marginTop: 20,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  containers: {
    width: '80%',
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(75, 80, 80, 0.25)',
    alignSelf: 'center',
    marginTop: 31,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    shadowColor: '#757e6e',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.08,
    shadowRadius: 3,
  },
  badge: {
    width: 71,
    height: 26,
    borderRadius: 8,
    backgroundColor: '#4B50500D',
    textAlign: 'center',
    paddingTop: 4,
    marginRight: 22,
  },
  itemContainer: {
    width: '100%',
    alignSelf: 'center',
    height: 77,
    borderRadius: 10,
    marginBottom: 10,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(75, 80, 80, 0.2)',
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceContainer: {
    width: '80%',
    alignSelf: 'center',
    height: 48,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'rgba(75, 80, 80, 0.2)',
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceLabel: {
    fontWeight: '500',
    flex: 1,
    fontSize: 14,
    lineHeight: 20,
    color: '#4B5050',
    marginLeft: 16,
  },
  priceTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    color: '#333333',
  },
  priceText: {
    fontSize: 22,
    fontWeight: '500',
    lineHeight: 28,
  },
  priceCurrency: {
    color: '#4B505099',
    marginRight: 14,
    marginLeft: 9,
  },
  goToSummaryButton: {
    alignSelf: 'center',
    marginTop: 32,
    width: '80%',
  },
  buttonContent: {
    borderWidth: 0.6,
    borderColor: '#4B5050',
    backgroundColor: '#4B5050',
    borderRadius: 8,
    marginBottom: 16,
    height: 48,
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonText: {
    fontSize: 22,
    paddingLeft: 4,
    paddingTop: 12,
    fontWeight: '500',
    lineHeight: 24,
    justifyContent: 'center',
    color: 'white',
    letterSpacing: 0.1,
    flex: 1,
  },
  arrowIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  footerText: {
    fontSize: 12,
    backgroundColor: 'white',
    color: '#7f7f7f',
    textAlign: 'center',
    paddingBottom: 15,
  },
  logo: {
    width: 150,
    height: 48.3,
    alignSelf: 'center',
    marginTop: 33,
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
    marginLeft: 165,
    backgroundColor: '#72ac47',
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
});
