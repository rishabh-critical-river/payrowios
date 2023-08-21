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

function BuyNowPayLater() {
  const router = useRouter();

  return (
    <>
      <View style={{ display: "flex", flex: 1, backgroundColor: "white" }}>
        <View
          style={{
            marginLeft: 19.98,

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
          Buy Now & Pay Later (BNPL)
        </Text>
        <Image
          source={require("@/assets/images/Bnpl.png")}
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
              lineHeight: 24,
              fontWeight: "500",
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
                height: 60,
              }}
            >
              Multiple BNPL providers with new providers being added, keeping
              your BNPL stack up to date.
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
                height: 80,
              }}
            >
              A single integration point means merchants save on the cost & time
              associated with implementing new providers.
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
              Data-enriched lending decisions protect merchants, consumers, and
              the industry.
            </Text>
          </View>
          {/* <View
          style={{ flexDirection: "column", marginBottom: 8, marginLeft: 62 }}
        >
          <Text>a. Store Manager POS</Text>
          <Text>b. Delivery POS</Text>
          <Text>c. Staff POS</Text>
        </View> */}
          {/* 
        <View style={{ flexDirection: "row" }}>
          <Text style={{ marginRight: 5 ,marginLeft:5}}>•</Text>
          <Text
            style={{
              fontSize: 14,
              lineHeight: 20,
              fontWeight: "500",
              letterSpacing: 0.1,
              color: "#333333",
              paddingRight:14,
              width:296,
              height:40
            }}
          >
    Platform can upload the invoice and record Of VAT report.
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
      </View>
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

export default BuyNowPayLater;
