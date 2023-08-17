import React from "react";
import { Link, useRouter } from "expo-router";
import PayRowLogo from "@/components/logo";
import { AntDesign } from "@expo/vector-icons";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import useStorageData from "@/apis/hooks/use-storage-data";

const GetStartedScreen = () => {
  const router = useRouter();
  const { user } = useStorageData("user");

  const onStarted = React.useCallback(() => {
    if (user?.token) {
      // router.push('/auth/enter-pin');
      router.push("/products/add-item");
    } else {
      // Hello
      router.push("/auth/login");
    }
  }, [user]);

  return (
    <>
      <View style={styles.container}>
        <PayRowLogo />
        <View
          style={{
            position: "absolute",
            right: 0,
            top: 76,
          }}
        >
          <Image
            source={require("@/assets/onboarding/Watermark.png")}
            style={{
              width: 36,
              height: 50,
            }}
          />
        </View>
        <Image
          source={require("@/assets/onboarding/getStarted.png")}
          style={{
            width: 312,
            height: 230,
            alignSelf: "center",
            marginTop: 40,
          }}
        />
        <Text
          style={{
            fontSize: 22,
            fontWeight: "700",
            color: "#4C4C4C",
            lineHeight: 28,
            textAlign: "center",
            marginTop: 38,
          }}
        >
          Ultimate Fintech Partner
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: "400",
            lineHeight: 20,
            marginLeft: 54,
            marginRight: 54,
            textAlign: "center",
            marginTop: 16,
            color: "#666666",
            letterSpacing: 0.25,
          }}
        >
          Together we support Go-Green & Cashless Strategy
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "white",
        }}
      >
        <View
          style={{
            position: "absolute",
            left: 0,
            bottom: 20,
            zIndex: 999,
          }}
        >
          <Image
            source={require("@/assets/onboarding/Watermark.png")}
            style={{
              width: 36,
              height: 50,
            }}
          />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={onStarted}
          // router.push('/auth/login');
          // router.push('/products/add-item');
          // router.push('/test');
          // opneWhatsapp();
          activeOpacity={0.8}
        >
          <View
            style={{
              borderWidth: 1,
              borderColor: "#4B5050",
              backgroundColor: "#4B5050",
              borderRadius: 8,
              marginBottom: 16,

              width: "100%",
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
                Get Started
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
};

export default GetStartedScreen;
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "white",
  },
  logo: {
    width: 150,
    height: 48.3,
    alignSelf: "center",
    marginTop: 33,
  },
  selectLanguage: {
    width: 163,
    height: 28,
    fontSize: 17,

    color: "#333333",
    fontWeight: "400",
    marginTop: 24.47,
    alignSelf: "center",
  },
  languageText: {
    fontSize: 14,
    paddingLeft: 16,
    fontWeight: "500",
    lineHeight: 20,
    justifyContent: "center",
    color: "#4B5050CC",
  },
  languages: {
    flexDirection: "column",

    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    width: 303,
    height: 20,
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "400",
    color: "#4B5050",
    textAlign: "center",
    marginTop: 6,
    alignSelf: "center",
    marginBottom: 15,
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  box: {
    display: "flex",
    borderWidth: 1,
    borderColor: "#4B505033",
    backgroundColor: "#ffffff",
    borderRadius: 8,
    marginBottom: 15,
    width: 328,
    height: 48,
    justifyContent: "center",
  },
  button: {
    alignSelf: "center",
    color: "#4B5050",

    padding: 10,
    fontSize: 20,
    height: 48,
    width: 328,
    cursor: "pointer",
    borderRadius: 70,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
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
