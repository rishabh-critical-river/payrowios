import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const selectedItems = [
  {
    _id: '634d14011c7eda7dfa7b13a7',
    itemDescription: 'Apprentice Electrician',
    itemName: 'Apprentice Electrician',
    price: 1.8,
    quantity: 1,
    status: 'Active',
  },
  {
    _id: '634d206d1c7eda7dfa7b13b1',
    itemDescription: 'Journeyman Electrician',
    itemName: 'Journeyman Electrician',
    price: 1.8,
    quantity: 3,
    status: 'Active',
  },
];

const PaymentSummary = () => {
  const router = useRouter();

  return (
    <>
      <View
        style={{
          paddingLeft: 19.98,
          paddingTop: 17,
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#fff',
        }}
      >
        <TouchableOpacity
          onPress={() => {
            // navigation.navigate("AddItem");
            router.push('/products/add-item');
          }}
        >
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
            color: '#333333',
          }}
        >
          Payment Summary
        </Text>
      </View>
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View
          style={{
            position: 'absolute',
            right: 0,
            top: 46,
          }}
        >
          <Image
            source={require('@/assets/icons/Watermark.png')}
            style={{
              width: 36,
              height: 50,
            }}
          />
        </View>
        <View>
          <Image
            style={{
              width: 150,
              height: 48.3,
              alignSelf: 'center',
              marginTop: 33,
            }}
            source={require('@/assets/logos/payrow-logo.png')}
          />

          <Text
            style={{
              textAlign: 'center',
              fontWeight: '400',
              fontSize: 22,
              marginTop: 20,
            }}
          >
            Payment Summary
          </Text>
          <Text
            style={{ textAlign: 'center', marginTop: 8, color: '#4B5050B2' }}
          >
            Select the Payment Mode
          </Text>
        </View>

        <View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 20,
              justifyContent: 'space-between',
            }}
          >
            <Text
              style={{
                marginLeft: 40,
                fontWeight: '400',
                fontSize: 12,
                lineHeight: 16,
                color: '#020202',
              }}
            >
              Date:
            </Text>
            <Text
              style={{
                marginRight: 36,
                fontWeight: '400',
                fontSize: 12,
                lineHeight: 16,
                color: '#020202',
              }}
            >
              16-Mar-23
              {/* Replace with the actual date property */}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 7,
              justifyContent: 'space-between',
            }}
          >
            <Text
              style={{
                marginLeft: 40,
                fontWeight: '400',
                fontSize: 12,
                lineHeight: 16,
                color: '#020202',
              }}
            >
              Merchant:
            </Text>
            <Text
              style={{
                marginRight: 36,
                fontWeight: '400',
                fontSize: 12,
                lineHeight: 16,
                color: '#020202',
              }}
            >
              3245000
              {/* Replace with the actual merchant property */}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 7,
              justifyContent: 'space-between',
            }}
          >
            <Text
              style={{
                marginLeft: 40,
                fontWeight: '400',
                fontSize: 12,
                lineHeight: 16,
                color: '#020202',
              }}
            >
              Order Number :
            </Text>
            <Text
              style={{
                marginRight: 36,
                fontWeight: '400',
                fontSize: 12,
                lineHeight: 16,
                color: '#020202',
              }}
            >
              3245000
              {/* Replace with the actual order number property */}
            </Text>
          </View>
          <View
            style={{
              width: 309,
              borderBottomWidth: 1,
              borderBottomColor: '#999999',
              alignSelf: 'center',
              marginTop: 13,
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              marginTop: 8,
              justifyContent: 'space-between',
            }}
          >
            <Text
              style={{
                marginLeft: 40,
                fontWeight: '500',
                fontSize: 16,
                lineHeight: 24,
              }}
            >
              Product Name
            </Text>
            <Text
              style={{
                marginRight: 36,
                fontWeight: '500',
                fontSize: 16,
                lineHeight: 24,
              }}
            >
              Price
            </Text>
          </View>
          {selectedItems.length > 0 && (
            <View style={{ marginTop: 4 }}>
              {selectedItems?.map((item, index) => (
                <View key={index} style={{ flexDirection: 'row' }}>
                  <Text
                    style={{
                      marginLeft: 40,
                      flex: 1,
                      marginRight: 36,
                      fontWeight: '400',
                      color: '#4B5050',
                      fontSize: 12,
                      lineHeight: 16,
                    }}
                  >
                    {item.itemName}
                  </Text>
                  <Text
                    style={{
                      marginRight: 36,
                      fontWeight: '500',
                      color: '#4B5050',
                      fontSize: 12,
                      lineHeight: 20,
                    }}
                  >
                    {(Number(item.price) * Number(item.quantity)).toFixed(2)}{' '}
                    AED
                  </Text>
                </View>
              ))}
            </View>
          )}
        </View>
      </View>

      <View
        style={{
          backgroundColor: 'white',
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <View
          style={{
            position: 'absolute',
            left: 0,
            bottom: 20,
            zIndex: 999,
          }}
        >
          <Image
            source={require('@/assets/icons/Watermark.png')}
            style={{
              width: 36,
              height: 50,
            }}
          />
        </View>

        <View
          style={{
            width: '80%',
            alignSelf: 'center',
            height: 48,
            borderRadius: 10,
            marginBottom: 10,
            borderWidth: 1,
            borderColor: 'rgba(75, 80, 80, 0.2)',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Text style={styles.priceLabel}>Total Price</Text>
          <View style={styles.priceTextContainer}>
            <Text style={styles.priceText}>{0}</Text>
            <Text style={styles.priceCurrency}>AED</Text>
          </View>
        </View>

        <TouchableOpacity onPress={router.back} activeOpacity={0.5}>
          <View
            style={{
              width: '80%',
              alignSelf: 'center',
              height: 48,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: 'rgba(75, 80, 80, 0.2)',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Text style={styles.priceLabel}>CANCEL</Text>
            <View style={styles.priceTextContainer}>
              <Image
                style={{ width: 24, height: 24, marginRight: 16 }}
                source={require('@/assets/icons/clearblack.png')}
              />
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.goToSummaryButton}
          onPress={() => {
            // navigation.navigate('paymentMode');
            // Payment Mode screen
            router.push('/payment/payment-mode');
          }}
        >
          <View style={styles.buttonContent}>
            <Text style={styles.buttonText}>SELECT PAYMENT MODE</Text>
            <View style={styles.arrowIcon}>
              <AntDesign name="arrowright" size={22} color="white" />
            </View>
          </View>
        </TouchableOpacity>

        <Text style={styles.footerText}>
          ©2022 PayRow Company. All rights reserved
        </Text>
      </View>
    </>
  );
};

export default PaymentSummary;
const styles = StyleSheet.create({
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
    borderRadius: 8,
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
    marginLeft: 16,
  },
  priceTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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
    marginTop: 16,
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
});

// console.log(state.selectedItems);
// const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null);
// const [totalAmount, setTotalAmount] = useState<number>(0);
// const [scanTotal, setScanTotal] = useState(0);
// const params = useLocalSearchParams<Params>();
// console.log(params, 'params');

// useEffect(() => {
//   if (params && params.orderDetails) {
//     setOrderDetails(params.orderDetails);
//   }
// }, [params]);
// useEffect(() => {
//   if (orderDetails && orderDetails.data) {
//     // Map through the order items
//   }
// }, [orderDetails, params]);
// useEffect(() => {
//   if (orderDetails && orderDetails.data) {
//     console.log(orderDetails.data, "orderDetails.data");
//   }
// }, [orderDetails]);
// // useEffect(() => {
// //   if (orderDetails) {
// //     const total = orderDetails.data.reduce((acc: any, item: any) => {
// //       return acc + item.totalAmount;
// //     }, 0);
// //     setScanTotal(total);
// //   }
// // }, [orderDetails]);
