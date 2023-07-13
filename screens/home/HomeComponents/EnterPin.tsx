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
function EnterPin({ navigation }: any) {
  return (
    <>
      <View style={styles.container}>
        <Image
          source={require("./fab.png")}
          style={{
            width: 137.41,
            height: 80,
            alignSelf: "center",
            marginTop: 16,
          }}
        />
        <Text
          style={{
            fontSize: 22,
            fontWeight: "400",
            lineHeight: 28,
            textAlign: "center",
            marginTop: 10,
          }}
        >
          Please enter your PIN
        </Text>
        <View style={{ flexDirection: "row", marginLeft: 135, marginTop: 20 }}>
          <Text style={{ fontSize: 32, fontWeight: "700", marginRight: 20 }}>
            *
          </Text>
          <Text style={{ fontSize: 32, fontWeight: "700", marginRight: 20 }}>
            *
          </Text>
          <Text style={{ fontSize: 32, fontWeight: "700", marginRight: 20 }}>
            *
          </Text>
          <Text style={{ fontSize: 32, fontWeight: "700", marginRight: 20 }}>
            *
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignSelf: "center",
            marginTop: 20,
            alignItems: "center",
          }}
        >
          <View
            style={{
              borderWidth: 1,
              borderColor: "#4B50504D",
              borderRadius: 8,

              width: 70,
              height: 70,
              alignSelf: "center",
              backgroundColor: "#4B505005",
              marginRight: 26,
            }}
          >
            <Text
              style={{
                fontSize: 28,
                fontWeight: "400",
                color: "#4B5050",
                alignSelf: "center",
                lineHeight: 36,
                marginTop: 17,
              }}
            >
              1
            </Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: "#4B50504D",
              borderRadius: 8,

              width: 70,
              height: 70,
              alignSelf: "center",
              backgroundColor: "#4B505005",
              marginRight: 26,
            }}
          >
            <Text
              style={{
                fontSize: 28,
                fontWeight: "400",
                color: "#4B5050",
                alignSelf: "center",
                lineHeight: 36,
                marginTop: 17,
              }}
            >
              2
            </Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: "#4B50504D",
              borderRadius: 8,

              width: 70,
              height: 70,
              alignSelf: "center",
              backgroundColor: "#4B505005",
            }}
          >
            <Text
              style={{
                fontSize: 28,
                fontWeight: "400",
                color: "#4B5050",
                alignSelf: "center",
                lineHeight: 36,
                marginTop: 17,
              }}
            >
              3
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignSelf: "center",
            marginTop: 26,
            alignItems: "center",
          }}
        >
          <View
            style={{
              borderWidth: 1,
              borderColor: "#4B50504D",
              borderRadius: 8,

              width: 70,
              height: 70,
              alignSelf: "center",
              backgroundColor: "#4B505005",
              marginRight: 26,
            }}
          >
            <Text
              style={{
                fontSize: 28,
                fontWeight: "400",
                color: "#4B5050",
                alignSelf: "center",
                lineHeight: 36,
                marginTop: 17,
              }}
            >
              4
            </Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: "#4B50504D",
              borderRadius: 8,

              width: 70,
              height: 70,
              alignSelf: "center",
              backgroundColor: "#4B505005",
              marginRight: 26,
            }}
          >
            <Text
              style={{
                fontSize: 28,
                fontWeight: "400",
                color: "#4B5050",
                alignSelf: "center",
                lineHeight: 36,
                marginTop: 17,
              }}
            >
              5
            </Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: "#4B50504D",
              borderRadius: 8,

              width: 70,
              height: 70,
              alignSelf: "center",
              backgroundColor: "#4B505005",
            }}
          >
            <Text
              style={{
                fontSize: 28,
                fontWeight: "400",
                color: "#4B5050",
                alignSelf: "center",
                lineHeight: 36,
                marginTop: 17,
              }}
            >
              6
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignSelf: "center",
            marginTop: 26,
            alignItems: "center",
          }}
        >
          <View
            style={{
              borderWidth: 1,
              borderColor: "#4B50504D",
              borderRadius: 8,

              width: 70,
              height: 70,
              alignSelf: "center",
              backgroundColor: "#4B505005",
              marginRight: 26,
            }}
          >
            <Text
              style={{
                fontSize: 28,
                fontWeight: "400",
                color: "#4B5050",
                alignSelf: "center",
                lineHeight: 36,
                marginTop: 17,
              }}
            >
              7
            </Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: "#4B50504D",
              borderRadius: 8,

              width: 70,
              height: 70,
              alignSelf: "center",
              backgroundColor: "#4B505005",
              marginRight: 26,
            }}
          >
            <Text
              style={{
                fontSize: 28,
                fontWeight: "400",
                color: "#4B5050",
                alignSelf: "center",
                lineHeight: 36,
                marginTop: 17,
              }}
            >
              8
            </Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: "#4B50504D",
              borderRadius: 8,

              width: 70,
              height: 70,
              alignSelf: "center",
              backgroundColor: "#4B505005",
            }}
          >
            <Text
              style={{
                fontSize: 28,
                fontWeight: "400",
                color: "#4B5050",
                alignSelf: "center",
                lineHeight: 36,
                marginTop: 17,
              }}
            >
              9
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignSelf: "center",
            marginTop: 26,
            alignItems: "center",
          }}
        >
          <View
            style={{
              borderWidth: 1,
              borderColor: "#4B50504D",
              borderRadius: 8,

              width: 70,
              height: 70,
              alignSelf: "center",
              backgroundColor: "#4B505005",
              marginRight: 26,
            }}
          >
            <Image
              source={require("./backspace.png")}
              style={{
                alignSelf: "center",

                marginTop: 25,
              }}
            />
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: "#4B50504D",
              borderRadius: 8,

              width: 70,
              height: 70,
              alignSelf: "center",
              backgroundColor: "#4B505005",
              marginRight: 26,
            }}
          >
            <Text
              style={{
                fontSize: 28,
                fontWeight: "400",
                color: "#4B5050",
                alignSelf: "center",
                lineHeight: 36,
                marginTop: 17,
              }}
            >
              0
            </Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: "#4B50504D",
              borderRadius: 8,

              width: 70,
              height: 70,
              alignSelf: "center",
              backgroundColor: "#4B505005",
            }}
          >
            <Image
              source={require("./go.png")}
              style={{
                alignSelf: "center",
                width: 44,
                height: 44,
                marginTop: 12,
              }}
            />
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Confirmation");
          }}
          style={{
            borderWidth: 1,
            borderColor: "#4B505040",
            borderRadius: 8,
            marginTop: 30,

            width: 296,
            height: 48,
            alignSelf: "center",
            backgroundColor: "#4B5050",
          }}
        >
          <Text
            style={{
              fontWeight: "500",
              fontSize: 16,
              lineHeight: 24,
              color: "#FFFFFF",
              marginLeft: 16,
              marginTop: 12,
            }}
          >
            CANCEL
          </Text>
          <Image
            source={require("./clear.png")}
            style={{
              width: 13.97,
              height: 13.97,
              position: "absolute",
              right: 16,
              top: 16,
            }}
          />
        </TouchableOpacity>
      </View>
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
    </>
  );
}

export default EnterPin;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  logo: {
    width: 150,
    height: 48.3,
    alignSelf: "center",
    marginTop: 33,
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
    backgroundColor: "#72ac47",
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
