import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import {
  VictoryChart,
  VictoryBar,
  VictoryAxis,
  VictoryPie,
} from 'victory-native';
import React from 'react';
import { useRouter } from 'expo-router';
import getRingChart from '@/apis/queries/chart/ring';
import useStorageData from '@/apis/hooks/use-storage-data';
import sales from '@/apis/mutations/order/sales';
import useDeviceId from '@/hooks/use-device-id';
import base64 from '@/hooks/lib/base64';
import { ActivityIndicator } from 'react-native-paper';

const loadingText = '·•·';
function PaymentHistory() {
  const router = useRouter();

  const graphicData = [
    { y: 40, x: '5%' },
    { y: 60, x: '90%' },
  ];
  const graphicData2 = [
    { y: 90, x: '5%' },
    { y: 10, x: '90%' },
  ];
  const colorScale = ['#80B459', '#4B505014'];
  const barWidth = 16; // Adjust the bar width
  const gap = 4; // Adjust the gap size

  // const xMax = Math.max(...data.map((item) => item.amount));
  // const xMin = 0;

  const { user } = useStorageData('user');
  const { auth } = useStorageData('auth');
  const { user: userDecoded } = useStorageData('user', {
    decode: true,
  });
  const state = useDeviceId();

  // State for the ring chart

  const [ringData, setRingData] = React.useState<any>(null);

  const fetchRingData = React.useCallback(async () => {
    try {
      if (!userDecoded?.merchantId || !user?.token) return;
      const { data } = await getRingChart(userDecoded?.merchantId, user?.token);
      if (data.data) {
        setRingData(data.data);
      }
    } catch (error) {
      console.log(error);
    }
  }, [userDecoded?.merchantId, user?.token]);

  React.useEffect(() => {
    fetchRingData();
  }, [userDecoded?.merchantId, user?.token]);

  //  State for the bar chart
  const [barData, setBarData] = React.useState<any>(null);

  const fetchBarData = React.useCallback(async () => {
    try {
      if (!user?.token) return;
      const decoded = base64.encode(
        JSON.stringify({
          merchantId: userDecoded?.merchantId,
          tid: auth?.tid,
          imeiNumber: state?.deviceId,
        })
      );
      const payload = {
        data: decoded,
      };
      const { data } = await sales(payload, user?.token);

      if (data?.data) {
        setBarData(data.data);
      }
    } catch (error) {
      console.log(error);
    }
  }, [auth?.tid, user?.token, state.deviceId, userDecoded?.merchantId]);

  React.useEffect(() => {
    fetchBarData();
  }, [auth?.tid, user?.token, state.deviceId, userDecoded?.merchantId]);

  const BarChartData = React.useMemo(() => {
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    if (barData) {
      return barData.map((item: any) => {
        return {
          month: months[item.month - 1],
          amount: item.total,
        };
      });
    } else {
      return Array.from({ length: 12 }).map((_, index) => {
        return {
          month: months[index],
          amount: 0,
        };
      });
    }
  }, [barData]);
  const yMax = Math.max(
    ...BarChartData.map((item: { amount: number }) => item.amount)
  );
  const yMin = 0;

  return (
    <>
      <ScrollView>
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
              Payment History
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

          <View
            style={{
              borderWidth: 1,
              borderColor: '#4B505040',
              borderRadius: 9,
              marginBottom: 16,
              marginTop: 24,
              width: 296,
              height: 72,
              alignSelf: 'center',
              flexDirection: 'row',

              alignItems: 'center',
            }}
          >
            <View style={{ marginLeft: 16 }}>
              <Text
                style={{ color: '#4B5050CC', fontSize: 12, fontWeight: '400' }}
              >
                Sequences - per month
              </Text>
              <Text
                style={{ color: '#191919', fontSize: 16, fontWeight: '500' }}
              >
                {ringData?.total?.count || loadingText}
              </Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ width: 80, height: 80, marginBottom: 40 }}>
                <VictoryPie
                  data={graphicData}
                  width={122} // Decrease the width
                  height={122} // Decrease the height
                  innerRadius={14} // Adjust the inner radius
                  colorScale={colorScale}
                  style={{
                    labels: {
                      fill: 'white',
                      fontSize: 15,
                      padding: 7,
                    },
                  }}
                />
              </View>
              <View
                style={{
                  flexDirection: 'column',
                  marginLeft: 3,
                }}
              >
                <Text
                  style={{
                    color: '#4B5050CC',
                    fontSize: 12,
                    fontWeight: '400',
                  }}
                >
                  Average
                </Text>
                <Text
                  style={{ color: '#191919', fontSize: 14, fontWeight: '500' }}
                >
                  {ringData?.total?.avgCount || loadingText}
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              borderWidth: 1,
              borderColor: '#4B505040',
              borderRadius: 9,
              marginBottom: 16,

              width: 296,
              height: 72,
              alignSelf: 'center',
              flexDirection: 'row',

              alignItems: 'center',
            }}
          >
            <View style={{ marginLeft: 16 }}>
              <Text
                style={{ color: '#4B5050CC', fontSize: 12, fontWeight: '400' }}
              >
                Total Credit - per month
              </Text>
              <Text
                style={{ color: '#191919', fontSize: 16, fontWeight: '500' }}
              >
                {ringData?.total?.totalCredit || loadingText}
              </Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ width: 80, height: 80, marginBottom: 40 }}>
                <VictoryPie
                  data={graphicData2}
                  width={122} // Decrease the width
                  height={122} // Decrease the height
                  innerRadius={14} // Adjust the inner radius
                  colorScale={colorScale}
                  style={{
                    labels: {
                      fill: 'white',
                      fontSize: 15,
                      padding: 7,
                    },
                  }}
                />
              </View>
              <View
                style={{
                  flexDirection: 'column',
                  marginLeft: 3,
                }}
              >
                <Text
                  style={{
                    color: '#4B5050CC',
                    fontSize: 12,
                    fontWeight: '400',
                  }}
                >
                  Average
                </Text>
                <Text
                  style={{ color: '#191919', fontSize: 14, fontWeight: '500' }}
                >
                  {ringData?.total?.avgValue || loadingText}
                </Text>
              </View>
            </View>
          </View>

          <TouchableOpacity
            onPress={() => {
              router.push('/product-selection/payment-history/daily-report/');
            }}
            style={styles.box}
          >
            <Text style={styles.homeBlocks}> DAILY REPORT </Text>
            <AntDesign
              name="right"
              size={15}
              style={{
                width: 20, // Set the desired width
                height: 20, // Set the desired height
                fontWeight: 'bold', // Set the desired font weight (bold)
                marginRight: 8,
              }}
              color="#4B5050E5"
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              // navigation.navigate("historyMethods");
              router.push(
                '/product-selection/payment-history/monthly-report/otp-monthly-report'
              );
            }}
            style={styles.box}
          >
            <Text style={styles.homeBlocks}> MONTHLY REPORT </Text>
            <AntDesign
              name="right"
              size={15}
              style={{
                width: 20, // Set the desired width
                height: 20, // Set the desired height
                fontWeight: 'bold', // Set the desired font weight (bold)
                marginRight: 8,
              }}
              color="#4B5050E5"
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              // navigation.navigate("invoiceRecall");
              router.push('/product-selection/payment-history/invoice-recall/');
            }}
            style={styles.box}
          >
            <Text style={styles.homeBlocks}> INVOICE RECALL </Text>
            <AntDesign
              name="right"
              size={15}
              style={{
                width: 20, // Set the desired width
                height: 20, // Set the desired height
                fontWeight: 'bold', // Set the desired font weight (bold)
                marginRight: 8,
              }}
              color="#4B5050E5"
            />
          </TouchableOpacity>
          <View>
            {barData ? (
              <VictoryChart
                animate={{
                  onLoad: { duration: 500 },
                  easing: 'linear',
                }}
                domain={{ y: [yMin, yMax] }}
              >
                <VictoryAxis
                  style={{
                    tickLabels: {
                      fontSize: 10,
                      fill: '#4B5050CC',
                      padding: 1,
                    },
                  }}
                  dependentAxis
                />
                <VictoryAxis
                  style={{
                    tickLabels: {
                      fontSize: 10,
                      fill: '#4B5050CC',
                      padding: 1,
                    },
                  }}
                />
                <VictoryBar
                  data={BarChartData}
                  x="month"
                  y="amount"
                  barWidth={barWidth}
                  style={{
                    data: {
                      fill: '#4B5050CC',
                    },
                    labels: {
                      fontSize: 10,
                    },
                  }}
                />
                <VictoryBar
                  data={BarChartData}
                  x="month"
                  y="amount"
                  barWidth={barWidth + gap}
                  style={{
                    data: {
                      fill: 'transparent',
                      stroke: 'transparent',
                      strokeWidth: 0,
                    },
                  }}
                />
              </VictoryChart>
            ) : (
              <View
                style={{
                  minHeight: 300,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <ActivityIndicator size="small" color="#4B5050E5" />
              </View>
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
              marginTop: 14,
              paddingBottom: 16,
            }}
          >
            ©2022 PayRow Company. All rights reserved
          </Text>
        </View>
      </ScrollView>
    </>
  );
}

export default PaymentHistory;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  logo: {
    width: 150,
    height: 48.3,
    alignSelf: 'center',
    marginTop: 33,
    marginBottom: 35,
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
    height: 44,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
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
  arrow: {
    display: 'flex',
    position: 'relative',
    borderWidth: 1,
    borderColor: 'white',
    width: 40,
    height: 5,
    backgroundColor: 'white',
  },
  arrowTriangle: {
    display: 'flex',
    borderWidth: 1,
    position: 'absolute',
    width: 20,
    height: 5,
    borderColor: 'white',
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderRightWidth: 1,
    transform: [{ rotate: '45deg' }],
    right: 9,
    top: 19,
  },
  arrowTriangleRight: {
    display: 'flex',
    borderWidth: 1,
    position: 'absolute',
    width: 20,
    height: 5,
    borderColor: 'white',
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderLeftWidth: 1,
    transform: [{ rotate: '-45deg' }],
    right: 9,
    top: 36,
  },
});
