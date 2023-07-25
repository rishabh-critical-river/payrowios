import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
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
        <View style={{
            borderWidth: 1,
            borderColor: "#CCCCCC",
            marginLeft:32,
            marginRight:32,
            marginTop:50,
            paddingTop:24,
            paddingBottom:29,
            paddingLeft:16,
            paddingRight:16,

        }}>
          <View style={{
            display:"flex",
            alignSelf:"center",
          }}>
          <Image
            source={require("../../src/Images/payrowLogo.png")}
            
          />
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

        <View style={{ alignSelf: "center", marginTop: 28,borderBottomColor:"" }}>
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
        </View>
      </View>

      <View style={{ backgroundColor: "white" }}>
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
        </TouchableOpacity>
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
  text: {
    width: 303,
    height: 20,
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "400",
    color: "#4B5050",
    textAlign: "center",
    marginTop: 6,
    alignSelf: "center",
    marginBottom: 15,
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
