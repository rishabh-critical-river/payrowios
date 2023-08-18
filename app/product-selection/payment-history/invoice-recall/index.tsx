import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useRouter } from 'expo-router';
import { RecallMethodTypes } from '@/apis/enums';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { InvoiceRecallContext } from '@/providers/context/invoice-recall';
import PanelView from '@/components/view/PanelView';

const recallMethodTypes = [
  {
    label: 'TRANSACTION ID',
    value: RecallMethodTypes.BYTRANSACTIONID,
    route: '/product-selection/payment-history/invoice-recall/by-transaction',
  },
  {
    label: 'BY DATE',
    value: RecallMethodTypes.BYDATE,
    route: '/product-selection/payment-history/invoice-recall/by-date',
  },
];

function InvoiceRecall() {
  const [transactionId, setTransactionId] = React.useState('');
  const router = useRouter();
  const [recallMethod, setRecallMethod] =
    React.useContext(InvoiceRecallContext);

  const onRoute = React.useCallback(() => {
    if (recallMethod === RecallMethodTypes.BYTRANSACTIONID) {
      const path = recallMethodTypes.find(
        (data) => data.value === recallMethod
      );
      if (path) {
        router.push({
          pathname:
            '/product-selection/payment-history/invoice-recall/by-transaction',
          params: {
            transactionId,
          },
        });
      }
    }
    if (recallMethod === RecallMethodTypes.BYTRANSACTIONID) {
      console.log('Hello World');
    }
  }, [transactionId]);

  console.log(transactionId);
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
            Invoice Recall
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
            fontWeight: '500',
            fontSize: 16,
            marginTop: 24,
            color: '#4B5050',
          }}
        >
          Recall Invoice By
        </Text>

        <FlatList
          style={{ marginTop: 24 }}
          data={recallMethodTypes}
          renderItem={({ item, index }) => {
            const active = item.value === recallMethod;
            return (
              <TouchableOpacity
                key={index}
                style={{
                  width: 296,
                  alignSelf: 'center',
                  height: 44,
                  justifyContent: 'center',
                  borderWidth: 1,
                  marginBottom: 15,
                  borderRadius: 8,
                  borderColor: '#4B505040',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
                onPress={() => setRecallMethod(item.value)}
              >
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <Text
                    style={{
                      color: '#4B5050',
                      fontWeight: '600',
                      flex: 1,
                      marginLeft: 16,
                    }}
                  >
                    {item.label}
                  </Text>
                  <View>
                    {/* {isChecked ? ( */}
                    <MaterialCommunityIcons
                      name={
                        active
                          ? 'checkbox-marked-circle'
                          : 'checkbox-blank-circle-outline'
                      }
                      size={20}
                      color="#4B5050E5"
                      style={{ marginRight: 10 }}
                    />
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
        {/* Transaction Id Input */}
        <PanelView show={recallMethod === RecallMethodTypes.BYTRANSACTIONID}>
          <View
            style={{ alignSelf: 'center', marginTop: 28, marginBottom: 10 }}
          >
            <Text
              style={{
                marginBottom: 5,
                fontSize: 12,
                color: '#4B5050',
                fontWeight: '400',
              }}
            >
              Transaction ID
            </Text>
            <TextInput
              style={{
                color: 'black',
                fontWeight: '400',
                fontSize: 20,
                opacity: 0.7,
                marginBottom: 4,
              }}
              placeholder="Enter"
              onChangeText={(text) => setTransactionId(text)}
            ></TextInput>
            <View
              //horizontal line
              style={{
                backgroundColor: '#4B505099',

                width: 293,
                height: 1.5,
                opacity: 0.7,
                alignSelf: 'center',
                marginBottom: 26.4,
              }}
            />
          </View>
        </PanelView>
        <PanelView show={recallMethod === RecallMethodTypes.BYDATE}>
          <View
            style={{ alignSelf: 'center', marginTop: 28, marginBottom: 31 }}
          >
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                borderWidth: 1,
                borderColor: '#4B5050',
                opacity: 0.5,
                padding: 16,
                width: 296,
                gap: 54,
                alignItems: 'center',
                borderRadius: 8,
              }}
            >
              <View>
                <Text
                  style={{
                    fontWeight: '500',
                    fontSize: 11,
                    lineHeight: 16,
                    color: '#4B5050',
                    marginBottom: 2,
                  }}
                >
                  From date
                </Text>
                <Text
                  style={{
                    fontWeight: '500',
                    fontSize: 22,
                    lineHeight: 28,
                    color: '#4B5050',
                    marginBottom: 4,
                  }}
                >
                  03 Apr
                </Text>
                <Text
                  style={{
                    fontWeight: '500',
                    fontSize: 14,
                    lineHeight: 20,
                    color: '#4B5050',
                  }}
                >
                  Tuesday
                </Text>
              </View>
              <View>
                <AntDesign name="arrowright" size={20} color="#72AC47" />
              </View>
              <View>
                <Text
                  style={{
                    fontWeight: '500',
                    fontSize: 11,
                    lineHeight: 16,
                    color: '#4B5050',
                    marginBottom: 2,
                  }}
                >
                  To date
                </Text>
                <Text
                  style={{
                    fontWeight: '500',
                    fontSize: 22,
                    lineHeight: 28,
                    color: '#4B5050',
                    marginBottom: 4,
                  }}
                >
                  13 Apr
                </Text>
                <Text
                  style={{
                    fontWeight: '500',
                    fontSize: 14,
                    lineHeight: 20,
                    color: '#4B5050',
                  }}
                >
                  Friday
                </Text>
              </View>
            </View>
          </View>
        </PanelView>
      </View>
      <View style={{ backgroundColor: 'white' }}>
        <TouchableOpacity style={styles.button} onPress={onRoute}>
          <View
            style={{
              borderWidth: 1,

              borderColor: '#4B5050',
              backgroundColor: '#4B5050',
              borderRadius: 8,
              marginBottom: 16,
              width: 296,
              height: 48,
              justifyContent: 'center',
              alignSelf: 'center',
            }}
          >
            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
              <Text
                style={{
                  fontSize: 16,
                  paddingLeft: 16,
                  fontWeight: '500',
                  lineHeight: 24,
                  justifyContent: 'center',
                  color: 'white',
                  letterSpacing: 0.1,
                  flex: 1,
                  alignSelf: 'center',
                }}
              >
                SEARCH
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
          </View>
        </TouchableOpacity>
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

export default InvoiceRecall;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  logo: {
    width: 150,
    height: 48.3,
    alignSelf: 'center',
    marginTop: 32,
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
    color: 'black',
    padding: 10,
    fontSize: 20,
    height: 60,
    cursor: 'pointer',
    borderRadius: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
