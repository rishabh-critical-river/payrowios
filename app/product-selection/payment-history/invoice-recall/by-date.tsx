import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams } from 'expo-router';
import paymentDetails from '@/apis/mutations/payment/detail';
import useStorageData from '@/apis/hooks/use-storage-data';
import base64 from '@/hooks/lib/base64';
import keyValidation from '@/hooks/lib/num-characters';
import moment from 'moment';

const ByDatePageScreen = () => {
  const { auth } = useStorageData('auth');
  const { user } = useStorageData('user');
  const params = useLocalSearchParams();
  console.log({ params });

  const safeRef = React.useRef<boolean>(false);
  const [transactionList, setTransactionList] = React.useState(
    dummyResponse.data
  );

  React.useEffect(() => {
    safeRef.current = true;
    if (safeRef.current && user?.token) {
      safeRef.current = true;
      const payload = {
        dates: {
          from: params?.fromDate,
          to: params?.endDate,
        },
        tid: auth?.tid,
        // tid: '072837',
        key: base64.encode(
          JSON.stringify({
            num: keyValidation(8),
            validation: 'Key Validation',
          })
        ),
      };
      console.log(payload);
      // When API works comment out this code
      // paymentDetails(payload, user?.token)
      //   .then((data) => {
      //     console.log('By date', data);
      //     setTransactionList(data);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
      // This dummy data for UI testing
      setTransactionList(dummyResponse.data);
    }
    return () => {
      safeRef.current = false;
    };
  }, [params?.fromDate, params?.endDate, user?.token]);

  console.log({ transactionList });

  const simpleKaData = [
    { time: '10:00 AM', transNo: '123', value: '100', status: 'Completed' },
    { time: '11:00 AM', transNo: '456', value: '200', status: 'Pending' },
    { time: '12:00 PM', transNo: '789', value: '150', status: 'Failed' },
    { time: '10:00 AM', transNo: '123', value: '100', status: 'Completed' },
    { time: '11:00 AM', transNo: '456', value: '200', status: 'Pending' },
    { time: '12:00 PM', transNo: '789', value: '150', status: 'Failed' },
    { time: '10:00 AM', transNo: '123', value: '100', status: 'Completed' },
    { time: '11:00 AM', transNo: '456', value: '200', status: 'Pending' },
    { time: '12:00 PM', transNo: '789', value: '150', status: 'Failed' },
    // Add more dummy data as needed
  ];

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
          <Image
            source={require('@/assets/icons/arrow_back.png')}
            style={{
              width: 16.03,
              height: 16.03,
              marginRight: 35.98,
            }}
          />
          <Text
            style={{
              fontSize: 20,
              fontWeight: '500',
              lineHeight: 32,
              letterSpacing: 0.5,
              color: '#4B5050',
            }}
          >
            Tap to Pay
          </Text>
        </View>
        <Text
          style={{
            color: '#4B5050',
            fontWeight: '500',
            fontSize: 16,
            lineHeight: 24,
            marginLeft: 30,
            marginTop: 30,
          }}
        >
          Name of the Business
        </Text>
        <View
          style={{
            flexDirection: 'row',
            marginLeft: 30,
            marginTop: 4,
          }}
        >
          <Text
            style={{
              color: '#4B5050B2',
              fontSize: 14,
              fontWeight: '400',
              lineHeight: 20,
              marginRight: 13,
            }}
          >
            Dubai
          </Text>
          <Text
            style={{
              color: '#4B5050B2',
              fontSize: 14,
              fontWeight: '400',
              lineHeight: 20,
            }}
          >
            Vat No. 3100984
          </Text>
        </View>
        <Text
          style={{
            color: '#4B5050',
            fontWeight: '500',
            fontSize: 13,
            lineHeight: 18,
            marginLeft: 30,
            marginTop: 6,
          }}
        >
          MID: 0987654321
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 32,
            marginRight: 32,
            marginTop: 24,
          }}
        >
          <View
            style={{
              width: 38,
              height: 38,
              backgroundColor: '#4B50500F',
              marginRight: 8,
            }}
          >
            <MaterialCommunityIcons
              name="calendar-today"
              size={20}
              color="black"
              style={{ marginLeft: 9, marginTop: 9 }}
            />
          </View>
          <Text>June</Text>
        </View>

        <View
          style={{
            borderBottomColor: '#4B505026',
            borderBottomWidth: 1,
            marginTop: 25,
            marginLeft: 32,
            marginRight: 32,
          }}
        />
        <View
          style={{
            marginLeft: 50,
            marginRight: 50,
            flexDirection: 'row',
            marginTop: 9,
          }}
        >
          <Text
            style={{
              fontSize: 12,
              fontWeight: '500',
              lineHeight: 16,
              color: '#4C4C4C',
            }}
          >
            Day
          </Text>
          <Text
            style={{
              marginLeft: 40,
              marginRight: 36,
              fontSize: 12,
              fontWeight: '500',
              lineHeight: 16,
              color: '#4C4C4C',
            }}
          >
            Value
          </Text>
          <Text
            style={{
              marginRight: 40,
              fontSize: 12,
              fontWeight: '500',
              lineHeight: 16,
              color: '#4C4C4C',
            }}
          >
            Total Income
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '500',
              lineHeight: 16,
              color: '#4C4C4C',
            }}
          >
            Download
          </Text>
        </View>
        <View
          style={{
            borderBottomColor: '#4B505026',
            borderBottomWidth: 1,
            marginTop: 9,
            marginLeft: 32,
            marginRight: 32,
          }}
        />
        <View style={styles.container}>
          <FlatList
            data={transactionList}
            renderItem={({ item, index }) => {
              const payload = {
                time: moment(item.purchaseDate).format('hh:mm A'),
                transNo: item.auth,
                value: item.totalAmount.toFixed(2),
                status: item.checkoutStatus,
              };
              return <List item={payload} index={index} />;
            }}
            // <View key={index}>
            //   <Text>{moment(item.purchaseDate).format('hh:mm A')}</Text>
            //   <Text>{item.totalAmount.toFixed(2)}</Text>
            // </View>
            keyExtractor={(item, index) => index.toString()}
          />
          {/* <FlatList
            data={simpleKaData}
            renderItem={({ item, index }) => <List item={item} index={index} />}
            keyExtractor={(item, index) => index.toString()}
          /> */}
        </View>
      </View>
      <View style={{ backgroundColor: 'white' }}>
        <Text
          style={{
            fontSize: 12,
            backgroundColor: 'white',
            color: '#7f7f7f',
            textAlign: 'center',
            paddingBottom: 15,
          }}
        >
          ©2022 PayRow Company. All rights reserved
        </Text>
      </View>
    </>
  );
};

