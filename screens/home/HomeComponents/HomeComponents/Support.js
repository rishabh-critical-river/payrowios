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

function Support({ navigation }) {
  return (
    <>
      <View style={{ display: "flex", flex: 1, backgroundColor: "white" }}>
        <View
          style={{
            marginLeft: 18,
            marginTop: 17,
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
              marginTop: 41,
            }}
          />
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
            Support
          </Text>
        </View>

        <Image
          source={require("./support.png")}
          style={{
            width: 150,
            height: 48.529,
            marginLeft: 105,
            marginTop: 32,
            flexShrink: 0,
          }}
        />

        <View
          style={{
            flexDirection: "row",
            width: 296,
            height: 88,
            marginTop: 24.47,
            marginLeft: 32,
            marginRight: 32,
            gap: 12,
            paddingTop: 12,
            paddingLeft: 14,
            paddingRight: 37,
            paddingBottom: 12,
          }}
        >
          <Image
            source={require("./suppimg.png")}
            style={{
              width: 42,
              height: 42,
              marginRight: 6,
              flexShrink: 0,
              marginLeft: 14,
              borderRadius: 42,
            }}
          />
          <View>
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
              Account Manager
            </Text>

            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  fontSize: 12,
                  marginRight: 6,
                  color: "#4B5050",
                }}
              >
                phone:
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  lineHeight: 16,
                  fontWeight: "500",
                  letterSpacing: 0.5,
                  color: "#333333",
                }}
              >
                +971561563669
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  marginRight: 5,
                  color: "#4B5050",
                  fontSize: 12,
                  lineHeight: 16,
                  letterSpacing: 0.4,
                  fontWeight: 400,
                }}
              >
                Email:
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  lineHeight: 16,
                  fontWeight: 500,
                  letterSpacing: 0.5,
                  color: "#333333",
                  width: 296,
                  height: 20,
                }}
              >
                bineshwalia88@gmail.com
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            width: 296,
            height: 88,
            marginTop: 24.47,
            marginLeft: 32,
            marginRight: 32,
            marginBottom: 16,
            gap: 12,
            paddingTop: 12,
            paddingLeft: 14,
            paddingRight: 37,
            paddingBottom: 12,
          }}
        >
          <Image
            source={require("./suppimg.png")}
            style={{
              width: 42,
              height: 42,
              marginRight: 6,
              flexShrink: 0,
              marginLeft: 14,
              borderRadius: 42,
            }}
          />
          <View>
            <Text
              style={{
                fontSize: 14,
                lineHeight: 20,
                fontWeight: 500,
                letterSpacing: 0.1,
                color: "#333333",
                width: 296,
                height: 20,
              }}
            >
              Account Manager
            </Text>

            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  fontSize: 12,
                  marginRight: 6,
                  color: "#4B5050",
                }}
              >
                phone:
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  lineHeight: 16,
                  fontWeight: "500",
                  letterSpacing: 0.5,
                  color: "#333333",
                }}
              >
                +971561563669
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  marginRight: 5,
                  color: "#4B5050",
                  fontSize: 12,
                  lineHeight: 16,
                  letterSpacing: 0.4,
                  fontWeight: 400,
                }}
              >
                Email:
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  lineHeight: 16,
                  fontWeight: 500,
                  letterSpacing: 0.5,
                  color: "#333333",
                  width: 296,
                  height: 20,
                }}
              >
                bineshwalia88@gmail.com
              </Text>
            </View>
          </View>
        </View>

        <Image
          source={require("./sixline.png")}
          style={{
            width: 296,
            height: 1,
            marginLeft: 32,
            marginRight: 32,
            marginBottom: 32,
            marginTop: 32,
            opacity: 0.3,
          }}
        />

        <Text
          style={{
            fontSize: 16,
            lineHeight: 20,
            fontWeight: 500,
            letterSpacing: 0.1,
            color: "#333333",
            width: 114,
            height: 24,
            lineHeight: 24,
            marginRight: 123,
            marginLeft: 123,
            marginTop: 32,
            marginBottom: 16,
          }}
        >
          Can I Help You?
        </Text>

        <View
          style={{
            flexDirection: "col",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              marginRight: 32,
              marginLeft: 32,
              paddingTop: 15,
              paddingLeft: 18,
              paddingBottom: 9,
              paddingRight: 16,
              gap: 108,
              borderWidth: 1,
              borderStyle: "solid",
              borderColor: "rgba(75, 80, 80, 0.25)",
              width: 296,
              height: 48,
              borderRadius: 8,
              marginBottom: 16,
            }}
          >
            <Text
              style={{
                lineHeight: 20,
                fontSize: 14,
                fontWeight: 500,
                width: 144,
                height: 20,
                color: "#4B5050",
              }}
            >
              Number of Complaints
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "500",
                color: "#333333",
                width: 10,
                height: 24,
                fontWeight: 500,
                marginRight: 18,
                textAlign: "right",
              }}
            >
              8
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("registercomplain");
            }}
          >
            <View
              style={{
                flexDirection: "row",
                marginRight: 32,
                marginLeft: 32,
                paddingTop: 15,
                paddingLeft: 18,
                paddingBottom: 9,
                paddingRight: 16,
                gap: 108,
                borderWidth: 1,
                borderStyle: "solid",
                borderColor: "rgba(75, 80, 80, 0.25)",
                width: 296,
                height: 48,
                borderRadius: 8,
                marginBottom: 16,
              }}
            >
              <Text
                style={{
                  lineHeight: 20,
                  fontSize: 14,
                  fontWeight: 500,
                  width: 144,
                  height: 20,
                  color: "#4B5050",
                }}
              >
                Registered Complaints
              </Text>
              <Image
                source={require("./arrowright.png")}
                style={{
                  width: 24,
                  height: 24,
                }}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("newcomplain");
            }}
          >
            <View
              style={{
                flexDirection: "row",
                marginRight: 32,
                marginLeft: 32,
                paddingTop: 15,
                paddingLeft: 18,
                paddingBottom: 9,
                paddingRight: 16,
                gap: 108,
                borderWidth: 1,
                borderStyle: "solid",
                borderColor: "rgba(75, 80, 80, 0.25)",
                width: 296,
                height: 48,
                borderRadius: 8,
                marginBottom: 16,
              }}
            >
              <Text
                style={{
                  lineHeight: 20,
                  fontSize: 14,
                  fontWeight: 500,
                  width: 144,
                  height: 20,
                  color: "#4B5050",
                }}
              >
                New Complaints
              </Text>
              <Image
                source={require("./arrowright.png")}
                style={{
                  width: 24,
                  height: 24,
                }}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            backgroundColor: "white",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 14,
              backgroundColor: "white",
              color: "#7f7f7f",
              width: 288,
              height: 20,
              fontWeight: 400,
            }}
          >
            ©2022 PayRow Company. All rights reserved
          </Text>
        </View>
      </View>
    </>
  );
}

export default Support;
