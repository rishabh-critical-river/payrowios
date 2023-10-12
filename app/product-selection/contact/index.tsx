import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";

function Contact() {
  const router = useRouter();
  return (
    <>
      <View style={styles.container}>
        <View
          style={{
            marginLeft: 19.98,
            marginTop: 17,
            flexDirection: "row",
            alignItems: "center",
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
            Contact PayRow
          </Text>
        </View>
        <Image
          style={{
            width: 150,
            height: 48.3,
            alignSelf: "center",
            marginTop: 24,
            marginBottom: 35,
          }}
          source={require("@/assets/onboarding/payrowLogo.png")}
        />

        <View style={styles.homeElements}>
          <ScrollView>
            <TouchableOpacity
              onPress={() => {
                // navigation.navigate("aboutPayrow");
                router.push("/product-selection/contact/about-payrow/");
              }}
              style={styles.box}
            >
              <Text style={styles.homeBlocks}> ABOUT PAYROW </Text>
              <AntDesign
                name="right"
                size={16}
                color="#4B5050"
                style={{ marginRight: 18 }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                // navigation.navigate("contactus");
                router.push("/product-selection/contact/contact-us/");
              }}
              style={styles.box}
            >
              <Text style={styles.homeBlocks}> CONTACT US </Text>
              <AntDesign
                name="right"
                size={16}
                color="#4B5050"
                style={{ marginRight: 18 }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                // navigation.navigate("support");
                router.push("/product-selection/contact/support/");
              }}
              style={styles.box}
            >
              <Text style={styles.homeBlocks}> SUPPORT </Text>
              <AntDesign
                name="right"
                size={16}
                color="#4B5050"
                style={{ marginRight: 18 }}
              />
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
      <View style={{ backgroundColor: "white" }}>
        <View
          style={{
            flexDirection: "row",
            marginLeft: 75,
            alignItems: "center",
            marginTop: 30,
            marginBottom: 17,
          }}
        >
          <Image
            source={require("@/assets/logos/fabgrey.png")}
            style={{
              width: 72.15,
              height: 42,
              marginRight: 10.85,
            }}
          />
          <Image
            source={require("@/assets/icons/visa.png")}
            style={{
              width: 52.15,
              height: 33,
              marginRight: 20.41,
            }}
          />
          <Image
            source={require("@/assets/icons/mastercard.png")}
            style={{
              width: 51.62,
              height: 32,
            }}
          />
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
      </View>
    </>
  );
}

export default Contact;
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
    marginBottom: 35,
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

    color: "#4B5050",
    lineHeight: 20,
    letterSpacing: 0.1,
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
    alignItems: "center",
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
  arrow: {
    display: "flex",
    position: "relative",
    borderWidth: 1,
    borderColor: "white",
    width: 40,
    height: 5,
    backgroundColor: "white",
  },
  arrowTriangle: {
    display: "flex",
    borderWidth: 1,
    position: "absolute",
    width: 20,
    height: 5,
    borderColor: "white",
    backgroundColor: "white",
    borderTopWidth: 1,
    borderRightWidth: 1,
    transform: [{ rotate: "45deg" }],
    right: 9,
    top: 19,
  },
  arrowTriangleRight: {
    display: "flex",
    borderWidth: 1,
    position: "absolute",
    width: 20,
    height: 5,
    borderColor: "white",
    backgroundColor: "white",
    borderTopWidth: 1,
    borderLeftWidth: 1,
    transform: [{ rotate: "-45deg" }],
    right: 9,
    top: 36,
  },
});
