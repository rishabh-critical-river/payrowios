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

function Wps() {
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
          }}
        >
          Wage Protection Scheme
        </Text>
        <Image
          source={require("./wageps.png")}
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
            height: 160,
            gap: 8,
            marginTop: 20,
          }}
        >
          <Text
            style={{
              color: "#808080",
              fontSize: 16,
              fontWeight: "500",
              lineHeight: 24,
              width: 126,
              height: 24,
            }}
          >
            PayRow Provides{" "}
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
                height: 40,
              }}
            >
              Salary transfer service with WPS platform customized for SMB
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
                height: 40,
              }}
            >
              Easy Employee onboarding and integration with SMB system.
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
              Standard API can support any System
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
                height: 60,
              }}
            >
              PayRow Payment Gateway PCI Certified and the team export to
              integrate with any bank & scheme Processor endpoint.
            </Text>
          </View>
        </View>
      </View>
      <View style={{ backgroundColor: "white" }}>
        <Text
          style={{
            fontSize: 14,
            marginTop: 16,
            backgroundColor: "white",
            color: "#7f7f7f",
            textAlign: "center",
            height: 20,
            letterSpacing: 0.25,
            paddingRight: 36,
            paddingLeft: 36,
            marginBottom: 16,
          }}
        >
          ©2022 PayRow Company. All rights reserved
        </Text>
      </View>
    </>
  );
}

export default Wps;
