import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Button,
  ActivityIndicator,
} from 'react-native';
import {
  AntDesign,
  FontAwesome5,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { dailyReportArray } from '@/constants/arrays';
import paymentDetails from '@/apis/mutations/payment/detail';
import base64 from '@/hooks/lib/base64';
import keyValidation from '@/hooks/lib/num-characters';
import useStorageData from '@/apis/hooks/use-storage-data';
import moment from 'moment';
import truncateText from '@/utils/truncateText';
import toast from '@/hooks/lib/toast';
import { PaymentDetailsResponse } from '@/typings/payment';
import * as FileSystem from 'expo-file-system';

function DailyCashReport() {
  const [loading, setLoading] = React.useState(true);
  const router = useRouter();
  const params = useLocalSearchParams();
  const safeAPI = React.useRef(false);
  const { user } = useStorageData('user');
  const { auth } = useStorageData('auth');
  const { user: userDecoded } = useStorageData('user', {
    decode: true,
  });

  const key = React.useMemo(() => {
    return base64.encode(
      JSON.stringify({
        num: Number(keyValidation(8)),
        validation: 'Key Validation',
      })
    );
  }, []);

  const init = {
    data: [],
    reportPath: '',
    success: false,
  };
  const [state, setState] = React.useState<PaymentDetailsResponse>(init);

  const DynamicTitle = React.useMemo(() => {
    if (!params.slug) return;
    const data = dailyReportArray.find((item) => item.slug === params.slug);
    return data?.name;
  }, []);

  const channel = React.useMemo(() => {
    if (!params.slug) return;
    const data = dailyReportArray.find((item) => item.slug === params.slug);
    return data?.slug;
  }, [params.slug]);

  const fetchPaymentDetails = React.useCallback(async () => {
    setLoading(true);
    try {
      if (auth?.tid && user?.token && userDecoded?.merchantId) {
        console.log('Key from line 63', key);
        const payload = {
          // key,
          // channel,
          // tid: auth?.tid,
          // merchantId: userDecoded?.merchantId,
          // dates: {
          //   from: moment().subtract(1, 'days').format('YYYY-MM-DD'),
          // },

          tid: '072857',
          key,
          channel: 'Cash',
          merchantId: 'PRMID63',
          dates: {
            from: '2023-08-30',
          },
        };
        console.log('Payload from line 68', payload);
        const { data } = await paymentDetails(payload, user?.token);
        console.log('Data from line 70', data);
        if (data) {
          setState(data as PaymentDetailsResponse);
          setLoading(false);
        }
      }
    } catch (error: any) {
      if (error?.response?.status === 400) {
        setLoading(false);
        toast.show('No data found');
        setState(init);
      }
    }
  }, [auth?.tid, user?.token, userDecoded?.merchantId, key, channel]);

  React.useEffect(() => {
    safeAPI.current = true;
    if (safeAPI.current) {
      fetchPaymentDetails();
    }
    return () => {
      safeAPI.current = false;
    };
  }, [auth?.tid, user?.token, userDecoded?.merchantId, key, channel]);

  const data = React.useMemo(() => {
    if (state?.data.length > 0) {
      return state.data.map((item) => {
        return {
          time: moment(item.paymentDate).format('hh:mm A'),
          transNo: truncateText(item.orderNumber, 5),
          value: item.totalAmount,
          status: 'SUCCESS',
        };
      });
    } else {
      return [];
    }
  }, [state?.data]);

  const onDownloadFile = React.useCallback(async () => {
    if (!state.reportPath) return toast.show('No report found');

    const downloadResumable = FileSystem.createDownloadResumable(
      state.reportPath,
      FileSystem.documentDirectory + 'PaymentReport.xlsx',
      {}
    );

    try {
      const res = await downloadResumable.downloadAsync();
      console.log('Finished downloading to ', res?.uri);
      toast.show('Report downloaded successfully');
    } catch (e) {
      console.error(e);
    }
  }, [state?.reportPath]);

  return (
    <>
      {/* <Button title="Fetch Data" onPress={fetchPaymentDetails} /> */}
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
          PayRow Stores
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
          {`MID: ${userDecoded?.merchantId} `}
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
          <Text style={{ color: '#4B5050B2' }}>
            {' '}
            {moment().format('DD/MM/YYYY ')}
          </Text>
          <TouchableOpacity
            onPress={onDownloadFile}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <View
              style={{
                width: 38,
                height: 38,
                backgroundColor: '#4B50500F',
                marginLeft: 12,
                marginRight: 8,
                borderRadius: 8,
              }}
            >
              <AntDesign
                name="download"
                size={20}
                color="black"
                style={{ marginLeft: 9, marginTop: 9 }}
              />
            </View>
            <Text style={{ color: '#4B5050B2' }}>Download Report</Text>
          </TouchableOpacity>
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
            Order No.
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
            Value
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
            Status
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
          {loading ? (
            <View
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: 400,
                gap: 16,
              }}
            >
              <ActivityIndicator size="large" color="#4B5050B2" />
            </View>
          ) : data.length === 0 ? (
            <View
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: 400,
                gap: 16,
              }}
            >
              <View
                style={{
                  width: 110,
                  height: 110,
                  borderRadius: 100,
                  borderColor: '#eee',
                  borderWidth: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <View
                  style={{
                    width: 80,
                    height: 80,
                    backgroundColor: '#80a95d21',
                    borderRadius: 100,

                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  {/* <Ionicons name="information" size={60} color="#80a95d" /> */}
                  <FontAwesome5 name="exclamation" size={40} color="#80a95d" />
                </View>
              </View>
              {/* <Image
                  source={require('@/assets/images/no-data.jpg')}
                  style={{
                    width: 100,
                    height: 100,
                  }}
                /> */}
              <Text
                style={{
                  color: '#4B5050B2',
                  fontSize: 14,
                  fontWeight: '400',
                  lineHeight: 20,
                }}
              >
                No data found
              </Text>
            </View>
          ) : (
            <FlatList
              data={data}
              renderItem={({ item, index }) => (
                <ListItem item={item} index={index} />
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          )}
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
    value: number | string;
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
          color: '#4B5050B2',
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
          color: '#4B5050B2',
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
          color: '#4B5050B2',
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
          color: '#4B5050B2',
          fontWeight: '400',
          lineHeight: 16,
          fontSize: 11,
          alignSelf: 'center',
          textAlign: 'center',
          width: 110,
        }}
      >
        SUCCESS
      </Text>
    </View>
  );
};
