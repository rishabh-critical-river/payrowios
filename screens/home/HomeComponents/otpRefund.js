import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  Button,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
function OtpRefund() {
  return (
    <>
      <View style={styles.container}>
        <View
          style={{
            marginLeft: 19.98,
            marginTop: 17,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image
            source={require("./arrow_back.png")}
            style={{
              width: 16.03,
              height: 16.03,
              marginRight: 35.98,
            }}
          />
          <Text
            style={{
              fontSize: 20,
              fontWeight: "500",
              lineHeight: 32,
              letterSpacing: 0.5,
            }}
          >
            Refund
          </Text>
        </View>
        <Image
          source={require("../../../src/Images/payrowLogo.png")}
          style={styles.logo}
        />
        <Text
          style={{
            fontSize: 16,
            fontWeight: "500",
            lineHeight: 24,
            textAlign: "center",
            marginTop: 24,
            color: "#4B5050",
            width: 296,
            alignSelf: "center",
          }}
        >
          We have sent you an access code via SMS for mobile number verification
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginLeft: 52,
            marginRight: 52,
            marginTop: 30,
          }}
        >
          <TextInput
            secureTextEntry={true}
            ref={et1}
            style={styles.box}
            keyboardType="number-pad"
            maxLength={1}
            onChangeText={(text) => {
              if (text.length >= 1) {
                et2.current.focus();
              }
            }}
          />
          <TextInput
            secureTextEntry={true}
            ref={et2}
            style={styles.box}
            keyboardType="number-pad"
            maxLength={1}
            onChangeText={(text) => {
              if (text.length >= 1) {
                et3.current.focus();
              } else if (text.length < 1) {
                et1.current.focus();
              }
            }}
          />
          <TextInput
            secureTextEntry={true}
            ref={et3}
            style={styles.box}
            keyboardType="number-pad"
            maxLength={1}
            onChangeText={(text) => {
              if (text.length >= 1) {
                et4.current.focus();
              } else if (text.length < 1) {
                et2.current.focus();
              }
            }}
          />
          <TextInput
            secureTextEntry={true}
            ref={et4}
            style={styles.box}
            keyboardType="number-pad"
            maxLength={1}
            onChangeText={(text) => {
              if (text.length < 1) {
                et3.current.focus();
              } else {
                Keyboard.dismiss();
              }
            }}
          />
        </View>
      </View>
    </>
  );
}

export default OtpRefund;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  logo: {
    width: 150,
    height: 48.3,
    alignSelf: "center",
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
    fontWeight: "500",
    flex: 1,
    marginTop: 14,

    color: "#4B5050",
    lineHeight: 20,

    marginLeft: 16,
  },
  homeElements: {
    marginTop: 24,

    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    maxHeight: 448,
  },
  text: {
    fontSize: 15,
    fontWeight: "500",

    textAlign: "center",
    marginTop: 20,
    marginBottom: 15,
  },
  box: {
    borderWidth: 1,
    borderColor: "#4B505040",
    borderRadius: 9,
    marginBottom: 16,
    width: 296,
    height: 48,
    textAlign: "center",
    flexDirection: "row",
  },
  button: {
    marginLeft: 165,

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
});