type ListProps = {
  item: {
    time: string;
    transNo: string;
    value: string;
    status: string;
  };
  index: number;
};

const List = ({ item, index }: ListProps) => {
  const rowStyle = index % 2 === 0 ? styles.whiteRow : styles.blackRow;

  return (
    <View style={[styles.rowContainer, rowStyle]}>
      <Text
        style={{
          color: '#4B5050',
          fontWeight: '400',
          lineHeight: 16,
          fontSize: 11,
          marginRight: 45,
        }}
      >
        {item.time}
      </Text>
      <View style={styles.infoContainer}>
        <Text
          style={{
            color: '#4B5050',
            fontWeight: '400',
            lineHeight: 16,
            fontSize: 11,
            marginRight: 60,
            // maxWidth: 40,
          }}
          // numberOfLines={1}
        >
          {item.transNo}
        </Text>
        <Text
          style={{
            color: '#4B5050',
            fontWeight: '400',
            lineHeight: 16,
            fontSize: 11,
            marginRight: 80,
          }}
        >
          {item.value}
        </Text>
      </View>

      <Text
        style={{
          color: '#4B5050',
          fontWeight: '400',
          lineHeight: 16,
          fontSize: 11,
          marginRight: 19,
        }}
      >
        {/* <AntDesign
          name="USB"
          size={20}
          color="#4B505080"
          style={{ marginLeft: 9, marginTop: 9 }}
        /> */}
        {/* <Ionicons
          name="ios-chevron-forward-sharp"
          size={20}
          color="#4B505080"
        /> */}
        <Ionicons
          name="ios-chevron-forward-circle-outline"
          size={16}
          color="#4B505080"
        />
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: 'white',
  },
  rowContainer: {
    flexDirection: 'row',

    padding: 10,
    marginLeft: 32,
    marginRight: 32,
  },
  whiteRow: {
    backgroundColor: '#FFFFFF',
  },
  blackRow: {
    backgroundColor: '#4B50500A',
  },
  rowText: {
    color: '#000000',
    fontSize: 16,
  },
  infoContainer: {
    flexDirection: 'row',
  },
  infoText: {
    color: '#000000',
    fontSize: 16,
    marginRight: 10,
  },
});

