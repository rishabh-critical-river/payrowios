import React, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";

const PaymentSummary = ({ navigation, route }) => {
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    if (route.params && route.params.orderDetails) {
      setOrderDetails(route.params.orderDetails);
    }
  }, [route.params]);

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
            Payment Summary zc
          </Text>
          <Text
            style={{ textAlign: "center", marginTop: 8, color: "#4B5050B2" }}
          >
            Select the Payment Mode
          </Text>
        </View>
        {orderDetails && (
          <>
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
                {orderDetails.createdAt}{" "}
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
                {orderDetails.storeId}{" "}
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
                {orderDetails.orderNumber}{" "}
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
          </>
        )}
      </View>
      {/* Rest of the code... */}
    </>
  );
};

export default PaymentSummary;
