import React from 'react';
import { router } from 'expo-router';
import OTPInput from '@/components/otp-input';
import { AntDesign } from '@expo/vector-icons';
import useLoginOTP from '@/apis/hooks/use-login-otp';
import SnackbarModel from '@/components/snack-bar/snack-bar';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import useOTPInterval from '@/hooks/use-otp-interval';
import { useDispatch } from 'react-redux';
import useModal from '@/hooks/use-modal';

function CreateAccount() {
  const { setSnackbarModal } = useModal();
  const { onSendAuthCode, onVerifyAuthCode, onChangeState } = useLoginOTP();
  const { timer, setTimer, formattedTimer } = useOTPInterval();
  const [showAlert, setShowAlert] = React.useState(false);
  const [showAuthAlert, setShowAuthAlert] = React.useState(false);

  const onPressOTP = React.useCallback(() => {
    setTimer(52);
    onSendAuthCode();
    setSnackbarModal({ content: 'OTP sent', width: 180 });
    setShowAlert(true);
  }, [router, onSendAuthCode, setTimer]);

  // React.useEffect(() => {
  //   if (timer === 0) {
  //     router.push('/auth/login');
  //   }
  // }, [timer]);

  const handleSubmit = React.useCallback(() => {
    onVerifyAuthCode()
      .then((route) => {
        if (route !== undefined && route.success) {
          setSnackbarModal({
            content: 'Authentication code verified Successfully',
            width: 300,
          });
          router.push({
            pathname: '/auth/create-pin',
            params: route.params,
          });
        }
      })
      .catch((err) => {
        setSnackbarModal({ content: err.message, width: 180 });
        setShowAuthAlert(true);
      });
  }, [onVerifyAuthCode]);

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <>
        <View style={styles.container}>
          <View
            style={{
              position: 'absolute',
              right: 0,
              top: 76,
            }}
          >
            <Image
              source={require('@/assets/onboarding/Watermark.png')}
              style={{
                width: 36,
                height: 50,
              }}
            />
          </View>

          <Image
            source={require('@/assets/logos/payrow-logo.png')}
            style={styles.logo}
          />

          <Text
            style={{
              marginTop: 30.47,
              fontSize: 18,
              fontWeight: '400',
              lineHeight: 28,
              color: '#333333',
              alignSelf: 'center',
            }}
          >
            Enter OTP
          </Text>
          <OTPInput onChangeOTP={(otp) => onChangeState('code', otp)} />

          <TouchableOpacity
            style={styles.goToSummaryButton}
            // onPress={() => {
            //   router.push('/products/add-item');
            // }}
            onPress={
              handleSubmit

              // navigation.navigate('CreatePin');
              // router.push("/auth/create-pin");
            }
          >
            <View style={styles.buttonContent}>
              <Text
                style={styles.buttonText}

                // onPress={() => onVerifyAuthCode()}
              >
                SUBMIT
              </Text>
              <View style={styles.arrowIcon}>
                <AntDesign name="arrowright" size={22} color="white" />
              </View>
            </View>
          </TouchableOpacity>

          {timer > 0 ? (
            <View style={styles.resendCode}>
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
                    {formattedTimer}
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
                      <AntDesign name="right" size={16} color="#4C4C4C" />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          ) : (
            <TouchableOpacity style={styles.resendCode} onPress={onPressOTP}>
              <View
                style={{
                  height: 48,
                  borderRadius: 8,
                  borderWidth: 0.5,
                  justifyContent: 'center',
                  borderColor: '#B2B2B2',
                  backgroundColor: '#FFFFFF',
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
                    Send code
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
                      <AntDesign name="right" size={16} color="#4C4C4C" />
                    </View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          )}
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
              source={require('@/assets/onboarding/Watermark.png')}
              style={{
                width: 36,
                height: 50,
              }}
            />
          </View>

          <Image
            source={require('@/assets/onboarding/getStarted.png')}
            style={{
              width: 312,
              height: 230,
              alignSelf: 'center',
              marginTop: 36,
              marginBottom: 16,
            }}
          />

          <Text
            style={{
              fontSize: 12,
              backgroundColor: 'white',
              color: '#4B5050',
              textAlign: 'center',
              paddingBottom: 16,
            }}
          >
            ©2022 PayRow Company. All rights reserved
          </Text>
        </View>
      </>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
  },
  logo: {
    width: 150,
    height: 48.53,
    alignSelf: 'center',
    marginTop: 33,
  },
  rightPin: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  leftPin: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D3D3D3',
    borderTopEndRadius: 10,
    borderBottomEndRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  horizontal: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  horizontalOr: {
    paddingLeft: 5,
    paddingRight: 5,
    marginTop: 18,
    marginBottom: 18,
  },
  horizontalLine: {
    borderBottomColor: '#D3D3D3',
    width: 105,
    borderBottomWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    alignSelf: 'center',
  },
  url: {
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  fingerprint: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: 70,
    marginBottom: 10,
  },
  verticalLine: {
    borderBottomColor: '#D3D3D3',
    color: 'black',
    width: 15,
    transform: [{ rotate: '90deg' }],
    borderBottomWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    alignSelf: 'center',
  },

  languageText: {
    fontSize: 16,
    justifyContent: 'center',
    color: '##838c95',
    alignItems: 'center',
  },
  languages: {
    flexDirection: 'column',

    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: 15,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 15,
  },
  box: {
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#4B505066',
    borderRadius: 8,

    width: 52,
    height: 56,
  },
  button: {
    marginLeft: 165,
    marginTop: 34,
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
  button2: {
    marginLeft: 165,
    marginTop: 5,

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
  goToSummaryButton: {
    alignSelf: 'center',
    marginTop: 32,
    width: '80%',
  },
  resendCode: {
    alignSelf: 'center',
    marginTop: 16,
    width: '80%',
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
});

export default CreateAccount;
