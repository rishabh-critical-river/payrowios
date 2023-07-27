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
  TextInput,
} from "react-native";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
function ContactUs({ navigation }) {
  return (
    <>
      <View style={{ display: "flex", flex: 1, backgroundColor: "white" }}>
        <View
          style={{
            marginLeft: 18,
            marginTop: 17,
            flexDirection: "row",
            alignItems: "center",

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
            Contact Us
          </Text>
        </View>

        <Image
          source={require("./support.png")}
          style={{
            width: 150,
            height: 48.529,
            alignSelf: "center",
            marginTop: 32,
            flexShrink: 0,
          }}
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              marginLeft: 32,
              marginRight: 32,
              textAlign: "center",
              fontSize: 16,
              fontWeight: 500,
              lineHeight: 20,
              letterSpacing: 0.1,
              marginTop: 16.47,
              color: "#333333",
              width: 296,
              height: 48,
              letterSpacing: 0.1,
            }}
          >
            Leave us a message, we will get in touch with you as soon as
            possible 
          </Text>
        </View>

        <View style={{ alignSelf: "center", marginTop: 24 }}>
          <Text
            style={{
              fontSize: 12,
              lineHeight: 12,
              fontWeight: "400",
              color: "#4B5050",
              width: 296,
              height: 13,
            }}
          >
            Name
          </Text>

          <TextInput
            style={{
              color: "#333333",
              fontWeight: "400",
              fontSize: 16,
              opacity: 0.7,
              borderColor: "#99999",
              borderBottomWidth: 1,
            }}
            placeholder="  Amount"
          >
            Binesh Walla
          </TextInput>
        </View>

        <View style={{ alignSelf: "center", marginTop: 28 }}>
          <Text
            style={{
              fontSize: 12,
              lineHeight: 12,
              fontWeight: "400",
              color: "#4B5050",
              width: 296,
              height: 16,
            }}
          >
            Contact Number
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Image
              source={require("./UAE.png")}
              style={{
                width: 18,
                height: 18,
                marginRight: 4,
              }}
            />
            <Image
              source={require("./IconPlacholder.png")}
              style={{
                width: 20,
                height: 20,
                marginRight: 4,
              }}
            />
            <TextInput
              style={{
                color: "black",
                fontWeight: "400",
                fontSize: 16,
                width: 37,
                height: 24,
                opacity: 0.7,
                marginRight: 4,
              }}
              placeholder="Amount"
            >
              +971
            </TextInput>

            <TextInput
              style={{
                color: "#333333",
                fontWeight: "400",
                fontSize: 16,
                width: 81,
                height: 24,
                opacity: 0.7,
                marginBottom: 4,
                // borderColor: "#99999",
                // borderBottomWidth: 1,
              }}
              placeholder="  Amount"
            >
              561503987
            </TextInput>
          </View>
          <View
            //horizontal line
            style={{
              backgroundColor: "#99999",

              width: 296,
              height: 1,
              opacity: 0.7,
              alignSelf: "center",
            }}
          />
        </View>
        <View style={{ alignSelf: "center", marginTop: 23, marginBottom: 31 }}>
          <Text
            style={{
              fontSize: 12,
              lineHeight: 12,
              fontWeight: "400",
              color: "#4B5050",
              width: 296,
              height: 13,
            }}
          >
            Email
          </Text>

          <TextInput
            style={{
              color: "#333333",
              fontWeight: "400",
              fontSize: 16,
              opacity: 0.7,

              borderColor: "#99999",
              borderBottomWidth: 1,
            }}
            placeholder="  Amount"
          >
            binesh.walia@criticalriver.com
          </TextInput>
        </View>

        <View style={{ flexDirection: "col", alignItems: "center" }}>
          <View
            style={{
              flexDirection: "column",
              width: 296,
              height: 128.955,
              borderRadius: 8,
              borderWidth: 1,
              borderStyle: "solid",
              borderColor: "#B2B2B2",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                marginLeft: 16,
                marginRight: 16,
                fontSize: 12,
                fontWeight: 400,
                lineHeight: 12,
                marginTop: 8,
                width: 264,
                height: 13,
                color: "#4B5050",
                opacity: 0.8,
              }}
            >
              Message
            </Text>
            <Text
              style={{
                marginLeft: 16,
                marginRight: 16,
                fontSize: 16,
                fontWeight: 400,
                lineHeight: 24,
                width: 264,
                height: 94,
                color: "#333333",
                marginTop: 6,
                letterSpacing: 0.25,
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry.
            </Text>
          </View>
          <Text
            style={{
              marginLeft: 32,
              marginRight: 32,
              fontSize: 12,
              fontWeight: 400,
              lineHeight: 12,
              width: 296,
              height: 13,
              marginTop: 10.02,
              color: "rgba(75, 80, 80, 0.70)",
            }}
          >
            Maximum 150 words
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("registercomplain");
            }}
          >
            <View
              style={{
                flexDirection: "row",
                backgroundColor: "#4B5050",
                width: 296,
                height: 48,
                gap: 181,
                marginRight: 32,
                marginLeft: 32,
                borderRadius: 8,
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 11,
                marginTop: 16,
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  paddingLeft: 16,
                  fontWeight: "500",
                  lineHeight: 24,
                  justifyContent: "center",
                  color: "white",
                  letterSpacing: 0.1,
                }}
              >
                SEND
              </Text>
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: 16,
                }}
              >
                <AntDesign name="arrowright" size={20} color="white" />
              </View>
            </View>
          </TouchableOpacity>
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
              fontWeight: 400,
padding
          
            }}
          >
            ©2022 PayRow Company. All rights reserved
          </Text>
        </View>
    </>
  );
}

export default ContactUs;
