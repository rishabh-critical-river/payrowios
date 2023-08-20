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
import { useRouter } from "expo-router";

function Vat() {
  const router = useRouter();

  return (
    <>
      <ScrollView>
        <View style={{ display: "flex", flex: 1, backgroundColor: "white" }}>
          <View
            style={{
              marginLeft: 19.98,
              marginTop: 17,
              flexDirection: "row",
              alignItems: "center",
              height: 80,
              width: 360,
            }}
          >
            <TouchableOpacity onPress={router.back}>
              <Image
                source={require("@/assets/icons/arrow_back.png")}
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
                color: "#4B5050",
                marginTop: 41,
              }}
            >
              About Us
            </Text>
          </View>
          <Image
            source={require("@/assets/icons/Lables.png")}
            style={{
              width: 140,
              height: 28,
              marginLeft: 31,
              marginTop: 15,
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
            Value-Added Tax (VAT)
          </Text>
          <Image
            source={require("@/assets/images/valueaddtax.png")}
            style={{
              width: 360,
              height: 296,
              marginTop: 16,
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
                lineHeight: 24,
                fontWeight: "500",
                width: 126,
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
                  height: 40,
                }}
              >
                We are aggregators providing multiple options for auditors who
                can provide an Audit report.
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
                Platform can upload the invoice and record Of VAT report.
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
                Support the Customer and provide a live record of the auditor’s
                performance
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
                  paddingRight: 14,
                  width: 296,
                  height: 40,
                }}
              >
                PayRow Payment Gateway PCI Certified and the team export to
                integrate with any bank & scheme Processor endpoint.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={{ backgroundColor: "white" }}>
        <Text
          style={{
            fontSize: 14,
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

export default Vat;