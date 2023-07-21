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
function HomeScreen({ navigation }: any) {
  return (
    <>
      <View style={styles.container}>
        <Image
          source={require("../../src/Images/payrowLogo.png")}
          style={styles.logo}
        />

        <View style={styles.homeElements}>
          <ScrollView>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("TapToPay");
              }}
              style={styles.box}
            >
              <Text style={styles.homeBlocks}> TAP TO PAY </Text>
              <Image
                source={require("./keyboard_arrow_right.png")}
                style={{
                  width: 7.41,
                  height: 12,

                  marginTop: 14,

                  marginRight: 10.02,
                }}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate("paymentHistory");
              }}
              style={styles.box}
            >
              <Text style={styles.homeBlocks}> PAYMENT HISTORY </Text>
              <Image
                source={require("./keyboard_arrow_right.png")}
                style={{
                  width: 7.41,
                  height: 12,

                  marginTop: 14,

                  marginRight: 10.02,
                }}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate("contact");
              }}
              style={styles.box}
            >
              <Text style={styles.homeBlocks}> CONTACT PAYROW </Text>
              <Image
                source={require("./keyboard_arrow_right.png")}
                style={{
                  width: 7.41,
                  height: 12,

                  marginTop: 14,

                  marginRight: 10.02,
                }}
              />
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
      <View style={{ backgroundColor: "white" }}>
        <View
          style={{
            flexDirection: "row",
            marginLeft: 75,
            alignItems: "center",
            marginTop: 30,
            marginBottom: 17,
          }}
        >
          <Image
            source={require("./fab.png")}
            style={{
              width: 72.15,
              height: 42,
              marginRight: 10.85,
            }}
          />
          <Image
            source={require("./visa.png")}
            style={{
              width: 52.15,
              height: 33,
              marginRight: 20.41,
            }}
          />
          <Image
            source={require("./mastercard.png")}
            style={{
              width: 51.62,
              height: 32,
            }}
          />
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
      </View>
    </>
  );
}

export default HomeScreen;
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
    marginBottom: 35,
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
