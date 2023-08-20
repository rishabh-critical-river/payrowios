import { useRouter } from 'expo-router';
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
} from 'react-native';

interface Props {
  navigation: any;
}

const TaptoPay: React.FC<Props> = ({ navigation }) => {
  const router = useRouter();
  const [secondsLeft, setSecondsLeft] = useState(28);

  // Function to decrease the seconds left by 1 every second
  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft((prevSeconds) => Math.max(prevSeconds - 1, 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Function to navigate to the EnterPin page when the countdown reaches zero
  useEffect(() => {
    if (secondsLeft === 24) {
      // navigation.navigate("EnterPin");
      // router.push("/payment/tap-to-pay/EnterPin")
    }
  }, [secondsLeft, navigation]);

  return (
    <>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('@/assets/onboarding/payrowLogo.png')}
        />

        <Text style={styles.text}>Tap Your Card To Pay</Text>
        <Image
          source={require('@/assets/images/animation2.png')}
          style={{
            width: 240,
            height: 240,
            alignSelf: 'center',
            marginTop: 24,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            marginTop: 20,
            alignItems: 'center',
          }}
        >
          <Text style={styles.secondsText}>Seconds Left</Text>
          <Text style={styles.secondsCounter}>{secondsLeft}</Text>
        </View>
      </View>
      <View style={{ backgroundColor: 'white' }}>
        <View style={{ alignSelf: 'center', marginTop: 44 }}>
          <Text style={styles.amountText}>Amount</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <TextInput
              keyboardType="number-pad"
              style={styles.amountInput}
              placeholder="Amount"
            >
              20
            </TextInput>
            <Text style={styles.currencyText}>AED</Text>
          </View>
          <View style={styles.divider} />
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('EnterPin');
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>CANCEL</Text>
          <Image
            source={require('@/assets/icons/clear.png')}
            style={styles.clearIcon}
          />
        </TouchableOpacity>
        <Text style={styles.footerText}>
          ©2022 PayRow Company. All rights reserved
        </Text>
      </View>
    </>
  );
};

export default TaptoPay;
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
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
    letterSpacing: 0.1,
    textAlign: 'center',
    color: '#4B505099',
    marginTop: 20,
  },
  secondsText: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 16,
    letterSpacing: 0.4,
    color: '#4B5050D9',
    marginRight: 6,
  },
  secondsCounter: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
    letterSpacing: 0.1,
    color: '#4B5050',
    marginRight: 6,
  },
  amountText: {
    marginBottom: 5,
    fontSize: 12,
    color: '#4B5050',
    fontWeight: '400',
  },
  amountInput: {
    color: '#4B5050',
    fontWeight: '600',
    fontSize: 20,
    marginLeft: 5,
    opacity: 0.7,
    marginBottom: 4,
  },
  currencyText: {
    color: '#4B505099',
    fontWeight: '400',
    letterSpacing: 0.25,
    fontSize: 14,
    marginLeft: 5,
    lineHeight: 20,
    opacity: 0.7,
    marginBottom: 4,
  },
  divider: {
    backgroundColor: '#4B505099',
    width: 296,
    height: 1.5,
    opacity: 0.7,
    alignSelf: 'center',
  },
  button: {
    borderWidth: 1,
    borderColor: '#4B505040',
    borderRadius: 8,
    marginTop: 30.4,
    marginBottom: 20.4,
    width: 296,
    height: 48,
    alignSelf: 'center',
    backgroundColor: '#4B5050',
  },
  buttonText: {
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    color: '#FFFFFF',
    marginLeft: 16,
    marginTop: 12,
  },
  clearIcon: {
    width: 13.97,
    height: 13.97,
    position: 'absolute',
    right: 16,
    top: 16,
  },
  footerText: {
    fontSize: 12,
    backgroundColor: 'white',
    color: '#7f7f7f',
    textAlign: 'center',
    paddingBottom: 15,
  },
});
