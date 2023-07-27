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
} from "react-native";
function TapCard({ navigation }: any) {
  return (
    <>
      <View style={styles.container}>
       
        <Image
          style={{
            width: 150,
            height: 48.3,
            alignSelf: "center",
            marginTop: 33,
          }}
          source={require("./payrowLogo.png")}
        />

        <Text
          style={{
            fontSize: 16,
            fontWeight: "500",
            lineHeight: 24,
            letterSpacing: 0.1,
            textAlign: "center",
            color: "#4B505099",
          }}
        >
          Tap Your Card To Pay
        </Text>
        <Image
          source={require("./Animation.png")}
          style={{
            width: 240,
            height: 240,
            alignSelf: "center",
            marginTop: 24,
          }}
        />
        <View
          style={{
            flexDirection: "row",

            alignSelf: "center",
            marginTop: 20,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 12,
              fontWeight: "400",
              lineHeight: 16,
              letterSpacing: 0.4,
              color: "#4B5050D9",
              marginRight: 6,
            }}
          >
            {" "}
            Seconds Left
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "500",
              lineHeight: 24,
              letterSpacing: 0.1,
              color: "#4B5050",
              marginRight: 6,
            }}
          >
            28
          </Text>
        </View>
      </View>
      <View style={{ backgroundColor: "white" }}>
        <View style={{ alignSelf: "center", marginTop: 44 }}>
          <Text
            style={{
              marginBottom: 5,
              fontSize: 12,
              color: "#4B5050",
              fontWeight: "400",
            }}
          >
            Amount
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <TextInput
              keyboardType="number-pad"
              style={{
                color: "#4B5050",
                fontWeight: "600",
                fontSize: 20,
                marginLeft: 5,

                opacity: 0.7,
                marginBottom: 4,
              }}
              placeholder="  Amount"
            >
              20
            </TextInput>
            <Text
              style={{
                color: "#4B505099",
                fontWeight: "400",
                letterSpacing: 0.25,
                fontSize: 14,
                marginLeft: 5,
                lineHeight: 20,
                opacity: 0.7,
                marginBottom: 4,
              }}
            >
              AED
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "#4B505099",

              width: 296,
              height: 1.5,
              opacity: 0.7,
              alignSelf: "center",
            }}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("EnterPin");
          }}
          style={{
            borderWidth: 1,
            borderColor: "#4B505040",
            borderRadius: 8,
            marginTop: 30.4,
            marginBottom: 20.4,
            width: 296,
            height: 48,
            alignSelf: "center",
            backgroundColor: "#4B5050",
          }}
        >
          <Text
            style={{
              fontWeight: "500",
              fontSize: 16,
              lineHeight: 24,
              color: "#FFFFFF",
              marginLeft: 16,
              marginTop: 12,
            }}
          >
            CANCEL
          </Text>
          <Image
            source={require("./clear.png")}
            style={{
              width: 13.97,
              height: 13.97,
              position: "absolute",
              right: 16,
              top: 16,
            }}
          />
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

export default TapCard;
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
    color: "#838c95",
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

    backgroundColor: "#72ac47",
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
