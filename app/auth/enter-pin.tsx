import useCreatePin from "@/apis/hooks/use-create-pin";
import PayRowLogo from "@/components/logo";
import OTPInput from "@/components/otp-input";
import toast from "@/hooks/lib/toast";
import getErrorString from "@/utils/getErrorString";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useCallback } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

function EnterPins() {
  const router = useRouter();
  const { onChangeState, onLoginByPin, state } = useCreatePin();
  const handleSubmit = useCallback(() => {
    if (state.pin.length !== 4) {
      toast.show("Please enter 4 digit pin to proceed");
      return;
    }
    onLoginByPin().catch((err) => {
      toast.show(getErrorString(err));
    });
  }, [state.pin]);

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <View
          style={{
            position: "absolute",
            right: 0,
            top: 76,
          }}
        >
          <Image
            source={require("@/assets/onboarding/Watermark.png")}
            style={{
              width: 36,
              height: 50,
            }}
          />
        </View>
        <PayRowLogo />
        <Text
          style={{
            marginTop: 30.47,
            fontSize: 22,
            fontWeight: "400",
            lineHeight: 28,
            alignSelf: "center",
          }}
        >
          Enter Pin
        </Text>
        {/* <View
          style={{
            width: "100%",
            height: 20,
            marginTop: 6,

            alignSelf: "center",
          }}
        >
          <Text style={{ alignSelf: "center", color: "#666666" }}>
            SMS code sent to verify phone number
          </Text>
        </View> */}
        <OTPInput
          onChangeOTP={(pin) => onChangeState("pin", pin)}
          secureTextEntry
        />

        <TouchableOpacity
          style={styles.goToSummaryButton}
          onPress={handleSubmit}
        >
          <View style={styles.buttonContent}>
            <Text style={styles.buttonText}>SUBMIT</Text>
            <View style={styles.arrowIcon}>
              <AntDesign name="arrowright" size={22} color="white" />
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.resendCode}
          onPress={() => router.replace("/auth/forget-pin")}
        >
          <View
            style={{
              borderWidth: 0.5,
              borderColor: "#B2B2B2",
              borderRadius: 8,
              backgroundColor: "#FFFFFF",

              height: 48,
              justifyContent: "center",
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  fontSize: 16,
                  paddingLeft: 16,
                  fontWeight: "500",
                  lineHeight: 24,
                  justifyContent: "center",
                  color: "#4C4C4C",
                  letterSpacing: 0.1,
                  flex: 1,
                }}
              >
                Forgot Pin?
              </Text>
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: 16,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <AntDesign name="right" size={16} color="#4C4C4C" />
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>

      <View
        style={{
          backgroundColor: "white",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <View
          style={{
            position: "absolute",
            left: 0,
            bottom: 20,
            zIndex: 999,
          }}
        >
          <Image
            source={require("@/assets/onboarding/Watermark.png")}
            style={{
              width: 36,
              height: 50,
            }}
          />
        </View>

        <Image
          source={require("@/assets/onboarding/getStarted.png")}
          style={{
            width: 312,
            height: 230,
            alignSelf: "center",
            marginTop: 36,
            marginBottom: 16,
          }}
        />

        <Text
          style={{
            fontSize: 12,
            backgroundColor: "white",
            color: "#4B5050",
            textAlign: "center",
            paddingBottom: 16,
          }}
        >
          ©2022 PayRow Company. All rights reserved
        </Text>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
  },
  logo: {
    width: 150,
    height: 48.53,
    alignSelf: "center",
    marginTop: 33,
  },
  rightPin: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  leftPin: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D3D3D3",
    borderTopEndRadius: 10,
    borderBottomEndRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  horizontal: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  horizontalOr: {
    paddingLeft: 5,
    paddingRight: 5,
    marginTop: 18,
    marginBottom: 18,
  },
  horizontalLine: {
    borderBottomColor: "#D3D3D3",
    width: 105,
    borderBottomWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    alignSelf: "center",
  },
  url: {
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  fingerprint: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginTop: 70,
    marginBottom: 10,
  },
  verticalLine: {
    borderBottomColor: "#D3D3D3",
    color: "black",
    width: 15,
    transform: [{ rotate: "90deg" }],
    borderBottomWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    alignSelf: "center",
  },

  languageText: {
    fontSize: 16,
    justifyContent: "center",
    color: "##838c95",
    alignItems: "center",
  },
  languages: {
    flexDirection: "column",

    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontSize: 15,
    textAlign: "center",
    marginTop: 20,
    marginBottom: 15,
  },
  box: {
    display: "flex",
    flexDirection: "row",
    textAlign: "center",
    borderWidth: 1,
    borderColor: "#4B505066",
    borderRadius: 8,

    width: 52,
    height: 56,
  },
  button: {
    marginLeft: 165,
    marginTop: 34,
    color: "black",
    padding: 10,
    fontSize: 20,
    height: 60,
    width: 60,
    cursor: "pointer",
    borderRadius: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  button2: {
    marginLeft: 165,
    marginTop: 5,

    padding: 10,
    fontSize: 20,
    height: 60,
    width: 60,
    cursor: "pointer",
    borderRadius: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  arrow: {
    display: "flex",
    position: "relative",
    borderWidth: 1,
    borderColor: "white",
    width: 40,
    height: 5,
    backgroundColor: "white",
  },
  arrowTriangle: {
    display: "flex",
    borderWidth: 1,
    position: "absolute",
    width: 20,
    height: 5,
    borderColor: "white",
    backgroundColor: "white",
    borderTopWidth: 1,
    borderRightWidth: 1,
    transform: [{ rotate: "45deg" }],
    right: 9,
    top: 19,
  },
  arrowTriangleRight: {
    display: "flex",
    borderWidth: 1,
    position: "absolute",
    width: 20,
    height: 5,
    borderColor: "white",
    backgroundColor: "white",
    borderTopWidth: 1,
    borderLeftWidth: 1,
    transform: [{ rotate: "-45deg" }],
    right: 9,
    top: 36,
  },
  goToSummaryButton: {
    alignSelf: "center",
    marginTop: 32,
    width: "80%",
  },
  resendCode: {
    alignSelf: "center",
    marginTop: 16,
    width: "80%",
  },
  buttonText: {
    fontSize: 16,
    paddingLeft: 16,
    paddingTop: 12,
    fontWeight: "500",
    lineHeight: 24,
    justifyContent: "center",
    color: "white",
    letterSpacing: 0.1,
    flex: 1,
  },
  arrowIcon: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },

  buttonContent: {
    borderWidth: 0.6,
    borderColor: "#4B5050",
    backgroundColor: "#4B5050",
    borderRadius: 8,

    height: 48,
    width: "100%",
    justifyContent: "center",
    flexDirection: "row",
  },
});

export default EnterPins;
