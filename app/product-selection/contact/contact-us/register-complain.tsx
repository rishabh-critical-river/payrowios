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
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
function RegisterComplain() {
  const router = useRouter();
  return (
    <>
      <View style={{ display: "flex", flex: 1, backgroundColor: "white" }}>
        <View
          style={{
            marginLeft: 18,
            marginTop: 17,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image
            source={require("@/assets/icons/arrow_back.png")}
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
            Registered Complaints
          </Text>
        </View>

        <Image
          source={require("@/assets/onboarding/payrowLogo.png")}
          style={{
            width: 150,
            height: 48.529,
            marginLeft: 105,
            marginTop: 24,
            flexShrink: 0,
          }}
        />
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              width: 296,
              height: 144,
              marginTop: 24.47,
              marginLeft: 32,
              marginRight: 32,
              backgroundColor: "#FAFAFA",
              marginBottom: 24,
              borderRadius: 8,
            }}
          >
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text
                style={{
                  width: 135,
                  height: 20,
                  marginLeft: 14,
                  color: "#333333",
                  fontWeight: 500,
                  fontSize: 14,
                  lineHeight: 20,
                  marginTop: 14,
                }}
              >
                Payment not working
              </Text>
              <Text
                style={{
                  width: 64,
                  height: 16,
                  letterSpacing: 0.5,
                  color: "#999999",
                  fontSize: 11,
                  fontWeight: 500,
                  textAlign: "right",
                  marginTop: 12,
                  marginRight: 12,
                  marginBottom: 12,
                }}
              >
                02/08/2022
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  width: 270,
                  height: 48,
                  fontSize: 12,
                  letterSpacing: 0.5,
                  fontWeight: 400,
                  lineHeight: 16,

                  color: "#4C4C4C",
                  marginTop: 6,
                  marginLeft: 14,
                  marginRight: 12,
                }}
              >
                Lorem Ipsum is simply dummy text of the print and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy.
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  width: 72,
                  height: 16,
                  fontSize: 11,
                  fontWeight: 500,
                  lineHeight: 16,
                  marginTop: 22,
                  marginBottom: 18,
                  marginLeft: 132,
                  color: "#999999",
                }}
              >
                Select Action
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  width: 70,
                  height: 28,
                  borderRadius: 8,
                  backgroundColor: "#E3EEDA",
                  marginBottom: 12,
                  marginTop: 16,
                }}
              >
                <Text
                  style={{
                    fontSize: 11,
                    letterSpacing: 0.5,
                    paddingRight: 12,
                    paddingLeft: 12,
                    paddingTop: 6,
                    paddingBottom: 6,
                  }}
                >
                  Resolve
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              width: 296,
              height: 144,
              marginTop: 24.47,
              marginLeft: 32,
              marginRight: 32,
              backgroundColor: "#FAFAFA",
              marginBottom: 24,
              borderRadius: 8,
            }}
          >
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text
                style={{
                  height: 20,
                  marginLeft: 14,
                  color: "#333333",
                  fontWeight: 500,
                  fontSize: 14,
                  lineHeight: 20,
                  marginTop: 14,
                }}
              >
                Payment not working
              </Text>
              <Text
                style={{
                  height: 16,
                  letterSpacing: 0.5,
                  color: "#999999",
                  fontSize: 11,
                  fontWeight: 500,
                  textAlign: "right",
                  marginTop: 12,
                  marginRight: 12,
                  marginBottom: 12,
                }}
              >
                02/08/2022
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  width: 270,
                  height: 48,
                  fontSize: 12,
                  letterSpacing: 0.5,
                  fontWeight: 400,
                  lineHeight: 16,

                  color: "#4C4C4C",
                  marginTop: 6,
                  marginLeft: 14,
                  marginRight: 12,
                }}
              >
                Lorem Ipsum is simply dummy text of the print and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy.
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  width: 72,
                  height: 16,
                  fontSize: 11,
                  fontWeight: 500,
                  lineHeight: 16,
                  marginTop: 22,
                  marginBottom: 18,
                  marginLeft: 132,
                  color: "#999999",
                }}
              >
                Select Action
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  width: 70,
                  height: 28,
                  borderRadius: 8,
                  backgroundColor: "#E3EEDA",
                  marginBottom: 12,
                  marginTop: 16,
                }}
              >
                <Text
                  style={{
                    fontSize: 11,
                    letterSpacing: 0.5,
                    paddingRight: 12,
                    paddingLeft: 12,
                    paddingTop: 6,
                    paddingBottom: 6,
                  }}
                >
                  Resolve
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              width: 296,
              height: 144,
              marginTop: 24.47,
              marginLeft: 32,
              marginRight: 32,
              backgroundColor: "#FAFAFA",
              marginBottom: 24,
              borderRadius: 8,
            }}
          >
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text
                style={{
                  height: 20,
                  marginLeft: 14,
                  color: "#333333",
                  fontWeight: 500,
                  fontSize: 14,
                  lineHeight: 20,
                  marginTop: 14,
                }}
              >
                Payment not working
              </Text>
              <Text
                style={{
                  height: 16,
                  letterSpacing: 0.5,
                  color: "#999999",
                  fontSize: 11,
                  fontWeight: 500,
                  textAlign: "right",
                  marginTop: 12,
                  marginRight: 12,
                  marginBottom: 12,
                }}
              >
                02/08/2022
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  width: 270,
                  height: 48,
                  fontSize: 12,
                  letterSpacing: 0.5,
                  fontWeight: 400,
                  lineHeight: 16,

                  color: "#4C4C4C",
                  marginTop: 6,
                  marginLeft: 14,
                  marginRight: 12,
                }}
              >
                Lorem Ipsum is simply dummy text of the print and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy.
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  width: 72,
                  height: 16,
                  fontSize: 11,
                  fontWeight: 500,
                  lineHeight: 16,
                  marginTop: 22,
                  marginBottom: 18,
                  marginLeft: 132,
                  color: "#999999",
                }}
              >
                Select Action
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  width: 70,
                  height: 28,
                  borderRadius: 8,
                  backgroundColor: "#E3EEDA",
                  marginBottom: 12,
                  marginTop: 16,
                }}
              >
                <Text
                  style={{
                    fontSize: 11,
                    letterSpacing: 0.5,
                    paddingRight: 12,
                    paddingLeft: 12,
                    paddingTop: 6,
                    paddingBottom: 6,
                  }}
                >
                  Resolve
                </Text>
              </View>
            </View>
          </View>
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
              fontWeight: "400",
              marginTop: 48,
              opacity: 0.800000011920929,
            }}
          >
            ©2022 PayRow Company. All rights reserved
          </Text>
        </View>
      </View>
    </>
  );
}

export default RegisterComplain;
