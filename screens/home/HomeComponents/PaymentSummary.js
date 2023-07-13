import React, { useRef, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  SafeAreaView,
  ScrollView,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import { AntDesign, MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import { Avatar } from "react-native-elements";

const products = [
  { name: "Product 1", price: "106 AED" },
  { name: "Product 2", price: "205 AED" },
  { name: "Product 3", price: "367 AED" },
  { name: "Product 4", price: "178 AED" },
  { name: "Product 5", price: "986 AED" },
  { name: "Product 6", price: "190 AED" },
  { name: "Product 7", price: "122 AED" },
  { name: "Product 8", price: "974 AED" },
  { name: "Product 9", price: "429 AED" },
  { name: "Product 10", price: "319 AED" },
];

function PaymentSummary({ navigation }) {
  return (
    <>
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <View>
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
              textAlign: "center",
              fontWeight: "400",
              fontSize: "22",
              marginTop: 20,
            }}
          >
            Payment Summary
          </Text>
          <Text
            style={{ textAlign: "center", marginTop: 8, color: "#4B5050B2" }}
          >
            Select the Payment Mode
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 20,
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              marginLeft: 40,
              fontWeight: "400",
              fontSize: 12,
              lineHeight: 16,
              color: "#020202",
            }}
          >
            Date:
          </Text>
          <Text
            style={{
              marginRight: 36,

              fontWeight: "400",
              fontSize: 12,
              lineHeight: 16,
              color: "#020202",
            }}
          >
            16-Mar-23
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 7,
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              marginLeft: 40,
              fontWeight: "400",
              fontSize: 12,
              lineHeight: 16,
              color: "#020202",
            }}
          >
            Merchant:
          </Text>
          <Text
            style={{
              marginRight: 36,

              fontWeight: "400",
              fontSize: 12,
              lineHeight: 16,
              color: "#020202",
            }}
          >
            3245000
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 7,
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              marginLeft: 40,
              fontWeight: "400",
              fontSize: 12,
              lineHeight: 16,
              color: "#020202",
            }}
          >
            Order Number :
          </Text>
          <Text
            style={{
              marginRight: 36,

              fontWeight: "400",
              fontSize: 12,
              lineHeight: 16,
              color: "#020202",
            }}
          >
            3245167
          </Text>
        </View>
        <View
          style={{
            width: 309,
            borderBottomWidth: 1,
            borderBottomColor: "#999999",
            alignSelf: "center",
            marginTop: 13,
          }}
        />
        <View
          style={{
            flexDirection: "row",
            marginTop: 8,
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              marginLeft: 40,
              fontWeight: "500",
              fontSize: 16,
              lineHeight: 24,
            }}
          >
            Product Name
          </Text>
          <Text
            style={{
              marginRight: 36,
              fontWeight: "500",
              fontSize: 16,
              lineHeight: 24,
            }}
          >
            Price
          </Text>
        </View>
        <View style={{ marginTop: 4 }}>
          {products.map((product) => (
            <View key={product.name} style={{ flexDirection: "row" }}>
              <Text
                style={{
                  marginLeft: 40,
                  flex: 1,
                  marginRight: 36,
                  fontWeight: "400",
                  color: "#4B5050",
                  fontSize: 12,
                  lineHeight: 16,
                }}
              >
                {product.name}
              </Text>
              <Text
                style={{
                  marginRight: 36,
                  fontWeight: "500",
                  color: "#4B5050",
                  fontSize: 12,
                  lineHeight: 20,
                }}
              >
                ${product.price}
              </Text>
            </View>
          ))}
        </View>
      </View>
      <View style={{ backgroundColor: "white" }}>
        <View
          style={{
            width: "80%",
            alignSelf: "center",
            height: 48,
            borderRadius: 10,
            marginBottom: 10,

            borderWidth: 1,
            borderColor: "rgba(75, 80, 80, 0.2)",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontWeight: "500",
              flex: 1,
              fontSize: 14,
              lineHeight: 20,
              marginLeft: 16,
            }}
          >
            Total Price
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 22, fontWeight: "500", lineHeight: 28 }}>
              600
            </Text>
            <Text
              style={{
                color: "#4B505099",
                marginRight: 8,
                marginLeft: 9,
                marginTop: 3,
              }}
            >
              AED
            </Text>
          </View>
        </View>
        <View
          style={{
            width: "80%",
            alignSelf: "center",
            height: 48,
            borderRadius: 10,

            borderWidth: 1,
            borderColor: "rgba(75, 80, 80, 0.2)",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontWeight: "500",
              flex: 1,
              fontSize: 16,
              lineHeight: 24,
              marginLeft: 16,
              fontWeight: "500",
            }}
          >
            CANCEL
          </Text>
          <Entypo
            style={{ marginRight: 14 }}
            name="cross"
            size={22}
            color="#4B5050"
          />
        </View>
        <TouchableOpacity
          style={{ alignSelf: "center", marginTop: 12, width: "80%" }}
          onPress={() => {
            navigation.navigate("paymentMode");
          }}
        >
          <View
            style={{
              borderWidth: 1,
              borderColor: "#4B5050",
              backgroundColor: "#4B5050",
              borderRadius: 8,
              marginBottom: 16,
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
                SELECT PAYMENT MODE
              </Text>
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: 16,
                }}
              >
                <AntDesign name="arrowright" size={22} color="white" />
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

export default PaymentSummary;
