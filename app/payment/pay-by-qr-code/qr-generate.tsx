import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';
import ShareModel from '@/components/share-model';
import useProduct from '@/store/hooks/use-product';
import { PaymentModeContext } from '@/providers/context/payment-mode';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

function QRCode() {
  const router = useRouter();
  const { onReset } = useProduct();
  const [isModalVisible, setModalVisible] = useState(false);
  const [, setPaymentMode] = React.useContext(PaymentModeContext);

  return (
    <>
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
            Pay by QR Code
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
            marginTop: 16,
            textAlign: 'center',
            fontWeight: '500',
            fontSize: 16,
            lineHeight: 24,
            color: '#4B5050',
          }}
        >
          Scan to Pay
        </Text>
        <Text
          style={{
            marginTop: 4,
            textAlign: 'center',
            fontWeight: '400',
            fontSize: 14,
            lineHeight: 20,
            color: '#4B5050',
          }}
        >
          Scan below QR to pay
        </Text>
        <Image
          style={{
            width: 160,
            height: 160,
            alignSelf: 'center',
            marginTop: 32,
          }}
          source={require('@/assets/images/qrpay.png')}
        />
      </View>

      <View style={{ backgroundColor: 'white' }}>
        <TouchableOpacity
          style={styles.resendCode}
          onPress={() => {
            onReset();
            setPaymentMode(null);
            router.push('/products/add-item');
          }}
        >
          <View
            style={{
              borderWidth: 0.5,
              borderColor: '#B2B2B2',
              borderRadius: 8,
              backgroundColor: '#FFFFFF',

              height: 48,
              justifyContent: 'center',
            }}
          >
            <View style={{ flexDirection: 'row' }}>
              <Text
                style={{
                  fontSize: 16,
                  paddingLeft: 16,
                  fontWeight: '500',
                  lineHeight: 24,
                  justifyContent: 'center',
                  color: '#4C4C4C',
                  letterSpacing: 0.1,
                  flex: 1,
                }}
              >
                HOME
              </Text>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginRight: 16,
                }}
              >
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <AntDesign name="arrowright" size={24} color="#4C4C4C" />
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 14,
            backgroundColor: 'white',
            color: '#7f7f7f',
            textAlign: 'center',
            paddingBottom: 15,
            fontWeight: '400',
            lineHeight: 20,
            letterSpacing: 0.25,
            marginTop: 16,
          }}
        >
          ©2022 PayRow Company. All rights reserved
        </Text>
      </View>
      <ShareModel
        show={isModalVisible}
        onClose={() => setModalVisible(false)}
        onPressHome={() => router.push('/home/')}
      />
    </>
  );
}

export default QRCode;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  modalContainer: {
    flex: 0.5,
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
