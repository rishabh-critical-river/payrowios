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
function NewComplain({ navigation }) {
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
            New Complain
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
        <Text
          style={{
            marginLeft: 108,
            marginRight: 108,
            textAlign: "center",
            fontSize: 14,
            fontWeight: 400,
            lineHeight: 20,
            letterSpacing: 0.25,
            marginTop:24.47,
            color: "#4C4C4C",
          }}
        >
          Select Complaint Type
        </Text>
        <View style={{ flexDirection: "column", alignItems: "center" }}>
          <View
            style={{
              width: 296,
              height: 48,
              marginTop: 16,
              marginLeft: 32,
              marginRight: 32,
              paddingTop: 15,
              paddingLeft: 16,
              paddingRight: 145,
              paddingBottom: 13,
              borderWidth: 1,
              borderStyle: "solid",
              borderColor: "rgba(75, 80, 80, 0.20)",
              borderRadius: 8,
              marginBottom:16
            }}
          >
            <Text
              style={{
                fontSize: 14,
                lineHeight: 20,
                fontWeight: "500",
                letterSpacing: 0.1,
                width: 155,
                height: 20,
                color: "rgba(75, 80, 80, 0.80)",
              }}
            >
              Payment not working
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              width: 296,
              height: 48,
              marginTop: 16,
              marginLeft: 32,
              marginRight: 32,
              paddingTop: 15,
              paddingLeft: 16,
              paddingRight: 145,
              paddingBottom: 13,
              borderWidth: 1,
              borderStyle: "solid",
              borderColor: "rgba(75, 80, 80, 0.20)",
              borderRadius: 8,
              gap: 90,
              marginBottom:16
            }}
          >
            <Text
              style={{
                fontSize: 14,
                lineHeight: 20,
                fontWeight: "500",
                letterSpacing: 0.1,
                color: "rgba(75, 80, 80, 0.80)",
                width: 155,
                height: 20,
              }}
            >
              App is too slow
            </Text>
            <View>
              <MaterialCommunityIcons
                name="checkbox-marked-circle"
                size={20}
                color="#4B5050E5"
                style={{ width: 24, height: 24 }}
              />
            </View>
          </View>
          <View
            style={{
              width: 296,
              height: 48,
              marginTop: 16,
              marginLeft: 32,
              marginRight: 32,
              paddingTop: 15,
              paddingLeft: 16,
              paddingRight: 145,
              paddingBottom: 13,
              borderWidth: 1,
              borderStyle: "solid",
              borderColor: "#4B5050",
              borderRadius: 8,
              borderColor: "rgba(75, 80, 80, 0.20)",
              marginBottom:16
            }}
          >
            <Text
              style={{
                fontSize: 14,
                lineHeight: 20,
                fontWeight: "500",
                letterSpacing: 0.1,
                color: "rgba(75, 80, 80, 0.80)",
                width: 155,
                height: 20,
              }}
            >
              Need help
            </Text>
          </View>
          <View
            style={{
              width: 296,
              height: 48,
              marginTop: 16,
              marginLeft: 32,
              marginRight: 32,
              paddingTop: 15,
              paddingLeft: 16,
              paddingRight: 145,
              paddingBottom: 13,
              borderWidth: 1,
              borderStyle: "solid",
              borderColor: "rgba(75, 80, 80, 0.20)",
              borderRadius: 8,
              marginBottom:16
      
            }}
          >
            <Text
              style={{
                fontSize: 14,
                lineHeight: 20,
                fontWeight: "500",
                letterSpacing: 0.1,
                color: "rgba(75, 80, 80, 0.80)",
                width: 155,
                height: 20,
              }}
            >
              App is crashing
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: "col", alignItems: "center" }}>
          <Text
            style={{
              marginLeft: 128,
              marginRight: 128,
              textAlign: "center",
              fontSize: 14,
              fontWeight: 400,
              lineHeight: 20,
              letterSpacing: 0.25,
              marginTop: 32,
              width: "auto",
              height: 20,
              color: "#4C4C4C",
            }}
          >
            Write Complaint
          </Text>
          <Text
            style={{
              marginLeft: 32,
              marginRight: 32,
              fontSize: 12,
              fontWeight: 400,
              lineHeight: 12,
              letterSpacing: 0.25,
              marginTop: 30,
              width: 296,
              height: 13,
              color: "rgba(75, 80, 80, 0.70)",
            }}
          >
            Brief your complaint
          </Text>
          <Text
            style={{
              marginLeft: 32,
              marginRight: 32,
              fontSize: 16,
              fontWeight: 400,
              lineHeight: 18,
              width: 296,
              height: 54,
              color: "rgba(75, 80, 80, 0.70)",
              marginBottom: 8,
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry.
          </Text>
          <Image
            source={require("./sixline.png")}
            style={{
              marginLeft: 32,
              marginRight: 32,
              width: 296,
              height: 1.6,
              marginBottom: 31,
              opacity: 0.42,
            }}
          />
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
                SUBMIT
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
              marginTop:27,
              opacity: 0.800000011920929
            }}
          >
            ©2022 PayRow Company. All rights reserved
          </Text>
        </View>
      </View>
    </>
  );
}

export default NewComplain;
