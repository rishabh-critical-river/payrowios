import React from 'react';
import { useRouter } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';
import { dailyReportArray } from '@/constants/arrays';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import useStorageData from '@/apis/hooks/use-storage-data';

function DailyReport() {
  const router = useRouter();
  const { user: userDecoded } = useStorageData('user', {
    decode: true,
  });
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
          <TouchableOpacity
            // onPress={router.back}
            onPress={() => {
              router.push('/product-selection/payment-history/');
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
              color: '#4B5050',
            }}
          >
            Daily Report
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
          PayRow Stores
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
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
        <View
          style={{
            width: 113,
            height: 30,
            marginTop: 6,
            borderRadius: 4,
            alignSelf: 'center',
            backgroundColor: '#4B50500D',
          }}
        >
          <Text
            style={{ color: '#4B5050', textAlign: 'center', paddingTop: 6 }}
          >
            {`MID: ${userDecoded?.merchantId} `}
          </Text>
        </View>
        <Text
          style={{
            fontWeight: '400',
            fontSize: 14,
            lineHeight: 20,
            textAlign: 'center',
            marginTop: 30,
            color: '#4B5050',
            marginBottom: 16,
          }}
        >
          Payment Method
        </Text>

        {dailyReportArray.map((route, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => {
                router.push({
                  pathname:
                    '/product-selection/payment-history/daily-report/details',
                  params: {
                    slug: route.slug,
                  },
                });
              }}
              style={{
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
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '500',
                  flex: 1,

                  color: '#4B5050',
                  lineHeight: 20,

                  marginLeft: 16,
                }}
              >
                {route.name.toUpperCase()}
              </Text>
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
          );
        })}
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

export default DailyReport;
