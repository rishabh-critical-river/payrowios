import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import useProduct from "@/store/hooks/use-product";
import { OrderMetaContext } from "@/providers/context/order-meta";
import useStorageData from "@/apis/hooks/use-storage-data";
import PlusIcon from "@/components/icons/PlusIcon";

const PaymentSummary = () => {
  const router = useRouter();
  const { user } = useStorageData("user", { decode: true });
  const [orderMeta] = React.useContext(OrderMetaContext);
  const { state } = useProduct();
  const services = state?.purchaseBreakdown?.service;

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
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => {
              // navigation.navigate("AddItem");
              router.push("/products/add-item");
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
          </TouchableOpacity>
          <TouchableOpacity
            style={{ marginRight: 33 }}
            onPress={() => router.push("/products/add-item")}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text
                style={{
                  marginRight: 10,
                  color: "#4B5050",
                  fontSize: 20,
                  fontWeight: "500",
                }}
              >
                Add item
              </Text>
              <Image
                style={{ width: 20, height: 20 }}
                source={require("@/assets/icons/plusIcons.png")}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <View
          style={{
            position: "absolute",
            right: 0,
            top: 46,
          }}
        >
          <Image
            source={require("@/assets/icons/Watermark.png")}
            style={{
              width: 36,
              height: 50,
            }}
          />
        </View>
        <View>
          <Image
            style={{
              width: 150,
              height: 48.3,
              alignSelf: "center",
              marginTop: 33,
            }}
            source={require("@/assets/logos/payrow-logo.png")}
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
              {/* 16-Mar-23 */}
              {orderMeta?.date}
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
              {user?.merchantId}
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
              {orderMeta?.orderNumber}
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
          {services.length > 0 && (
            <View style={{ marginTop: 4 }}>
              {services?.map((item, index) => (
                <View key={index} style={{ flexDirection: "row" }}>
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
                    {item.englishName}
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
                    {(
                      Number(item.quantity) * Number(item.transactionAmount)
                    ).toFixed(2)}{" "}
                    AED
                  </Text>
                </View>
              ))}
            </View>
          )}
        </View>
      </View>

      <View
        style={{
          backgroundColor: "white",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <View
          style={{
            // display: "flex",
            // alignItems: "center",
            // flexDirection: "row",
            // justifyContent: "space-between",

            padding: 12,
            // height: 55,
            width: "80%",
            alignSelf: "center",
            borderRadius: 8,
            borderColor: "#dadada",
            borderWidth: 2,
          }}
        >
          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
              gap: 8,
              marginBottom: 14,
            }}
          >
            <Image
              source={require("@/assets/icons/plusicon.png")}
              style={{
                width: 20,
                height: 20,

                backgroundColor: "#4B5050E5",
                borderRadius: 10,
              }}
            />
            <Text
              style={{
                fontSize: 10,
                fontWeight: "500",
                lineHeight: 20,
                color: "#4b5050",
              }}
            >
              PayRwo service Fee{" "}
            </Text>
            <View
              style={{
                alignItems: "center",
                flexDirection: "row",
                gap: 4,
              }}
            >
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: "500",
                  lineHeight: 20,
                  color: "#4b5050",
                }}
              >
                0.9
              </Text>
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: "500",
                  lineHeight: 20,
                  color: "#4b5050",
                }}
              >
                AED
              </Text>
            </View>
          </View>
          <View
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-between",
              // backgroundColor: '#f1f1f1',
              // padding: 12,
              // height: 55,
              // width: "80%",
              // alignSelf: "center",
              // borderRadius: 8,
              // borderColor: "#dadada",
              // borderWidth: 2,
            }}
          >
            <View
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  height: 32,
                  width: 32,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#90bd6d",
                  borderRadius: 6,
                }}
              >
                <Text style={{ color: "white" }}>
                  {state.purchaseBreakdown.service.length}
                </Text>
              </View>
              <Text
                style={{ fontSize: 14, fontWeight: "500", color: "#4B5050" }}
              >
                Total Price
              </Text>
            </View>
            <View
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                flexDirection: "row",
              }}
            >
              <View>
                <Text style={{ fontSize: 22, fontWeight: "500" }}>
                  {state?.total?.toFixed(2)}
                </Text>
              </View>
              <View>
                <Text>AED</Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            position: "absolute",
            left: 0,
            bottom: 20,
            zIndex: 999,
          }}
        >
          <Image
            source={require("@/assets/icons/Watermark.png")}
            style={{
              width: 36,
              height: 50,
            }}
          />
        </View>

        <TouchableOpacity
          style={styles.goToSummaryButton}
          onPress={() => {
            // navigation.navigate('paymentMode');
            // Payment Mode screen
            router.push("/payment/payment-mode");
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

// console.log(state.selectedItems);
// const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null);
// const [totalAmount, setTotalAmount] = useState<number>(0);
// const [scanTotal, setScanTotal] = useState(0);
// const params = useLocalSearchParams<Params>();
// console.log(params, 'params');

// useEffect(() => {
//   if (params && params.orderDetails) {
//     setOrderDetails(params.orderDetails);
//   }
// }, [params]);
// useEffect(() => {
//   if (orderDetails && orderDetails.data) {
//     // Map through the order items
//   }
// }, [orderDetails, params]);
// useEffect(() => {
//   if (orderDetails && orderDetails.data) {
//     console.log(orderDetails.data, "orderDetails.data");
//   }
// }, [orderDetails]);
// // useEffect(() => {
// //   if (orderDetails) {
// //     const total = orderDetails.data.reduce((acc: any, item: any) => {
// //       return acc + item.totalAmount;
// //     }, 0);
// //     setScanTotal(total);
// //   }
// // }, [orderDetails]);
