import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { dailyReportArray } from '@/constants/arrays';
import paymentDetails from '@/apis/mutations/payment/detail';
import base64 from '@/hooks/lib/base64';
import keyValidation from '@/hooks/lib/num-characters';
import useStorageData from '@/apis/hooks/use-storage-data';

const data = [
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

function DailyCashReport() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const safeAPI = React.useRef(false);
  const { user } = useStorageData('user');
  const { auth } = useStorageData('auth');
  const { user: userDecoded } = useStorageData('user', {
    decode: true,
  });

  const [state, setState] = React.useState<any>(null);

  const DynamicTitle = React.useMemo(() => {
    if (!params.slug) return;
    const data = dailyReportArray.find((item) => item.slug === params.slug);
    return data?.name;
  }, []);

  const fetchPaymentDetails = React.useCallback(async () => {
    console.log('Fetch Payment Details');
    try {
      if (auth?.tid && user?.token && userDecoded?.merchantId) {
        const key = base64.encode(
          JSON.stringify({
            num: keyValidation(10),
            validation: 'Key Validation',
          })
        );
        const payload = {
          key,
          tid: auth?.tid,
          channel: 'Cash',
          merchantId: userDecoded?.merchantId,
          dates: {
            from: '2023-08-25',
            to: '2023-08-29',
          },
        };
        const { data } = await paymentDetails(payload, user?.token);
        console.log('Data from line 69', data);
      }
    } catch (error) {
      console.log(error);
    }
    // Set State when data is available
    // setState(data);
  }, [auth?.tid, user?.token, userDecoded?.merchantId]);

  React.useEffect(() => {
    safeAPI.current = true;
    if (safeAPI.current) {
      fetchPaymentDetails();
    }
    return () => {
      safeAPI.current = false;
    };
  }, [auth?.tid, user?.token, userDecoded?.merchantId]);
  return (
    <>
      {/* <Button
        onPress={() => {
          fetchPaymentDetails();
        }}
      >
        Hello
      </Button> */}

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
            {DynamicTitle}
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
              borderRadius: 8,
            }}
          >
            <MaterialCommunityIcons
              name="calendar-today"
              size={20}
              color="black"
              style={{ marginLeft: 9, marginTop: 9 }}
            />
          </View>
          <Text>06/07/2023</Text>
        </View>

        {/* <View
          style={{
            borderBottomColor: "#4B505026",
            borderBottomWidth: 1,
            marginTop: 25,
            marginLeft: 32,
            marginRight: 32,
          }}
        /> */}
        <View
          style={{
            borderBottomColor: '#4B505026',
            borderBottomWidth: 1,
            borderTopColor: '#4B505026',
            borderTopWidth: 1,
            // marginTop: 25,
            marginLeft: 32,
            marginRight: 32,
            flexDirection: 'row',

            marginTop: 9,
            paddingTop: 9,
            paddingBottom: 9,
          }}
        >
          <Text
            style={{
              fontSize: 12,
              fontWeight: '500',
              lineHeight: 16,
              color: '#4C4C4C',
              alignSelf: 'center',
              textAlign: 'center',
              width: 63,
            }}
          >
            Time
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '500',
              lineHeight: 16,
              color: '#4C4C4C',
              alignSelf: 'center',
              textAlign: 'center',
              width: 90,
            }}
          >
            value
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '500',
              lineHeight: 16,
              color: '#4C4C4C',
              alignSelf: 'center',
              textAlign: 'center',
              width: 67,
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
              alignSelf: 'center',
              textAlign: 'center',

              width: 110,
            }}
          >
            download
          </Text>
        </View>
        {/* <View
          style={{
            borderBottomColor: "#4B505026",
            borderBottomWidth: 1,
            marginTop: 9,
            marginLeft: 32,
            marginRight: 32,
          }}
        /> */}
        <View>
          <FlatList
            data={data}
            renderItem={({ item, index }) => (
              <ListItem item={item} index={index} />
            )}
            keyExtractor={(item, index) => index.toString()}
          />
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
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: 'white',
  },
  rowContainer: {
    flexDirection: 'row',
    // justifyContent: "space-between",
    textAlign: 'center',

    paddingTop: 10,
    paddingBottom: 10,
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

export default DailyCashReport;

type ListItemProps = {
  item: {
    time: string;
    transNo: string;
    value: string;
    status: string;
  };
  index: number;
};

const ListItem = ({ item, index }: ListItemProps) => {
  const rowStyle = index % 2 === 0 ? styles.whiteRow : styles.blackRow;

  return (
    <View style={[styles.rowContainer, rowStyle]}>
      <Text
        style={{
          color: '#4B5050',
          fontWeight: '400',
          lineHeight: 16,
          fontSize: 11,
          alignSelf: 'center',
          textAlign: 'center',
          width: 63,
        }}
      >
        {item.time}
      </Text>
      <Text
        style={{
          color: '#4B5050',
          fontWeight: '400',
          lineHeight: 16,
          fontSize: 11,
          alignSelf: 'center',
          textAlign: 'center',
          width: 90,
        }}
      >
        {item.transNo}
      </Text>
      <Text
        style={{
          color: '#4B5050',
          fontWeight: '400',
          lineHeight: 16,
          fontSize: 11,
          alignSelf: 'center',
          textAlign: 'center',
          width: 67,
        }}
      >
        {item.value}
      </Text>

      <Text
        style={{
          color: '#4B5050',
          fontWeight: '400',
          lineHeight: 16,
          fontSize: 11,
          alignSelf: 'center',
          textAlign: 'center',
          width: 110,
        }}
      >
        <AntDesign
          name="download"
          size={20}
          color="black"
          style={{ marginLeft: 9, marginTop: 9 }}
        />
      </Text>
    </View>
  );
};
