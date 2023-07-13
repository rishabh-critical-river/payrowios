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

function PaymentGateWay() {
  return (
    <>
      <View style={{ display: "flex", flex: 1, backgroundColor: "white" }}>
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
            marginTop: 23,
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
          }}
        >
        Payment Gateway
        </Text>
        <Image
          source={require("./gateway.png")}
          style={{
            width: 360,
            height: 296,
            marginTop: 16,
          }}
        />
        <Text
          style={{
            color: "#808080",
            marginTop: 24,
            marginLeft: 28,
            fontSize: 16,
            lineHeight: 24,
            fontWeight: "500",
            marginBottom: 8,
          }}
        >
         PayRow Net Provides {" "}
        </Text>

        <View style={{ flexDirection: "row", marginBottom: 8, marginLeft: 32 }}>
          <Text style={{ marginRight: 5 }}>•</Text>
          <Text
            style={{
              fontSize: 14,
              lineHeight: 20,
              fontWeight: "500",
              letterSpacing: 0.1,
              color: "#333333",
              marginBottom: 8,
              marginRight:20,
            }}
          >
          PayRow Payment Gateway with a Service Catalog Supported by Multiple Settlements to different service codes at the same time.
          </Text>
        </View>
        <View style={{ flexDirection: "row", marginBottom: 8, marginLeft: 32 }}>
          <Text style={{ marginRight: 5 }}>•</Text>
          <Text
            style={{
              fontSize: 14,
              lineHeight: 20,
              fontWeight: "500",
              letterSpacing: 0.1,
              color: "#333333",
              marginBottom: 8,
              marginRight:20,
             
            }}
          >
         PayRow Payment Gateway PCI Certified and the team export to integrate with any bank & scheme Processor endpoint.
          </Text>
        </View>
        {/* <View style={{ flexDirection: "row", marginBottom: 4, marginLeft: 32 }}>
          <Text style={{ marginRight: 5 }}>•</Text>
          <Text
            style={{
              fontSize: 14,
              lineHeight: 20,
              fontWeight: "500",
              letterSpacing: 0.1,
              color: "#333333",
              marginBottom: 8,
            }}
          >
           Provide registration category
          </Text>
        </View> */}
        {/* <View
          style={{ flexDirection: "column", marginBottom: 8, marginLeft: 62 }}
        >
          <Text>a. Store Manager POS</Text>
          <Text>b. Delivery POS</Text>
          <Text>c. Staff POS</Text>
        </View> */}

        {/* <View style={{ flexDirection: "row", marginBottom: 8, marginLeft: 32 }}>
          <Text style={{ marginRight: 5 }}>•</Text>
          <Text
            style={{
              fontSize: 14,
              lineHeight: 20,
              fontWeight: "500",
              letterSpacing: 0.1,
              color: "#333333",
              marginBottom: 8,
            }}
          >
          Authorized authentication partner
          </Text>
        </View> */}
        {/* <View style={{ flexDirection: "row", marginBottom: 8, marginLeft: 32 }}>
          <Text style={{ marginRight: 5 }}>•</Text>
          <Text
            style={{
              fontSize: 14,
              lineHeight: 20,
              fontWeight: "500",
              letterSpacing: 0.1,
              color: "#333333",
              marginBottom: 8,
            }}
          >
           Cash Invoice
          </Text>
        </View> */}
        {/* <View style={{ flexDirection: "row", marginBottom: 8, marginLeft: 32 }}>
          <Text style={{ marginRight: 5 }}>•</Text>
          <Text
            style={{
              fontSize: 14,
              lineHeight: 20,
              fontWeight: "500",
              letterSpacing: 0.1,
              color: "#333333",
              marginBottom: 8,
            }}
          >
          Invoice recall
          </Text>
        </View> */}
        {/* <View style={{ flexDirection: "row", marginBottom: 8, marginLeft: 32 }}>
          <Text style={{ marginRight: 5 }}>•</Text>
          <Text
            style={{
              fontSize: 14,
              lineHeight: 20,
              fontWeight: "500",
              letterSpacing: 0.1,
              color: "#333333",
              marginBottom: 8,
            }}
          >
          Dashboard
          </Text>
        </View> */}
        {/* <View style={{ flexDirection: "row", marginBottom: 8, marginLeft: 32 }}>
          <Text style={{ marginRight: 5 }}>•</Text>
          <Text
            style={{
              fontSize: 14,
              lineHeight: 20,
              fontWeight: "500",
              letterSpacing: 0.1,
              color: "#333333",
              marginBottom: 8,
            }}
          >
          Support center
          </Text>
        </View> */}
      </View>
      <View style={{ backgroundColor: "white" }}>
        <Text
          style={{
            fontSize: 12,
            marginTop: 16,
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

export default PaymentGateWay;
