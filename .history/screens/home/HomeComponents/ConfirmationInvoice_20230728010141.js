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
import { AntDesign } from "@expo/vector-icons";
function ConfirmationInvoice({ navigation }) {
  return (
    <>
      <View style={styles.container}>
      <View
          style={{
            paddingLeft: 19.98,
            paddingTop: 17,
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#fff",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("paymentMode");
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
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "500",
              lineHeight: 32,
              letterSpacing: 0.5,
              color: "#333333",
            }}
          >
            Inv
          </Text>
        </View>
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
            fontSize: 22,
            fontWeight: "400",
            lineHeight: 28,
            textAlign: "center",
            marginTop: 15,
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
          Confirmation copy has been shared
        </Text>
        <Image
          source={require("./confirmed.png")}
          style={{
            width: 206,
            height: 206,
            alignSelf: "center",
            marginTop: 124,
          }}
        />
      </View>
      <View style={{ backgroundColor: "white" }}>
        <TouchableOpacity
          style={styles.goToSummaryButton}
          onPress={() => {
            navigation.navigate("HomeScreen");
          }}
        >
          <View style={styles.buttonContent}>
            <Text style={styles.buttonText}>HOME</Text>
            <View style={styles.arrowIcon}>
              <AntDesign name="arrowright" size={22} color="white" />
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

export default ConfirmationInvoice;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
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
  goToSummaryButton: {
    alignSelf: "center",
    marginTop: 32,
    width: "80%",
    marginBottom: 32,
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
  arrowIcon: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
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
  resendCode: {
    alignSelf: "center",
    marginTop: 16,
    width: "80%",
  },
});
