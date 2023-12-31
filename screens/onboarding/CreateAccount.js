import { AntDesign } from "@expo/vector-icons";
import React, { useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Button,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from "react-native";

function CreateAccount({ navigation }) {
  const et1 = useRef();
  const et2 = useRef();
  const et3 = useRef();
  const et4 = useRef();
  return (
    <>
      <View style={styles.container}>
        <Image
          source={require("../../src/Images/payrowLogo.png")}
          style={styles.logo}
        />
        <Text
          style={{
            marginTop: 40.47,
            fontSize: 22,
            fontWeight: "400",
            lineHeight: 28,
            alignSelf: "center",
          }}
        >
          Enter Authentication Code
        </Text>
        <View
          style={{
            width: 303,
            height: 20,
            marginTop: 6,

            alignSelf: "center",
          }}
        >
          <Text
            style={{
              color: "#4B5050B2",
              fontSize: 14,
              fontWeight: "400",
              lineHeight: 20,
              letterSpacing: 0.25,
              alignSelf: "center",
            }}
          >
            SMS code sent to verify phone number
          </Text>
        </View>
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

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("AddItem");
          }}
        >
          <View
            style={{
              borderWidth: 1,
              borderColor: "#4B5050",
              backgroundColor: "#4B5050",
              borderRadius: 8,
              marginBottom: 16,
              width: 328,
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
                  color: "white",
                  letterSpacing: 0.1,
                  flex: 1,
                }}
              >
                SUBMIT
              </Text>
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: 16,
                }}
              >
                <AntDesign name="arrowright" size={24} color="white" />
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button2}
          onPress={() => {
            navigation.navigate("HomeScreen");
          }}
        >
          <View
            style={{
              borderWidth: 0.5,
              borderColor: "#B2B2B2",
              borderRadius: 8,
              backgroundColor: "#FFFFFF",

              marginBottom: 16,
              width: 328,
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
                00:45
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
                  <Text style={{ marginRight: 6 }}>Resend Code</Text>
                  <AntDesign name="arrowright" size={24} color="#4C4C4C" />
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <Image
          source={require("../../src/Images/getStarted.png")}
          style={{
            width: 312,
            height: 230,
            alignSelf: "center",
            marginTop: 40,
          }}
        />
      </View>
      <Text
        style={{
          fontSize: 12,
          backgroundColor: "white",
          color: "#4B5050CC",
          textAlign: "center",
          paddingBottom: 15,
        }}
      >
        ©2022 PayRow Company. All rights reserved
      </Text>
    </>
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
    marginTop: 24,
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
});

export default CreateAccount;