export default ByDatePageScreen;

const dummyResponse = {
  success: true,
  data: [
    {
      purchaseBreakdown: {
        service: [
          {
            taxDetails: [
              {
                taxCode: 'UAE_IV_ZER_SVC',
                taxRegistrationNumber: 'UAQ01',
                taxAmount: 0,
                taxableAmount: 3000,
                _id: '6357e5390c5cc728d945ea75',
              },
            ],
            serviceCode: '10000',
            englishName: 'License administrative cancellation fee',
            arabicName: '',
            unitPrice: 3000,
            quantity: 1,
            transactionAmount: 3000,
            taxApplicable: true,
            totalTaxAmount: 0,
            totalAmount: 3000,
            _id: '6357e5390c5cc728d945ea74',
          },
        ],
        fee: [
          {
            taxDetails: [
              {
                taxCode: 'UAE_IV_ZER_SVC',
                taxRegistrationNumber: '',
                taxAmount: 0,
                taxableAmount: 1.05,
                _id: '6357e5390c5cc728d945ea77',
              },
            ],
            feeCode: 'PAYROW02',
            englishName: 'Payrow Fees',
            arabicName: 'رسوم payrow',
            englishDescription: '',
            arabicDescription: '',
            type: 'PERCENT_TRANSACTION',
            unitPrice: 1.05,
            quantity: 1,
            taxApplicable: true,
            feeAmount: 1.05,
            feeTaxAmount: 0,
            isDebit: false,
            _id: '6357e5390c5cc728d945ea76',
          },
          {
            taxDetails: [
              {
                taxCode: 'UAE_IV_ZER_SVC',
                taxRegistrationNumber: '',
                taxAmount: 0,
                taxableAmount: 13.6,
                _id: '6357e5390c5cc728d945ea79',
              },
            ],
            feeCode: 'OTHER01',
            englishName: 'Other Fees',
            arabicName: 'رسوم رسوم أخرى',
            englishDescription: '',
            arabicDescription: '',
            type: 'PERCENT_TRANSACTION',
            unitPrice: 13.6,
            quantity: 1,
            taxApplicable: true,
            feeAmount: 13.6,
            feeTaxAmount: 0,
            isDebit: false,
            _id: '6357e5390c5cc728d945ea78',
          },
          {
            taxDetails: [
              {
                taxCode: 'UAE_IV_STD_DOM',
                taxRegistrationNumber: '',
                taxAmount: 1.22,
                taxableAmount: 24.21,
                _id: '6357e55e0c5cc728d945ea84',
              },
            ],
            feeCode: 'BANK001',
            englishName: 'Bank Fees',
            arabicName: '',
            englishDescription: '',
            arabicDescription: '',
            type: 'PERCENT_TRANSACTION',
            unitPrice: 24.21,
            quantity: 1,
            taxApplicable: true,
            feeAmount: 24.21,
            feeTaxAmount: 1.22,
            isDebit: false,
            _id: '6357e55e0c5cc728d945ea83',
          },
        ],
      },
      _id: '6357e5390c5cc728d945ea73',
      responseCode: 0,
      orderNumber: 'DEDB68660792612320224537',
      urn: 'B0001',
      amount: 3014.65,
      paymentDate: '2022-10-25T13:31:37.773Z',
      customerName: 'khaja',
      customerEmail: 'info@payrow.ae',
      customerPhone: '97167641000',
      customerBillingCity: 'Test City',
      customerBillingState: 'Test State',
      customerBillingCountry: 'UAE',
      customerBillingPostalCode: '225 Umm Al Quwain – UAE',
      totalTaxAmount: 0,
      totalAmount: 3014.65,
      sourceReference: 'DEDB68660792612320224537',
      mainMerchantId: 'UAQ01',
      merchantBankTransferReturnUrl:
        'https://payrowdev.uaenorth.cloudapp.azure.com/gateway/payrow/reponseCheck',
      merchantSiteUrl: 'http://172.16.4.44:6500/login',
      channel: 'ECOMMERCE',
      __v: 0,
      checkoutId: '100202229802349005',
      checkoutStatus: 'CAPTURED',
      checkoutUrl:
        'https://uatpayment.magnati.com/MPAY/paymentpage.htm?PaymentID=100202229802349005',
      errorMessage: 'Successful operation.',
      purchaseDate: '2022-10-25T13:31:39.234Z',
      recrodType: 'Voided',
      auth: '400081',
      authRespcode: '0',
      cardBrand: 'VISA',
      cardNumber: '476112******0148',
      cardType: 'International Card',
      issuingCountry: 'SGP',
      respCodeDesc: 'Approved or completed successfully',
    },
    {
      purchaseBreakdown: {
        service: [
          {
            taxDetails: [
              {
                taxCode: 'UAE_IV_ZER_SVC',
                taxRegistrationNumber: 'UAQ01',
                taxAmount: 0,
                taxableAmount: 3000,
                _id: '635a1f33598e8abeb1a25faf',
              },
            ],
            serviceCode: '10000',
            englishName: 'License administrative cancellation fee',
            arabicName: '',
            unitPrice: 3000,
            quantity: 1,
            transactionAmount: 3000,
            taxApplicable: true,
            totalTaxAmount: 0,
            totalAmount: 3000,
            _id: '635a1f33598e8abeb1a25fae',
          },
        ],
        fee: [
          {
            taxDetails: [
              {
                taxCode: 'UAE_IV_ZER_SVC',
                taxRegistrationNumber: '',
                taxAmount: 0,
                taxableAmount: 1.05,
                _id: '635a1f33598e8abeb1a25fb1',
              },
            ],
            feeCode: 'PAYROW02',
            englishName: 'Payrow Fees',
            arabicName: 'رسوم payrow',
            englishDescription: '',
            arabicDescription: '',
            type: 'PERCENT_TRANSACTION',
            unitPrice: 1.05,
            quantity: 1,
            taxApplicable: true,
            feeAmount: 1.05,
            feeTaxAmount: 0,
            isDebit: false,
            _id: '635a1f33598e8abeb1a25fb0',
          },
          {
            taxDetails: [
              {
                taxCode: 'UAE_IV_ZER_SVC',
                taxRegistrationNumber: '',
                taxAmount: 0,
                taxableAmount: 13.6,
                _id: '635a1f33598e8abeb1a25fb3',
              },
            ],
            feeCode: 'OTHER01',
            englishName: 'Other Fees',
            arabicName: 'رسوم رسوم أخرى',
            englishDescription: '',
            arabicDescription: '',
            type: 'PERCENT_TRANSACTION',
            unitPrice: 13.6,
            quantity: 1,
            taxApplicable: true,
            feeAmount: 13.6,
            feeTaxAmount: 0,
            isDebit: false,
            _id: '635a1f33598e8abeb1a25fb2',
          },
          {
            taxDetails: [
              {
                taxCode: 'UAE_IV_STD_DOM',
                taxRegistrationNumber: '',
                taxAmount: 1.22,
                taxableAmount: 24.21,
                _id: '635a1f57598e8abeb1a25fbe',
              },
            ],
            feeCode: 'BANK001',
            englishName: 'Bank Fees',
            arabicName: '',
            englishDescription: '',
            arabicDescription: '',
            type: 'PERCENT_TRANSACTION',
            unitPrice: 24.21,
            quantity: 1,
            taxApplicable: true,
            feeAmount: 24.21,
            feeTaxAmount: 1.22,
            isDebit: false,
            _id: '635a1f57598e8abeb1a25fbd',
          },
        ],
      },
      _id: '635a1f33598e8abeb1a25fad',
      responseCode: 0,
      orderNumber: 'DEDB68660792612321224537',
      urn: 'B0001',
      amount: 3014.65,
      paymentDate: '2022-10-27T06:03:31.314Z',
      customerName: 'khaja',
      customerEmail: 'info@payrow.ae',
      customerPhone: '97167641000',
      customerBillingCity: 'Test City',
      customerBillingState: 'Test State',
      customerBillingCountry: 'UAE',
      customerBillingPostalCode: '225 Umm Al Quwain – UAE',
      totalTaxAmount: 0,
      totalAmount: 3014.65,
      sourceReference: 'DEDB68660792612321224537',
      mainMerchantId: 'UAQ01',
      merchantBankTransferReturnUrl:
        'https://payrowdev.uaenorth.cloudapp.azure.com/gateway/payrow/reponseCheck',
      merchantSiteUrl: 'http://172.16.4.44:6500/login',
      channel: 'ECOMMERCE',
      __v: 0,
      checkoutId: '100202230025305793',
      checkoutStatus: 'CAPTURED',
      checkoutUrl:
        'https://uatpayment.magnati.com/MPAY/paymentpage.htm?PaymentID=100202230025305793',
      errorMessage: 'Successful operation.',
      purchaseDate: '2022-10-27T06:03:32.645Z',
      recrodType: 'Purchase Order',
      auth: '759167',
      authRespcode: '0',
      cardBrand: 'VISA',
      cardNumber: '476112******0148',
      cardType: 'International Card',
      issuingCountry: 'SGP',
      respCodeDesc: 'Approved or completed successfully',
    },
    {
      purchaseBreakdown: {
        service: [
          {
            taxDetails: [
              {
                taxCode: 'UAE_IV_ZER_SVC',
                taxRegistrationNumber: 'UAQ01',
                taxAmount: 0,
                taxableAmount: 3000,
                _id: '635a58c8a87d24180a67a3bc',
              },
            ],
            serviceCode: '10000',
            englishName: 'License administrative cancellation fee',
            arabicName: '',
            unitPrice: 3000,
            quantity: 1,
            transactionAmount: 3000,
            taxApplicable: true,
            totalTaxAmount: 0,
            totalAmount: 3000,
            _id: '635a58c8a87d24180a67a3bb',
          },
        ],
        fee: [
          {
            taxDetails: [
              {
                taxCode: 'UAE_IV_ZER_SVC',
                taxRegistrationNumber: '',
                taxAmount: 0,
                taxableAmount: 1.05,
                _id: '635a58c8a87d24180a67a3be',
              },
            ],
            feeCode: 'PAYROW02',
            englishName: 'Payrow Fees',
            arabicName: 'رسوم payrow',
            englishDescription: '',
            arabicDescription: '',
            type: 'PERCENT_TRANSACTION',
            unitPrice: 1.05,
            quantity: 1,
            taxApplicable: true,
            feeAmount: 1.05,
            feeTaxAmount: 0,
            isDebit: false,
            _id: '635a58c8a87d24180a67a3bd',
          },
          {
            taxDetails: [
              {
                taxCode: 'UAE_IV_ZER_SVC',
                taxRegistrationNumber: '',
                taxAmount: 0,
                taxableAmount: 13.6,
                _id: '635a58c8a87d24180a67a3c0',
              },
            ],
            feeCode: 'OTHER01',
            englishName: 'Other Fees',
            arabicName: 'رسوم رسوم أخرى',
            englishDescription: '',
            arabicDescription: '',
            type: 'PERCENT_TRANSACTION',
            unitPrice: 13.6,
            quantity: 1,
            taxApplicable: true,
            feeAmount: 13.6,
            feeTaxAmount: 0,
            isDebit: false,
            _id: '635a58c8a87d24180a67a3bf',
          },
          {
            taxDetails: [
              {
                taxCode: 'UAE_IV_STD_DOM',
                taxRegistrationNumber: '',
                taxAmount: 1.22,
                taxableAmount: 24.21,
                _id: '635a595ca87d24180a67a3cb',
              },
            ],
            feeCode: 'BANK001',
            englishName: 'Bank Fees',
            arabicName: '',
            englishDescription: '',
            arabicDescription: '',
            type: 'PERCENT_TRANSACTION',
            unitPrice: 24.21,
            quantity: 1,
            taxApplicable: true,
            feeAmount: 24.21,
            feeTaxAmount: 1.22,
            isDebit: false,
            _id: '635a595ca87d24180a67a3ca',
          },
        ],
      },
      _id: '635a58c8a87d24180a67a3ba',
      responseCode: 0,
      orderNumber: 'DEDB68620792612321224537',
      urn: 'B0001',
      amount: 3014.65,
      paymentDate: '2022-10-27T10:09:12.597Z',
      customerName: 'khaja',
      customerEmail: 'info@payrow.ae',
      customerPhone: '97167641000',
      customerBillingCity: 'Test City',
      customerBillingState: 'Test State',
      customerBillingCountry: 'UAE',
      customerBillingPostalCode: '225 Umm Al Quwain – UAE',
      totalTaxAmount: 0,
      totalAmount: 3014.65,
      sourceReference: 'DEDB68620792612321224537',
      mainMerchantId: 'UAQ01',
      merchantBankTransferReturnUrl:
        'https://payrowdev.uaenorth.cloudapp.azure.com/gateway/payrow/reponseCheck',
      merchantSiteUrl: 'http://172.16.4.44:6500/login',
      channel: 'ECOMMERCE',
      __v: 0,
      checkoutId: '100202230067323415',
      checkoutStatus: 'CAPTURED',
      checkoutUrl:
        'https://uatpayment.magnati.com/MPAY/paymentpage.htm?PaymentID=100202230067323415',
      errorMessage: 'Successful operation.',
      purchaseDate: '2022-10-27T10:09:14.139Z',
      recrodType: 'Purchase Order',
      auth: '716758',
      authRespcode: '0',
      cardBrand: 'VISA',
      cardNumber: '476112******0148',
      cardType: 'International Card',
      issuingCountry: 'SGP',
      respCodeDesc: 'Approved or completed successfully',
    },
    {
      purchaseBreakdown: {
        service: [
          {
            taxDetails: [
              {
                taxCode: 'UAE_IV_ZER_SVC',
                taxRegistrationNumber: 'UAQ01',
                taxAmount: 0,
                taxableAmount: 3000,
                _id: '635a69ff0122709e876c2373',
              },
            ],
            serviceCode: '10000',
            englishName: 'License administrative cancellation fee',
            arabicName: '',
            unitPrice: 3000,
            quantity: 1,
            transactionAmount: 3000,
            taxApplicable: true,
            totalTaxAmount: 0,
            totalAmount: 3000,
            _id: '635a69ff0122709e876c2372',
          },
        ],
        fee: [
          {
            taxDetails: [
              {
                taxCode: 'UAE_IV_ZER_SVC',
                taxRegistrationNumber: '',
                taxAmount: 0,
                taxableAmount: 1.05,
                _id: '635a69ff0122709e876c2375',
              },
            ],
            feeCode: 'PAYROW02',
            englishName: 'Payrow Fees',
            arabicName: 'رسوم payrow',
            englishDescription: '',
            arabicDescription: '',
            type: 'PERCENT_TRANSACTION',
            unitPrice: 1.05,
            quantity: 1,
            taxApplicable: true,
            feeAmount: 1.05,
            feeTaxAmount: 0,
            isDebit: false,
            _id: '635a69ff0122709e876c2374',
          },
          {
            taxDetails: [
              {
                taxCode: 'UAE_IV_ZER_SVC',
                taxRegistrationNumber: '',
                taxAmount: 0,
                taxableAmount: 13.6,
                _id: '635a69ff0122709e876c2377',
              },
            ],
            feeCode: 'OTHER01',
            englishName: 'Other Fees',
            arabicName: 'رسوم رسوم أخرى',
            englishDescription: '',
            arabicDescription: '',
            type: 'PERCENT_TRANSACTION',
            unitPrice: 13.6,
            quantity: 1,
            taxApplicable: true,
            feeAmount: 13.6,
            feeTaxAmount: 0,
            isDebit: false,
            _id: '635a69ff0122709e876c2376',
          },
          {
            taxDetails: [
              {
                taxCode: 'UAE_IV_STD_DOM',
                taxRegistrationNumber: '',
                _id: '635a7ea73479d34d0c220bd0',
              },
            ],
            feeCode: 'BANK001',
            englishName: 'Bank Fees',
            arabicName: '',
            englishDescription: '',
            arabicDescription: '',
            type: 'PERCENT_TRANSACTION',
            quantity: 1,
            taxApplicable: true,
            isDebit: false,
            _id: '635a7ea73479d34d0c220bcf',
          },
        ],
      },
      _id: '635a69ff0122709e876c2371',
      responseCode: 0,
      orderNumber: 'DEDB68630792612321224537',
      urn: 'B0001',
      amount: 3014.65,
      paymentDate: '2022-10-27T11:22:39.136Z',
      customerName: 'khaja',
      customerEmail: 'info@payrow.ae',
      customerPhone: '97167641000',
      customerBillingCity: 'Test City',
      customerBillingState: 'Test State',
      customerBillingCountry: 'UAE',
      customerBillingPostalCode: '225 Umm Al Quwain – UAE',
      totalTaxAmount: 0,
      totalAmount: 3014.65,
      sourceReference: 'DEDB68630792612321224537',
      mainMerchantId: 'UAQ01',
      merchantBankTransferReturnUrl:
        'https://payrowdev.uaenorth.cloudapp.azure.com/gateway/payrow/reponseCheck',
      merchantSiteUrl: 'http://172.16.4.44:6500/login',
      channel: 'ECOMMERCE',
      __v: 0,
      checkoutId: '100202230631010554',
      checkoutStatus: 'CLOSED',
      checkoutUrl:
        'https://uatpayment.magnati.com/MPAY/paymentpage.htm?PaymentID=100202230631010554',
      errorMessage: 'Successful operation.',
      purchaseDate: '2022-11-02T04:07:02.116Z',
      recrodType: 'Purchase Order',
      auth: '145216',
      authRespcode: '0',
      cardBrand: 'VISA',
      cardNumber: '476112******0148',
      cardType: 'International Card',
      issuingCountry: 'SGP',
      respCodeDesc: 'Approved or completed successfully',
    },
    {
      purchaseBreakdown: {
        service: [
          {
            taxDetails: [
              {
                taxCode: 'UAE_IV_ZER_SVC',
                taxRegistrationNumber: 'PCFC202201',
                taxAmount: 0,
                taxableAmount: 450,
                _id: '635a80f85fde2c4364d4b264',
              },
            ],
            serviceCode: 'PCFC001',
            englishName: 'PCFC',
            arabicName: '',
            unitPrice: 1000,
            quantity: 1,
            transactionAmount: 450,
            taxApplicable: true,
            totalTaxAmount: 0,
            totalAmount: 450,
            _id: '635a80f85fde2c4364d4b263',
          },
        ],
        fee: [
          {
            taxDetails: [
              {
                taxCode: 'UAE_IV_STD_DOM',
                taxRegistrationNumber: '',
                _id: '635a81215fde2c4364d4b26b',
              },
            ],
            feeCode: 'BANK001',
            englishName: 'Bank Fees',
            arabicName: '',
            englishDescription: '',
            arabicDescription: '',
            type: 'PERCENT_TRANSACTION',
            quantity: 1,
            taxApplicable: true,
            isDebit: false,
            _id: '635a81215fde2c4364d4b26a',
          },
        ],
      },
      _id: '635a80f85fde2c4364d4b262',
      responseCode: 0,
      orderNumber: 'DEDB68630701612321224537',
      urn: 'B0001',
      amount: 450,
      paymentDate: '2022-10-27T13:00:40.358Z',
      customerName: 'khaja',
      customerEmail: 'info@payrow.ae',
      customerPhone: '97167641000',
      customerBillingCity: 'Test City',
      customerBillingState: 'Test State',
      customerBillingCountry: 'UAE',
      customerBillingPostalCode: '225 Umm Al Quwain – UAE',
      totalTaxAmount: 0,
      totalAmount: 450,
      sourceReference: 'DEDB68630701612321224537',
      mainMerchantId: 'PCFC202201',
      merchantBankTransferReturnUrl:
        'https://payrowdev.uaenorth.cloudapp.azure.com/gateway/payrow/reponseCheck',
      merchantSiteUrl: 'http://172.16.4.44:6500/login',
      channel: 'ECOMMERCE',
      __v: 0,
      checkoutId: '100202230062179512',
      checkoutStatus: 'CAPTURED',
      checkoutUrl:
        'https://uatpayment.magnati.com/MPAY/paymentpage.htm?PaymentID=100202230062179512',
      errorMessage: 'Successful operation.',
      purchaseDate: '2022-10-27T13:00:41.484Z',
      recrodType: 'Purchase Order',
      auth: '485609',
      authRespcode: '0',
      cardBrand: 'VISA',
      cardNumber: '476112******0148',
      cardType: 'International Card',
      issuingCountry: 'SGP',
      respCodeDesc: 'Approved or completed successfully',
    },
  ],
  reportPath:
    'https://payrowdev.uaenorth.cloudapp.azure.com/orderReport/Report96_undefined.xlsx',
};
