import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";

const PaymentSummary = ({ navigation, route }) => {
  const [orderDetails, setOrderDetails] = useState(null);
  const [categories, setCategories] = useState([]);
  const [totalAmount, setTotalAmount] = useState();
  const [scanTotal, setScanTotal] = useState(0);

  useEffect(() => {
    if (route.params && route.params.orderDetails) {
      setOrderDetails(route.params.orderDetails);
    }
    if (route.params && route.params.itemsWithQuantity) {
      setCategories(route.params.itemsWithQuantity);
    }
  }, [route.params]);
  useEffect(() => {
    const total = categories.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);

    setTotalAmount(total);
  }, [categories]);
  useEffect(() => {
    if (orderDetails) {
      const total = orderDetails.data.reduce((acc, item) => {
        return acc + item.totalAmount;
      }, 0);
      setScanTotal(total);
    }
  }, [orderDetails]);

  console.log(categories, "cat");
  return (
    <>
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <View>
          <Image
            style={{
              width: 150,
              height: 48.3,
              alignSelf: "center",
              marginTop: 33,
            }}
            source={require("./payrowLogo.png")}
          />

          <Text
            style={{
              textAlign: "center",
              fontWeight: "400",
              fontSize: 22,
              marginTop: 20,
            }}
          >
            Payment Summary 
          </Text>
          <Text
            style={{ textAlign: "center", marginTop: 8, color: "#4B5050B2" }}
          >
            Select the Payment Mode
          </Text>
        </View>

        <View>
          <View
            style={{
              flexDirection: "row",
              marginTop: 20,
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                marginLeft: 40,
                fontWeight: "400",
                fontSize: 12,
                lineHeight: 16,
                color: "#020202",
              }}
            >
              Date:
            </Text>
            <Text
              style={{
                marginRight: 36,
                fontWeight: "400",
                fontSize: 12,
                lineHeight: 16,
                color: "#020202",
              }}
            >
              16-Mar-23
              {/* Replace with the actual date property */}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginTop: 7,
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                marginLeft: 40,
                fontWeight: "400",
                fontSize: 12,
                lineHeight: 16,
                color: "#020202",
              }}
            >
              Merchant:
            </Text>
            <Text
              style={{
                marginRight: 36,
                fontWeight: "400",
                fontSize: 12,
                lineHeight: 16,
                color: "#020202",
              }}
            >
              3245000
              {/* Replace with the actual merchant property */}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginTop: 7,
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                marginLeft: 40,
                fontWeight: "400",
                fontSize: 12,
                lineHeight: 16,
                color: "#020202",
              }}
            >
              Order Number :
            </Text>
            <Text
              style={{
                marginRight: 36,
                fontWeight: "400",
                fontSize: 12,
                lineHeight: 16,
                color: "#020202",
              }}
            >
              3245000
              {/* Replace with the actual order number property */}
            </Text>
          </View>
          <View
            style={{
              width: 309,
              borderBottomWidth: 1,
              borderBottomColor: "#999999",
              alignSelf: "center",
              marginTop: 13,
            }}
          />
          <View
            style={{
              flexDirection: "row",
              marginTop: 8,
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                marginLeft: 40,
                fontWeight: "500",
                fontSize: 16,
                lineHeight: 24,
              }}
            >
              Product Name
            </Text>
            <Text
              style={{
                marginRight: 36,
                fontWeight: "500",
                fontSize: 16,
                lineHeight: 24,
              }}
            >
              Price
            </Text>
          </View>
          {orderDetails && (
            <View style={{ marginTop: 4 }}>
              {orderDetails.data.map((product) => (
                <View key={product._id} style={{ flexDirection: "row" }}>
                  <Text
                    style={{
                      marginLeft: 40,
                      flex: 1,
                      marginRight: 36,
                      fontWeight: "400",
                      color: "#4B5050",
                      fontSize: 12,
                      lineHeight: 16,
                    }}
                  >
                    {product.purchaseBreakdown.service[0].englishName}{" "}
                    {/* Replace with the actual product name property */}
                  </Text>
                  <Text
                    style={{
                      marginRight: 36,
                      fontWeight: "500",
                      color: "#4B5050",
                      fontSize: 12,
                      lineHeight: 20,
                    }}
                  >
                    {product.totalAmount}{" "}
                    {/* Replace with the actual product price property */}
                  </Text>
                </View>
              ))}
            </View>
          )}
          {categories && (
            <View style={{ marginTop: 4 }}>
              {categories?.map((product) => (
                <View key={product.id} style={{ flexDirection: "row" }}>
                  <Text
                    style={{
                      marginLeft: 40,
                      flex: 1,
                      marginRight: 36,
                      fontWeight: "400",
                      color: "#4B5050",
                      fontSize: 12,
                      lineHeight: 16,
                    }}
                  >
                    {product?.name}{" "}
                    {/* Replace with the actual product name property */}
                  </Text>
                  <Text
                    style={{
                      marginRight: 36,
                      fontWeight: "500",
                      color: "#4B5050",
                      fontSize: 12,
                      lineHeight: 20,
                    }}
                  >
                    {product?.price * product?.quantity}{" "}
                    {/* Replace with the actual product price property */}
                  </Text>
                </View>
              ))}
            </View>
          )}
        </View>
      </View>
      <View style={{ backgroundColor: "white" }}>
        <View
          style={{
            width: "80%",
            alignSelf: "center",
            height: 48,
            borderRadius: 10,
            marginBottom: 10,
            borderWidth: 1,
            borderColor: "rgba(75, 80, 80, 0.2)",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={styles.priceLabel}>Total Price</Text>
          <View style={styles.priceTextContainer}>
            <Text style={styles.priceText}>{totalAmount + scanTotal}</Text>
            <Text style={styles.priceCurrency}>AED</Text>
          </View>
        </View>
        <View
          style={{
            width: "80%",
            alignSelf: "center",
            height: 48,
            borderRadius: 10,

            borderWidth: 1,
            borderColor: "rgba(75, 80, 80, 0.2)",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={styles.priceLabel}>CANCEL</Text>
          <View style={styles.priceTextContainer}>
            <Image
              style={{ width: 24, height: 24, marginRight: 16 }}
              source={require("./clearblack.png")}
            />
          </View>
        </View>

        <TouchableOpacity
          style={styles.goToSummaryButton}
          onPress={() => {
            navigation.navigate("paymentMode");
          }}
        >
          <View style={styles.buttonContent}>
            <Text style={styles.buttonText}>SELECT PAYMENT MODE</Text>
            <View style={styles.arrowIcon}>
              <AntDesign name="arrowright" size={22} color="white" />
            </View>
          </View>
        </TouchableOpacity>

        <Text style={styles.footerText}>
          ©2022 PayRow Company. All rights reserved
        </Text>
      </View>
    </>
  );
};

export default PaymentSummary;
const styles = StyleSheet.create({
  buttonContainer: {
    width: "80%",
    height: 48,
    backgroundColor: "#4B5050",
    alignSelf: "center",
    borderRadius: 8,
    marginTop: 20,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  containers: {
    width: "80%",
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "rgba(75, 80, 80, 0.25)",
    alignSelf: "center",
    marginTop: 31,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 15,
    paddingRight: 15,
    shadowColor: "#757e6e",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.08,
    shadowRadius: 3,
    borderRadius: 8,
  },
  badge: {
    width: 71,
    height: 26,
    borderRadius: 8,
    backgroundColor: "#4B50500D",
    textAlign: "center",
    paddingTop: 4,
    marginRight: 22,
  },
  itemContainer: {
    width: "100%",
    alignSelf: "center",
    height: 77,
    borderRadius: 10,
    marginBottom: 10,
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "rgba(75, 80, 80, 0.2)",
    flexDirection: "row",
    alignItems: "center",
  },
  priceContainer: {
    width: "80%",
    alignSelf: "center",
    height: 48,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "rgba(75, 80, 80, 0.2)",
    flexDirection: "row",
    alignItems: "center",
  },
  priceLabel: {
    fontWeight: "500",
    flex: 1,
    fontSize: 14,
    lineHeight: 20,
    marginLeft: 16,
  },
  priceTextContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  priceText: {
    fontSize: 22,
    fontWeight: "500",
    lineHeight: 28,
  },
  priceCurrency: {
    color: "#4B505099",
    marginRight: 14,
    marginLeft: 9,
  },
  goToSummaryButton: {
    alignSelf: "center",
    marginTop: 16,
    width: "80%",
  },
  buttonContent: {
    borderWidth: 0.6,
    borderColor: "#4B5050",
    backgroundColor: "#4B5050",
    borderRadius: 8,
    marginBottom: 16,
    height: 48,
    width: "100%",
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonText: {
    fontSize: 16,
    paddingLeft: 16,
    paddingTop: 12,
    fontWeight: "500",
    lineHeight: 24,
    justifyContent: "center",
    color: "white",
    letterSpacing: 0.1,
    flex: 1,
  },
  arrowIcon: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  footerText: {
    fontSize: 12,
    backgroundColor: "white",
    color: "#7f7f7f",
    textAlign: "center",
    paddingBottom: 15,
  },
});
