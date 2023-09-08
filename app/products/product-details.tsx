import { useRouter } from "expo-router";
import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";

const ProductDetail = () => {
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
            Items
          </Text>
        </View>

        <View
          style={{
            margin: 32,
            maxWidth: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          <TouchableOpacity
            onPress={() => router.push("/products/cart")}
            style={{
              borderColor: "#dadada",
              padding: 8,
              borderRadius: 16,
              backgroundColor: "#fff",
              borderWidth: 1,
              display: "flex",
              flexDirection: "row",
              gap: 16,
            }}
          >
            <View>
              <Image
                source={require("@/assets/icons/mastercard.png")}
                style={{
                  width: 79,
                  height: 79,
                }}
              />
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 4,
              }}
            >
              <Text
                style={{
                  color: "#4B5050",
                  fontWeight: "500",
                  fontSize: 14,
                  lineHeight: 20,
                }}
              >
                Mojito
              </Text>
              <Text
                style={{
                  color: "#7f7f7f",
                  fontWeight: "400",
                  fontSize: 10,
                  lineHeight: 18,
                }}
              >
                Lorem ipsum dolor sit
              </Text>
              <Text
                style={{
                  color: "#febb2c",
                  fontWeight: "400",
                  fontSize: 14,
                  lineHeight: 18,
                }}
              >
                $ 4.99
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderColor: "#dadada",
              padding: 8,
              borderRadius: 16,
              backgroundColor: "#fff",
              borderWidth: 1,
              display: "flex",
              flexDirection: "row",
              gap: 16,
            }}
          >
            <View>
              <Image
                source={require("@/assets/icons/mastercard.png")}
                style={{
                  width: 79,
                  height: 79,
                }}
              />
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 4,
              }}
            >
              <Text
                style={{
                  color: "#4B5050",
                  fontWeight: "500",
                  fontSize: 14,
                  lineHeight: 20,
                }}
              >
                Mojito
              </Text>
              <Text
                style={{
                  color: "#7f7f7f",
                  fontWeight: "400",
                  fontSize: 10,
                  lineHeight: 18,
                }}
              >
                Lorem ipsum dolor sit
              </Text>
              <Text
                style={{
                  color: "#febb2c",
                  fontWeight: "400",
                  fontSize: 14,
                  lineHeight: 18,
                }}
              >
                $ 4.99
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderColor: "#dadada",
              padding: 8,
              borderRadius: 16,
              backgroundColor: "#fff",
              borderWidth: 1,
              display: "flex",
              flexDirection: "row",
              gap: 16,
            }}
          >
            <View>
              <Image
                source={require("@/assets/icons/mastercard.png")}
                style={{
                  width: 79,
                  height: 79,
                }}
              />
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 4,
              }}
            >
              <Text
                style={{
                  color: "#4B5050",
                  fontWeight: "500",
                  fontSize: 14,
                  lineHeight: 20,
                }}
              >
                Mojito
              </Text>
              <Text
                style={{
                  color: "#7f7f7f",
                  fontWeight: "400",
                  fontSize: 10,
                  lineHeight: 18,
                }}
              >
                Lorem ipsum dolor sit
              </Text>
              <Text
                style={{
                  color: "#febb2c",
                  fontWeight: "400",
                  fontSize: 14,
                  lineHeight: 18,
                }}
              >
                $ 4.99
              </Text>
            </View>
          </TouchableOpacity>
        </View>
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
export default ProductDetail;

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
