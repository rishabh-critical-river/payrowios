import React, { useState } from "react";
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
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { Avatar } from "react-native-elements";
const countries = [{ country: "TRANSACTION ID" }, { country: "BY DATE" }];

function InvoiceRecallthree({ navigation }) {
  const [selectedMeat, setSelectedMeat] = useState([]);
  const [data, setData] = useState(countries);
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
            Invoice Recall
          </Text>
        </View>
        <Image
          style={{
            width: 150,
            height: 48.3,
            alignSelf: "center",
            marginTop: 24,
          }}
          source={require("./payrowLogo.png")}
        />
        <Text
          style={{
            textAlign: "center",
            fontWeight: "400",
            fontSize: 22,
            marginTop: 28,
            color: "#4B5050",
            marginBottom: 6,
          }}
        >
          Business Name
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontWeight: "400",
            fontSize: 14,
            marginBottom: 12,

            color: "#4B5050",
          }}
        >
          Location details & PO Box
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginLeft: 32,
            marginRight: 32,
            color: "#4B5050",
            fontWeight: "400",
            fontSize: 12,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 12,
            }}
          >
            <Text>Date:</Text>
            <Text>24/08/2023</Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 12,
            }}
          >
            <Text>Time:</Text>
            <Text>24-08-23</Text>
          </View>
        </View>
        <Text
          style={{
            textAlign: "center",
            fontWeight: "400",
            fontSize: 22,
            marginTop: 28,
            color: "#4B5050",
            marginBottom: 6,
          }}
        >
          Transaction Successful
        </Text>
        <View style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginLeft: 32,
              marginRight: 32,
              color: "#4B5050",
              fontWeight: "400",
              fontSize: 12,
            }}
          >
            <Text>merchant#</Text>

            <Text>003125403</Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginLeft: 32,
              marginRight: 32,
              color: "#4B5050",
              fontWeight: "400",
              fontSize: 12,
            }}
          >
            <Text>Terminal 3</Text>

            <Text>11016524</Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginLeft: 32,
              marginRight: 32,
              color: "#4B5050",
              fontWeight: "400",
              fontSize: 12,
            }}
          >
            <Text>Sequence</Text>

            <Text>1426</Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginLeft: 32,
              marginRight: 32,
              color: "#4B5050",
              fontWeight: "400",
              fontSize: 12,
            }}
          >
            <Text>InvoiceNumber</Text>

            <Text>54321</Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginLeft: 32,
              marginRight: 32,
              color: "#4B5050",
              fontWeight: "400",
              fontSize: 12,
            }}
          >
            <Text>Branch</Text>

            <Text>1234</Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginLeft: 32,
              marginRight: 32,
              color: "#4B5050",
              fontWeight: "400",
              fontSize: 12,
            }}
          >
            <Text>Visa</Text>

            <Text></Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginLeft: 32,
              marginRight: 32,
              color: "#4B5050",
              fontWeight: "400",
              fontSize: 12,
            }}
          >
            <Text>**** **** **** 1257</Text>

            <Text></Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginLeft: 32,
              marginRight: 32,
              color: "#4B5050",
              fontWeight: "400",
              fontSize: 12,
            }}
          >
            <Text>Source (Q)</Text>

            <Text>Expiry XXXX</Text>
          </View>
        </View>
      </View>
      <Text
        style={{
          textAlign: "center",
          fontWeight: "400",
          fontSize: 22,
          marginTop: 28,
          color: "#4B5050",
          marginBottom: 6,
        }}
      >
        -- Thank You --
      </Text>
      <Text
        style={{
          textAlign: "center",
          fontWeight: "400",
          fontSize: 14,
          marginBottom: 12,

          color: "#4B5050",
        }}
      >
        Invoice is ready. Select your option to receive
      </Text>
      <View style={{ backgroundColor: "white" }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("InvoiceRecallthree");
          }}
        >
          <View
            style={{
              borderWidth: 1,

              borderColor: "#4B5050",
              backgroundColor: "#4B5050",
              borderRadius: 8,
              marginBottom: 16,
              width: 296,
              height: 48,
              padding: 12,
            }}
          >
            <View style={{ flexDirection: "row", width: "100%" }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "500",
                  lineHeight: 24,
                  justifyContent: "center",
                  color: "white",
                  letterSpacing: 0.1,
                  flex: 1,
                  width: "100%",
                }}
              >
                Share Customer Copy
              </Text>
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <AntDesign name="arrowright" size={20} color="white" />
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

export default InvoiceRecallthree;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  logo: {
    width: 150,
    height: 48.3,
    alignSelf: "center",
    marginTop: 32,
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
