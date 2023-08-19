import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import useStorageData from '@/apis/hooks/use-storage-data';
import useInputs from '@/hooks/use-inputs';
import createComplaints from '@/apis/mutations/contact/complaints';
import { ScrollView } from 'react-native-gesture-handler';

const complains = [
  {
    name: 'Payment not working',
  },
  {
    name: 'App is too slow',
  },
  {
    name: 'Neee help',
  },
  {
    name: 'App is crashing',
  },
];

function NewComplain() {
  const [selectedComplain, setSelectedComplain] = React.useState(
    complains[0].name
  );

  const router = useRouter();
  const { user } = useStorageData('user');

  const [state, setState] = useInputs({
    name: '',
    email: '',
    message: '',
    mobileNumber: '',
  });

  const onSubmit = React.useCallback(async () => {
    if (user?.token) {
      try {
        const payload = {};
        const { data, status } = await createComplaints(payload, user?.token);
        console.log('Response from Coplaint ', data);
      } catch (error) {
        console.log(error);
      }
    }
  }, [state, user?.token]);

  return (
    <ScrollView>
      <View style={{ display: 'flex', flex: 1, backgroundColor: 'white' }}>
        <View
          style={{
            marginLeft: 18,
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
            New Complain
          </Text>
        </View>

        <Image
          source={require('@/assets/onboarding/payrowLogo.png')}
          style={{
            width: 150,
            height: 48.529,
            marginLeft: 105,
            marginTop: 32,
            flexShrink: 0,
          }}
        />
        <Text
          style={{
            marginLeft: 108,
            marginRight: 108,
            textAlign: 'center',
            fontSize: 14,
            fontWeight: '400',
            lineHeight: 20,
            letterSpacing: 0.25,
            marginTop: 24.47,
            color: '#4C4C4C',
          }}
        >
          Select Complaint Type
        </Text>
        <View style={{ flexDirection: 'column', alignItems: 'center' }}>
          {complains.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => setSelectedComplain(item.name)}
              >
                <View
                  style={{
                    flexDirection: 'row',
                    width: 296,
                    height: 48,
                    marginTop: 16,
                    marginLeft: 32,
                    marginRight: 32,
                    paddingTop: 15,
                    paddingLeft: 16,
                    paddingRight: 145,
                    paddingBottom: 13,
                    borderWidth: 1,
                    borderStyle: 'solid',
                    borderColor: 'rgba(75, 80, 80, 0.20)',
                    borderRadius: 8,
                    gap: 90,
                    marginBottom: 16,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 14,
                      lineHeight: 20,
                      fontWeight: '500',
                      letterSpacing: 0.1,
                      color: 'rgba(75, 80, 80, 0.80)',
                      width: 155,
                      height: 20,
                    }}
                  >
                    {item.name}
                  </Text>
                  {item.name === selectedComplain && (
                    <View>
                      <MaterialCommunityIcons
                        name="checkbox-marked-circle"
                        size={20}
                        color="#4B5050E5"
                        style={{ width: 24, height: 24 }}
                      />
                    </View>
                  )}
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
        <View style={{ flexDirection: 'column', alignItems: 'center' }}>
          <Text
            style={{
              marginLeft: 128,
              marginRight: 128,
              textAlign: 'center',
              fontSize: 14,
              fontWeight: '400',
              lineHeight: 20,
              letterSpacing: 0.25,
              marginTop: 32,
              width: 'auto',
              height: 20,
              color: '#4C4C4C',
            }}
          >
            Write Complaint
          </Text>
          <Text
            style={{
              marginLeft: 32,
              marginRight: 32,
              fontSize: 12,
              fontWeight: '400',
              lineHeight: 12,
              letterSpacing: 0.25,
              marginTop: 30,
              width: 296,
              height: 13,
              color: 'rgba(75, 80, 80, 0.70)',
            }}
          >
            Brief your complaint
          </Text>
          <Text
            style={{
              marginLeft: 32,
              marginRight: 32,
              fontSize: 16,
              fontWeight: '400',
              lineHeight: 18,
              width: 296,
              height: 54,
              color: 'rgba(75, 80, 80, 0.70)',
              marginBottom: 8,
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry.
          </Text>
          <Image
            source={require('@/assets/icons/sixline.png')}
            style={{
              marginLeft: 32,
              marginRight: 32,
              width: 296,
              height: 1.6,
              marginBottom: 31,
              opacity: 0.42,
            }}
          />
          <TouchableOpacity
            onPress={() => {
              //   navigation.navigate("registercomplain");
              router.push(
                '/product-selection/contact/support/register-complain'
              );
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: '#4B5050',
                width: 296,
                height: 48,
                gap: 181,
                marginRight: 32,
                marginLeft: 32,
                borderRadius: 8,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  paddingLeft: 16,
                  fontWeight: '500',
                  lineHeight: 24,
                  justifyContent: 'center',
                  color: 'white',
                  letterSpacing: 0.1,
                }}
              >
                SUBMIT
              </Text>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginRight: 16,
                }}
              >
                <AntDesign name="arrowright" size={20} color="white" />
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View
          style={{
            backgroundColor: 'white',
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          <Text
            style={{
              fontSize: 14,
              backgroundColor: 'white',
              color: '#7f7f7f',
              width: 288,
              height: 20,
              fontWeight: '400',
              marginTop: 27,
              opacity: 0.800000011920929,
            }}
          >
            ©2022 PayRow Company. All rights reserved
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

export default NewComplain;
