import React from 'react';
import { View, Keyboard, TextInput, StyleSheet } from 'react-native';

type n = number[];

type Props = {
  value: n;
  onChange?: (otp: string) => void;
};

/**
 * This is a component that renders a 4 digit OTP input
 * @param value - The value of the OTP input
 * @param onChange - The callback function that is called when the OTP changes
 * @returns
 */

const OTPInput = (props: Props) => {
  const value = React.useMemo(() => {
    if (props.value) {
      return props.value;
    }
    return [0, 0, 0, 0];
  }, [props.value]);

  const et1 = React.useRef<TextInput>(null);
  const et2 = React.useRef<TextInput>(null);
  const et3 = React.useRef<TextInput>(null);
  const et4 = React.useRef<TextInput>(null);
  const [otp, setOtp] = React.useState(value);
  const onOtpChange = React.useCallback(
    (index: number, value: string) => {
      if (isNaN(Number(value))) {
        // Do nothing when a non digit is pressed
        return;
      }
      const draft = otp.concat();
      draft[index] = Number(value);
      setOtp(draft);
      if (index > 3) {
        if (props.onChange) {
          props.onChange(draft.join(''));
        }
        Keyboard.dismiss();
      }
    },
    [otp]
  );

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 52,
        marginRight: 52,
        marginTop: 24,
      }}
    >
      {/* {[et1, et2, et3, et4].map((ref, index) => (
        <TextInput
          key={index}
          secureTextEntry={true}
          ref={ref}
          style={styles.box}
          keyboardType="number-pad"
          maxLength={1}
          onChangeText={(text) => {
            if (text.length >= 1) {
              if (index < 3) {
                [et1, et2, et3, et4][index + 1].current?.focus();
              }
            }
            if (text.length < 1) {
              if (index > 0) {
                [et1, et2, et3, et4][index - 1].current?.focus();
              }
            }
            if (index === 3) {
              Keyboard.dismiss();
            }
          }}
          onChange={({ nativeEvent }) => onOtpChange(index, nativeEvent.text)}
        />
      ))} */}
      <TextInput
        secureTextEntry={true}
        ref={et1}
        style={styles.box}
        keyboardType="number-pad"
        maxLength={1}
        onChangeText={(text) => {
          if (text.length >= 1) {
            et2.current?.focus();
          }
        }}
        onChange={({ nativeEvent }) => onOtpChange(0, nativeEvent.text)}
      />
      <TextInput
        secureTextEntry={true}
        ref={et2}
        style={styles.box}
        keyboardType="number-pad"
        maxLength={1}
        onChangeText={(text) => {
          if (text.length >= 1) {
            et3.current?.focus();
          } else if (text.length < 1) {
            et1.current?.focus();
          }
        }}
        onChange={({ nativeEvent }) => onOtpChange(1, nativeEvent.text)}
      />
      <TextInput
        secureTextEntry={true}
        ref={et3}
        style={styles.box}
        keyboardType="number-pad"
        maxLength={1}
        onChangeText={(text) => {
          if (text.length >= 1) {
            et4.current?.focus();
          } else if (text.length < 1) {
            et2.current?.focus();
          }
        }}
        onChange={({ nativeEvent }) => onOtpChange(2, nativeEvent.text)}
      />
      <TextInput
        secureTextEntry={true}
        ref={et4}
        style={styles.box}
        keyboardType="number-pad"
        maxLength={1}
        onChangeText={(text) => {
          if (text.length < 1) {
            et3.current?.focus();
          } else {
            Keyboard.dismiss();
          }
        }}
        onChange={({ nativeEvent }) => onOtpChange(3, nativeEvent.text)}
      />
    </View>
  );
};

export default OTPInput;

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    marginLeft: 52,
    marginRight: 52,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  box: {
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'center',
    borderWidth: 1,
    borderRadius: 8,
    width: 52,
    height: 56,
    borderColor: '#4B505066',
  },
});
