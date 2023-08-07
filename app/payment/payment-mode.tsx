import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet,
} from "react-native";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

type Item = {
  country: string;
  route: "tap-to-pay" | "cash-payment" | "pay-by-link" | "pay-by-qr-code";
};

const paymentMethods: Item[] = [
  { country: "TAP TO PAY", route: "tap-to-pay" },
  { country: "CASH PAYMENT", route: "cash-payment" },
  { country: "PAY BY LINK", route: "pay-by-link" },
  { country: "PAY BY QR CODE", route: "pay-by-qr-code" }, // Update the route for this option
];

function PayByQrCode() {
  const router = useRouter();
  const [paymentMode, setPaymentMode] = useState("");

  const handleCountrySelection = React.useCallback((item: Item) => {
    setPaymentMode(item.route);
  }, []);
  const onPaymentRoute = React.useCallback(() => {
    const route = `/payment/${paymentMode}` as any;
    router.push(route);
  }, [paymentMode]);

  return (
    <>
      <View
        style={{
          paddingLeft: 19.98,
          paddingTop: 17,
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#fff",
        }}
      >
        <TouchableOpacity
          onPress={router.back}
        >
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
            color: "#333333",
          }}
        >
          Payment Mode
        </Text>
      </View>

      <View style={{ flex: 1, backgroundColor: "white" }}>
        <View>
          {/* Your existing code for rendering the view */}
          <Image
            style={{
              width: 150,
              height: 48.3,
              alignSelf: "center",
              marginTop: 33,
            }}
            source={require("@/assets/onboarding/payrowLogo.png")}
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
          data={paymentMethods}
          renderItem={({ item, index }) => {
            const isChecked = item.route === paymentMode;
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
                onPress={() => handleCountrySelection(item)}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
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
        <TouchableOpacity style={styles.button} onPress={onPaymentRoute}>
          <View
            style={{
              borderWidth: 1,
              borderColor: "#4B5050",
              backgroundColor: "#4B5050",
              borderRadius: 8,
              marginBottom: 35,
              width: "80%",
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
        <View>
          <View
            style={{
              flexDirection: "row",
              marginLeft: 75,
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 17,
            }}
          >
            <Image
              source={require("@/assets/logos/fab.png")}
              style={{
                width: 72.15,
                height: 42,
              }}
            />
            <Image
              source={require("@/assets/icons/visa.png")}
              style={{
                width: 52.15,
                height: 33,
              }}
            />
            <Image
              source={require("@/assets/icons/mastercard.png")}
              style={{
                width: 51.62,
                height: 32,
                marginRight: 75,
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
      </View>
    </>
  );
}

export default PayByQrCode;

const styles = StyleSheet.create({
  button: {
    cursor: "pointer",
    borderRadius: 70,
    justifyContent: "center",
    alignItems: "center",
  },
});
