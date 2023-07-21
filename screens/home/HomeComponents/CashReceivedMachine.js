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

function CashReceivedMachine() {
  return (
    <>
      <View style={{ display: "flex", flex: 1, backgroundColor: "white" }}>
        <View
          style={{
            marginLeft: 18,

            flexDirection: "row",
            alignItems: "center",
            height: 80,
            width: 360,
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
              color: "#4B5050",
            }}
          >
            About Us
          </Text>
        </View>
        <Image
          source={require("./Lables.png")}
          style={{
            width: 140,
            height: 28,
            marginLeft: 31,

            borderRadius: 12,
          }}
        />
        <Text
          style={{
            fontSize: 20,
            fontWeight: "500",
            lineHeight: 32,
            letterSpacing: 0.5,
            color: "#4B5050",
            marginLeft: 32,
            marginTop: 14,
            marginBottom: 16,
          }}
        >
          Cash Received Machine
        </Text>
        <Image
          source={require("./cashmachine.png")}
          style={{
            width: 360,
            height: 296,
            marginTop: 16,
            alignSelf: "center",
          }}
        />
        <View
          style={{
            flexDirection: "column",
            marginLeft: 32,
            marginRight: 32,
            width: 296,
            height: 228,
            gap: 5,
            marginTop: 20,
          }}
        >
          <Text
            style={{
              color: "#808080",
              fontSize: 16,
              lineHeight: 24,
              fontWeight: "500",
              width: 156,
              height: 24,
            }}
          >
            PayRow Net Provides{" "}
          </Text>

          <View style={{ flexDirection: "row" }}>
            <Text style={{ marginRight: 5, marginLeft: 5 }}>•</Text>
            <Text
              style={{
                fontSize: 14,
                lineHeight: 20,
                fontWeight: "500",
                letterSpacing: 0.1,
                color: "#333333",
                width: 296,
                height: 20,
              }}
            >
              Digital eKYC
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ marginRight: 5, marginLeft: 5 }}>•</Text>
            <Text
              style={{
                fontSize: 14,
                lineHeight: 20,
                fontWeight: "500",
                letterSpacing: 0.1,
                color: "#333333",
                width: 296,
                height: 20,
              }}
            >
              Support 8 language
            </Text>
          </View>

          <View style={{ flexDirection: "row" }}>
            <Text style={{ marginRight: 5, marginLeft: 5 }}>•</Text>
            <Text
              style={{
                fontSize: 14,
                lineHeight: 20,
                fontWeight: "500",
                letterSpacing: 0.1,
                color: "#333333",
                width: 296,
                height: 20,
              }}
            >
              Provide registration category
            </Text>
          </View>
          <View
            style={{
              flexDirection: "column",
              width: 145,
              height: 60,
              marginLeft: 32,
            }}
          >
            <Text>a. Store Manager POS</Text>
            <Text>b. Delivery POS</Text>
            <Text>c. Staff POS</Text>
          </View>

          <View style={{ flexDirection: "row" }}>
            <Text style={{ marginRight: 5, marginLeft: 5 }}>•</Text>
            <Text
              style={{
                fontSize: 14,
                lineHeight: 20,
                fontWeight: "500",
                letterSpacing: 0.1,
                color: "#333333",
                width: 296,
                height: 20,
              }}
            >
              Authorized authentication partner
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ marginRight: 5, marginLeft: 5 }}>•</Text>
            <Text
              style={{
                fontSize: 14,
                lineHeight: 20,
                fontWeight: "500",
                letterSpacing: 0.1,
                color: "#333333",
                width: 296,
                height: 20,
              }}
            >
              Cash Invoice
            </Text>
          </View>
        </View>
        <View style={{ backgroundColor: "white", marginLeft: 32 }}>
          <Text
            style={{
              fontSize: 14,
              marginBottom: 16,
              backgroundColor: "white",
              color: "#7f7f7f",
              textAlign: "center",
              width: 288,
              height: 20,
            }}
          >
            ©2022 PayRow Company. All rights reserved
          </Text>
        </View>
      </View>
    </>
  );
}

export default CashReceivedMachine;
