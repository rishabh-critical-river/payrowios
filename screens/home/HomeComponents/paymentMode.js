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
import PaymentSummary from './PaymentSummary';
const countries = [
  { country: "TAP TO PAY" },
  { country: "CASH PAYMENT" },
  { country: "PAY BY LINK" },
  { country: "PAY BY QR CODE" },
  { country: "PAYMENT GATEWAY" },
];
function PaymentMode({ navigation }) {
  const [selectedMeat, setSelectedMeat] = useState([]);
  const [data, setData] = useState(countries);
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
              fontSize: 22,
              marginTop: 20,
              color: "#333333",
            }}
          >
            Select Payment Mode
          </Text>
          <Text
            style={{ textAlign: "center", marginTop: 8, color: "#4B5050B2" }}
          >
            Select the action to go ahead
          </Text>
        </View>
        <FlatList
          style={{ marginTop: 24 }}
          data={data}
          renderItem={({ item, index }) => {
            const isChecked = selectedMeat.includes(item.country);
            return (
              <TouchableOpacity
                style={{
                  width: "80%",
                  alignSelf: "center",
                  height: 50,
                  justifyContent: "center",
                  borderWidth: 1,
                  marginBottom: 15,
                  borderRadius: 8,
                  borderColor: "#4B505040",
                  flexDirection: "row",
                  alignItems: "center",
                }}
                onPress={() => {
                  const index = selectedMeat.indexOf(item.country);
                  if (index === -1) {
                    setSelectedMeat([...selectedMeat, item.country]);
                  } else {
                    const newSelectedCountries = [...selectedMeat];
                    newSelectedCountries.splice(index, 1);
                    setSelectedMeat(newSelectedCountries);
                  }
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      color: "#4B5050",
                      fontWeight: "600",
                      flex: 1,
                      marginLeft: 16,
                    }}
                  >
                    {item.country}
                  </Text>
                  <View>
                    {isChecked ? (
                      <MaterialCommunityIcons
                        name="checkbox-marked-circle"
                        size={20}
                        color="#4B5050E5"
                        style={{ marginRight: 10 }}
                      />
                    ) : (
                      <MaterialCommunityIcons
                        name="checkbox-blank-circle-outline"
                        size={20}
                        color="#8e8e8e"
                        style={{ marginRight: 10 }}
                      />
                    )}
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <View style={{ backgroundColor: "white" }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("TapCard");
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
              height: 52,
              justifyContent: "center",
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <View style={{ marginLeft: 16, paddingTop: 6 }}>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: "#8EBD6C",

                    width: 14,
                    height: 3.61,

                    backgroundColor: "#8EBD6C",
                    marginBottom: 2.58,
                  }}
                />
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: "#8EBD6C",

                    width: 14,
                    height: 3.61,

                    marginBottom: 2.58,
                    backgroundColor: "#8EBD6C",
                  }}
                />
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: "#8EBD6C",

                    width: 14,
                    height: 3.61,

                    backgroundColor: "#8EBD6C",
                  }}
                />
              </View>
              <Text
                style={{
                  fontSize: 22,
                  paddingLeft: 4,
                  fontWeight: "400",
                  lineHeight: 28,
                  justifyContent: "center",
                  color: "white",
                  letterSpacing: 0.1,
                  flex: 1,
                }}
              >
                Pay
              </Text>
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: 16,
                }}
              >
                <AntDesign name="arrowright" size={24} color="white" />
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

export default PaymentMode;
const styles = StyleSheet.create({
  button: {
    cursor: "pointer",
    borderRadius: 70,
    justifyContent: "center",
    alignItems: "center",
  },
});
