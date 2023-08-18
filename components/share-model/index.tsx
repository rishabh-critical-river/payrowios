import React, { useState } from 'react';

import {
  Text,
  View,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Modal from 'react-native-modal';
import useShare from '@/hooks/use-share';
import { AntDesign } from '@expo/vector-icons';
import { SharingApps } from '@/apis/enums';
import PanelView from '@/components/view/PanelView';
import sendUrl from '@/apis/mutations/order/send-url';
import useStorageData from '@/apis/hooks/use-storage-data';

const apps = [
  {
    name: 'WhatsApp',
    image: require('@/assets/icons/whatsapp.png'),
    value: SharingApps.WHATSAPP,
  },
  {
    name: 'Gmail',
    image: require('@/assets/icons/gmail.png'),
    value: SharingApps.EMAIL,
  },
  {
    name: 'SMS',
    image: require('@/assets/icons/chat.png'),
    value: SharingApps.SMS,
  },
];

type ShareModelProps = {
  show?: boolean;
  onClose?: () => void;
};

function ShareModel({ show, onClose }: ShareModelProps) {
  const { user } = useStorageData('user');
  const { auth } = useStorageData('auth');
  const [inputs, setInputs] = React.useState({
    phone: '',
    email: '',
  });

  const onChangeInputs = React.useCallback(
    (key: keyof typeof inputs, value: string) => {
      setInputs({
        ...inputs,
        [key]: value,
      });
    },
    [inputs]
  );

  const [selectedApp, setSelectedApp] = useState<SharingApps | null>(
    SharingApps.WHATSAPP
  );
  const [isModalVisible, setModalVisible] = useState(false);
  const { opneWhatsapp } = useShare();

  const share = React.useCallback(async () => {
    switch (selectedApp) {
      case SharingApps.WHATSAPP: {
        const mobile = inputs.phone;
        const message = `Hi, I have sent you an invoice of AED 250. Please click on the link to pay. https://payrow.com/1234567890`;
        return opneWhatsapp(mobile, message);
      }
      case SharingApps.EMAIL: {
        if (user?.token) {
          const email = inputs.email;
          const subject = `Invoice`;
          const url = `Hi, I have sent you an invoice of AED 250. Please click on the link to pay. https://payrow.com/1234567890`;
          const payload = {
            email,
            subject,
            url,
          };

          const { data } = await sendUrl(payload, user?.token);
          console.log(data);
          return data;
        }
        return null;
      }

      default:
        return null;
    }
  }, [selectedApp, inputs.phone, inputs.email, user?.token]);

  return (
    <>
      <Modal
        onBackdropPress={onClose}
        isVisible={show}
        style={{
          justifyContent: 'flex-end',
          margin: 0,
        }}
      >
        <View
          style={{
            backgroundColor: 'white',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            flex: 0.41,
          }}
        >
          <View style={{ flex: 1 }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '500',
                lineHeight: 24,
                color: '#4B5050',
                marginLeft: 32,
                marginTop: 28,
              }}
            >
              Share Customer Copy
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginLeft: 30,
                marginRight: 150,
                marginTop: 16,
              }}
            >
              {apps.map((app) => (
                <TouchableOpacity
                  key={app.value}
                  onPress={() => setSelectedApp(app.value)}
                >
                  <View
                    style={{
                      // width: 52,
                      // height: 52,
                      // borderRadius: 10,
                      // backgroundColor: '#F2F2F2',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Image
                      source={app.image}
                      style={{
                        width: 52,
                        height: 52,
                        // backgroundColor: 'red',
                        // borderRadius: 10,
                      }}
                    />
                  </View>
                </TouchableOpacity>
              ))}
              {/* <Image
                  source={require('@/assets/icons/whatsapp.png')}
                  style={{
                    width: 52,
                    height: 52,
                  }}
                />
                <Image
                  source={require('@/assets/icons/gmail.png')}
                  style={{
                    width: 52,
                    height: 52,
                  }}
                />
                <Image
                  source={require('@/assets/icons/chat.png')}
                  style={{
                    width: 52,
                    height: 52,
                  }}
                /> */}
            </View>
            <PanelView show={selectedApp === SharingApps.WHATSAPP}>
              <View style={{ marginLeft: 32, marginTop: 22 }}>
                <Text
                  style={{
                    fontSize: 12,
                    lineHeight: 12,
                    fontWeight: '400',
                    color: '#333333',
                    opacity: 0.800000011920929,
                    marginBottom: 7,
                  }}
                >
                  Contact Number
                </Text>
                <View style={{ flexDirection: 'row' }}>
                  <Image
                    source={require('@/assets/icons/UAE.png')}
                    style={{
                      width: 24,
                      height: 24,
                      marginRight: 4,
                    }}
                  />
                  <Image
                    source={require('@/assets/icons/IconPlacholder.png')}
                    style={{
                      width: 20,
                      height: 20,
                      marginRight: 4,
                    }}
                  />
                  <TextInput
                    style={{
                      color: '#4B5050',
                      fontWeight: '500',
                      fontSize: 22,
                      width: 50,
                      height: 24,
                      opacity: 0.7,
                      marginRight: 4,
                    }}
                    placeholder="Amount"
                  >
                    +971
                  </TextInput>

                  <TextInput
                    style={{
                      color: '#4B5050',
                      fontWeight: '500',
                      fontSize: 22,
                      width: 150,
                      height: 24,
                      opacity: 0.7,
                      marginRight: 4,
                      // borderColor: "#99999",
                      // borderBottomWidth: 1,
                    }}
                    placeholder="Amount"
                  >
                    561503987
                  </TextInput>
                </View>
                <View
                  style={{
                    backgroundColor: '#99999',
                    width: 296,
                    height: 1,
                    opacity: 0.7,
                    alignSelf: 'center',
                  }}
                />
              </View>
            </PanelView>
            <PanelView show={selectedApp === SharingApps.EMAIL}>
              <View style={{ marginLeft: 32, marginTop: 22 }}>
                <Text
                  style={{
                    fontSize: 12,
                    lineHeight: 12,
                    fontWeight: '400',
                    color: '#333333',
                    opacity: 0.800000011920929,
                    marginBottom: 7,
                  }}
                >
                  Email
                </Text>
                <View style={{ flexDirection: 'row' }}>
                  <TextInput
                    style={{
                      color: '#4B5050',
                      fontWeight: '500',
                      fontSize: 22,
                      width: 150,
                      height: 24,
                      opacity: 0.7,
                      marginRight: 4,
                    }}
                    placeholder="Enter email"
                    keyboardType="email-address"
                    value={inputs.email}
                    onChangeText={(text) => onChangeInputs('email', text)}
                  />
                </View>
                <View
                  style={{
                    backgroundColor: '#99999',
                    width: 296,
                    height: 1,
                    opacity: 0.7,
                    alignSelf: 'center',
                  }}
                />
              </View>
            </PanelView>
            <PanelView show={selectedApp === SharingApps.SMS}>
              <View style={{ marginLeft: 32, marginTop: 22 }}>
                <Text
                  style={{
                    fontSize: 12,
                    lineHeight: 12,
                    fontWeight: '400',
                    color: '#333333',
                    opacity: 0.800000011920929,
                    marginBottom: 7,
                  }}
                >
                  SMS
                </Text>
                <View style={{ flexDirection: 'row' }}>
                  <Image
                    source={require('@/assets/icons/UAE.png')}
                    style={{
                      width: 24,
                      height: 24,
                      marginRight: 4,
                    }}
                  />
                  <Image
                    source={require('@/assets/icons/IconPlacholder.png')}
                    style={{
                      width: 20,
                      height: 20,
                      marginRight: 4,
                    }}
                  />
                  <TextInput
                    style={{
                      color: '#4B5050',
                      fontWeight: '500',
                      fontSize: 22,
                      width: 50,
                      height: 24,
                      opacity: 0.7,
                      marginRight: 4,
                    }}
                    placeholder="Amount"
                  >
                    +971
                  </TextInput>

                  <TextInput
                    style={{
                      color: '#4B5050',
                      fontWeight: '500',
                      fontSize: 22,
                      width: 150,
                      height: 24,
                      opacity: 0.7,
                      marginRight: 4,
                      // borderColor: "#99999",
                      // borderBottomWidth: 1,
                    }}
                    placeholder="Amount"
                  >
                    561503987
                  </TextInput>
                </View>
                <View
                  style={{
                    backgroundColor: '#99999',
                    width: 296,
                    height: 1,
                    opacity: 0.7,
                    alignSelf: 'center',
                  }}
                />
              </View>
            </PanelView>
            <View
              style={{
                marginTop: 8,
                marginLeft: 32,
                marginRight: 32,
                borderBottomWidth: 1,
                borderBottomColor: '#4B5050',
              }}
            />
          </View>
          <TouchableOpacity
            style={{
              marginLeft: 32,
              marginRight: 32,
              marginTop: 42,
              marginBottom: 32,
            }}
            onPress={share}
          >
            <View style={styles.buttonContent}>
              <Text style={styles.buttonText}>SHARE</Text>
              <View style={styles.arrowIcon}>
                <AntDesign name="arrowright" size={22} color="white" />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </Modal>
    </>
  );
}

export default ShareModel;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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
