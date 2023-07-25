import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Button,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

function Login({ navigation }: any) {
  return (
    <>
      <View style={styles.container}>
        {/* <LinearGradient
          colors={["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 1)"]}
        > */}
        <LinearGradient colors={["#231123, #558C8C"]} style={styles.gradient}>
         
     
        <View
          style={{ backgroundColor: "#231123", width: "100%", height: 268 }}
        >
          <View style={{ marginTop: 51, alignSelf: "center" }}>
            <Text
            style={{
              fontSize: 57,
              lineHeight: 12,
              fontWeight: "700",
              color: "#fff",
            }}
            >gfd</Text>
            <Text>sf</Text>
          </View>
        </View>
        </LinearGradient>
        {/* </LinearGradient> */}

        <View
          style={{
            position: "relative",
            backgroundColor: "#fff",
            top: -80,
            zIndex: 999,
            borderWidth: 1,
            borderColor: "#CCCCCC",
            marginLeft: 32,
            marginRight: 32,

            paddingTop: 24,
            paddingBottom: 29,
            paddingLeft: 16,
            paddingRight: 16,
            borderRadius: 8,
            marginBottom: 11,
          }}
        >
          <View
            style={{
              display: "flex",
              alignSelf: "center",
            }}
          >
            <Image source={require("../../src/Images/payrowLogo.png")} />
          </View>
          <View style={{ alignSelf: "center", marginTop: 24 }}>
            <Text
              style={{
                fontSize: 12,
                lineHeight: 12,
                fontWeight: "400",
                color: "#4B5050",
                width: 296,
                height: 13,
              }}
            >
              Name
            </Text>

            <TextInput
              style={{
                color: "#333333",
                fontWeight: "400",
                fontSize: 16,
                opacity: 0.7,
                borderColor: "#99999",
                borderBottomWidth: 1,
              }}
              placeholder="  Amount"
            >
              Binesh Walla
            </TextInput>
          </View>

          <View
            style={{
              alignSelf: "center",
              marginTop: 28,
              borderBottomColor: "#333333",
              borderBottomWidth: 1,
            }}
          >
            <Text
              style={{
                fontSize: 12,
                lineHeight: 12,
                fontWeight: "400",
                color: "#4B5050",
                width: 296,
                height: 16,
              }}
            >
              Contact Number
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Image
                source={require("./UAE.png")}
                style={{
                  width: 18,
                  height: 18,
                  marginRight: 4,
                }}
              />
              <Image
                source={require("./IconPlacholder.png")}
                style={{
                  width: 20,
                  height: 20,
                  marginRight: 4,
                }}
              />
              <TextInput
                style={{
                  color: "black",
                  fontWeight: "400",
                  fontSize: 16,
                  width: 37,
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
                  color: "#333333",
                  fontWeight: "400",
                  fontSize: 16,
                  width: 81,
                  height: 24,
                  opacity: 0.7,
                  marginBottom: 4,
                  // borderColor: "#99999",
                  // borderBottomWidth: 1,
                }}
                placeholder="  Amount"
              >
                561503987
              </TextInput>
            </View>
            <View
              //horizontal line
              style={{
                backgroundColor: "#99999",

                width: 296,
                height: 1,
                opacity: 1,
                alignSelf: "center",
              }}
            />
          </View>
          <View style={{ marginTop: 35 }}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                navigation.navigate("Create Account");
              }}
            >
              <View
                style={{
                  borderWidth: 1,

                  borderColor: "#4B5050",
                  backgroundColor: "#4B5050",
                  borderRadius: 8,

                  // width: 328,
                  width: "100%",
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
                    SIGN IN
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
          </View>
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: "#CCCCCC",
            marginLeft: 32,
            marginRight: 32,
            marginTop: -80,
            paddingTop: 19,
            paddingBottom: 19,
            paddingLeft: 16,
            paddingRight: 16,
            borderRadius: 8,
            marginBottom: 11,
          }}
        >
          <View style={{ marginBottom: 16 }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("");
              }}
              style={{
                borderWidth: 1,
                borderColor: "#4B505040",
                borderRadius: 9,

                width: "100%",
                height: 44,
                alignSelf: "center",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "500",
                  flex: 1,

                  color: "#4B5050",
                  lineHeight: 20,

                  marginLeft: 16,
                }}
              >
                Forgot TID?
              </Text>
              <AntDesign
                name="right"
                size={15}
                style={{
                  width: 20, // Set the desired width
                  height: 20, // Set the desired height
                  fontWeight: "bold", // Set the desired font weight (bold)
                  marginRight: 8,
                }}
                color="#4B5050E5"
              />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("");
              }}
              style={{
                borderWidth: 1,
                borderColor: "#4B505040",
                borderRadius: 9,

                width: "100%",
                height: 44,
                alignSelf: "center",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "500",
                  flex: 1,

                  color: "#4B5050",
                  lineHeight: 20,

                  marginLeft: 16,
                }}
              >
                Contact us
              </Text>
              <AntDesign
                name="right"
                size={15}
                style={{
                  width: 20, // Set the desired width
                  height: 20, // Set the desired height
                  fontWeight: "bold", // Set the desired font weight (bold)
                  marginRight: 8,
                }}
                color="#4B5050E5"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={{ backgroundColor: "white" }}>
        {/* <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("Create Account");
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
                Get Started
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
        </TouchableOpacity> */}
        <Text
          style={{
            fontSize: 12,
            backgroundColor: "white",
            color: "#7f7f7f",
            textAlign: "center",
            paddingBottom: 15,
          }}
        >
          ©2022 PayRow Company. All rights reserved
        </Text>
      </View>
    </>
  );
}

export default Login;
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "white",
  },
  gradient: {
    width: "100%",
    height: 268,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  logo: {
    width: 150,
    height: 48.3,
    alignSelf: "center",
    marginTop: 33,
  },
  selectLanguage: {
    width: 163,
    height: 28,
    fontSize: 17,

    color: "#333333",
    fontWeight: "400",
    marginTop: 24.47,
    alignSelf: "center",
  },
  languageText: {
    fontSize: 14,
    paddingLeft: 16,
    fontWeight: "500",
    lineHeight: 20,
    justifyContent: "center",
    color: "#4B5050CC",
  },
  languages: {
    flexDirection: "column",

    justifyContent: "space-between",
    alignItems: "center",
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  box: {
    display: "flex",
    borderWidth: 1,
    borderColor: "#4B505033",
    backgroundColor: "#ffffff",
    borderRadius: 8,
    marginBottom: 15,
    width: 328,
    height: 48,
    justifyContent: "center",
  },
  button: {
    alignSelf: "center",
    color: "#4B5050",

    padding: 10,
    fontSize: 20,
    height: 48,
    width: 328,
    cursor: "pointer",
    borderRadius: 70,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
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
