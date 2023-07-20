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
} from "react-native";
function Confirmation({ navigation }: any) {
  return (
    <>
      <View style={styles.container}>
        <Image
          source={require("./fab.png")}
          style={{
            width: 137.41,
            height: 80,
            alignSelf: "center",
            marginTop: 16,
          }}
        />
        <Text
          style={{
            fontSize: 22,
            fontWeight: "400",
            lineHeight: 28,
            textAlign: "center",
            marginTop: 10,
          }}
        >
          Confirmation
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: "400",
            lineHeight: 20,
            letterSpacing: 0.25,
            textAlign: "center",
            color: "#4B505099",
            marginTop: 6,
          }}
        >
          You have made the payment successfully
        </Text>
        <Image
          source={require("./confirmed.png")}
          style={{
            width: 206,
            height: 206,
            alignSelf: "center",
            marginTop: 34,
          }}
        />

        <Text
          style={{
            fontSize: 16,
            fontWeight: "500",
            lineHeight: 20,
            letterSpacing: 0.1,
            textAlign: "center",
            color: "#4B5050E5",
            marginTop: 26,
          }}
        >
          Payment Done!
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("HomeScreen");
          }}
        >
          <View
            style={{
              borderWidth: 1,

              borderColor: "#4B5050",
              backgroundColor: "#4B5050",
              borderRadius: 8,

              width: 328,
              height: 48,
              justifyContent: "center",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                flex: 1,
                fontSize: 16,
                paddingLeft: 16,
                fontWeight: "500",
                lineHeight: 24,
                justifyContent: "center",
                color: "white",
                letterSpacing: 0.1,
              }}
            >
              PAYMENT DETAILS
            </Text>
            <Image
              source={require("./next.png")}
              style={{
                width: 24,
                height: 24,
                alignSelf: "center",
                marginTop: 12,
                marginRight: 5,
                marginBottom: 12,
              }}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginLeft: 165,
            marginTop: 24,
            padding: 10,

            height: 60,
            width: 60,

            borderRadius: 70,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => {
            navigation.navigate("HomeScreen");
          }}
        >
          <View
            style={{
              borderWidth: 1,

              borderColor: "#4B505040",
              backgroundColor: "white",
              borderRadius: 8,
              marginBottom: 16,
              width: 328,
              height: 48,
              justifyContent: "center",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                flex: 1,
                fontSize: 16,
                paddingLeft: 16,
                fontWeight: "500",
                lineHeight: 24,
                justifyContent: "center",
                color: "#4B5050",
                letterSpacing: 0.1,
              }}
            >
              HOME
            </Text>
            <Image
              source={require("./next1.png")}
              style={{
                width: 24,
                height: 24,
                alignSelf: "center",
                marginTop: 12,
                marginRight: 5,
                marginBottom: 12,
              }}
            />
          </View>
        </TouchableOpacity>
      </View>
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
    </>
  );
}

export default Confirmation;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  logo: {
    width: 150,
    height: 48.3,
    alignSelf: "center",
    marginTop: 33,
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
    marginTop: 32,
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
