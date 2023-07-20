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

function InvoiceRecalltwo({ navigation }) {
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
            fontWeight: "500",
            fontSize: 16,
            marginTop: 24,
            color: "#4B5050",
          }}
        >
          Recall Invoice By
        </Text>

        <FlatList
          style={{ marginTop: 24 }}
          data={data}
          renderItem={({ item, index }) => {
            const isChecked = selectedMeat.includes(item.country);
            return (
              <TouchableOpacity
                style={{
                  width: 296,
                  alignSelf: "center",
                  height: 44,
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
        <View style={{ alignSelf: "center", marginTop: 28, marginBottom: 31 }}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              borderWidth: 1,

              borderColor: "#4B5050",
              opacity: 0.5,
              padding: 16,
              width: 296,
              gap: 54,
              alignItems: "center",

              textAlign: "center",
              borderRadius: 8,
            }}
          >
            <View>
              <Text
                style={{
                  fontWeight: "500",
                  fontSize: 11,
                  lineHeight: 16,
                  color: "#4B5050",
                  marginBottom: 2,
                }}
              >
                From date
              </Text>
              <Text
                style={{
                  fontWeight: "500",
                  fontSize: 22,
                  lineHeight: 28,
                  color: "#4B5050",
                  marginBottom: 4,
                }}
              >
                03 Apr
              </Text>
              <Text
                style={{
                  fontWeight: "500",
                  fontSize: 14,
                  lineHeight: 20,
                  color: "#4B5050",
                }}
              >
                Tuesday
              </Text>
            </View>
            <View>
              <AntDesign name="arrowright" size={20} color="#72AC47" />
            </View>
            <View>
              <Text
                style={{
                  fontWeight: "500",
                  fontSize: 11,
                  lineHeight: 16,
                  color: "#4B5050",
                  marginBottom: 2,
                }}
              >
                To date
              </Text>
              <Text
                style={{
                  fontWeight: "500",
                  fontSize: 22,
                  lineHeight: 28,
                  color: "#4B5050",
                  marginBottom: 4,
                }}
              >
                13 Apr
              </Text>
              <Text
                style={{
                  fontWeight: "500",
                  fontSize: 14,
                  lineHeight: 20,
                  color: "#4B5050",
                }}
              >
                Friday
              </Text>
            </View>
          </View>
        </View>
      </View>
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
                SEARCH
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

export default InvoiceRecalltwo;
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
