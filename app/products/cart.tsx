import ImageIcon from "@/components/icons/ImageIcon";
import PlusIcon from "@/components/icons/PlusIcon";
import MinusIcon from "@/components/icons/minus";
import useProduct from "@/store/hooks/use-product";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

const Cart = () => {
  const router = useRouter();
  const params = useLocalSearchParams();
  const { state, updateItemDecrement, updateItemIncrement } = useProduct();

  console.log(params);

  const selectedProduct = React.useMemo(() => {
    if (state.items.length > 0) {
      return state.items.find((item) => item._id === params.category_id);
    } else {
      return null;
    }
  }, [state.items]);

  const onIncrement = React.useCallback(
    (item_id: string) => {
      if (params.category_id) {
        // @ts-expect-error
        updateItemIncrement(params.category_id, item_id);
      }
    },
    [state.items]
  );

  const onDecrement = React.useCallback(
    (item_id: string) => {
      if (params.category_id) {
        // @ts-expect-error
        updateItemDecrement(params.category_id, item_id);
      }
    },
    [state.items]
  );

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
            Cart
          </Text>
        </View>

        <View
          style={{
            margin: 32,
            maxWidth: "100%",
            gap: 16,
          }}
        >
          {selectedProduct?.serviceItems
            .filter((item) => item.selected)
            .map((item, index) => {
              return (
                <View
                  key={index}
                  style={{
                    borderColor: "#dadada",
                    padding: 8,
                    borderRadius: 16,
                    backgroundColor: "#fff",
                    borderWidth: 1,
                    display: "flex",
                    flexDirection: "row",
                    gap: 12,
                  }}
                >
                  <View>
                    <View
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: 80,
                        width: 80,
                        borderRadius: 8,
                        backgroundColor: "#F2F2F2",
                      }}
                    >
                      {/* <Image
                      source={require("@/assets/icons/mastercard.png")}
                      style={{
                        width: 51.62,
                        height: 32,
                      }}
                    /> */}
                      <Image
                        source={require("@/assets/images/worker.jpg")}
                        style={{
                          width: 80,
                          height: 78,
                          borderRadius: 15,
                        }}
                      />
                    </View>
                  </View>
                  <View
                    style={{
                      justifyContent: "space-between",
                      // backgroundColor: "red",
                      display: "flex",
                      flex: 1,
                      flexDirection: "row",
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        // gap: 36,
                      }}
                    >
                      <Text
                        style={{
                          color: "#4B5050",
                          fontWeight: "500",
                          fontSize: 14,
                          maxWidth: 100,
                        }}
                        numberOfLines={2}
                      >
                        {item.itemName}
                      </Text>
                      <Text
                        style={{
                          color: "#7f7f7f",
                          fontWeight: "400",
                          fontSize: 10,
                        }}
                      >
                        {item.itemDescription}
                      </Text>
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          // alignSelf: "flex-end",
                          justifyContent: "flex-end",
                          // justifyContent: "space-between",
                        }}
                      >
                        <Text
                          style={{
                            color: "#4B5050",
                            fontWeight: "bold",
                            fontSize: 16,
                            lineHeight: 18,
                          }}
                        >
                          ${item.price.toFixed(2)}
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: 4,

                        alignItems: "flex-end",
                      }}
                    >
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          gap: 4,
                          alignItems: "center",
                        }}
                      >
                        <TouchableOpacity onPress={() => onDecrement(item._id)}>
                          <View
                            style={{
                              width: 26,
                              height: 26,
                              backgroundColor: "#f8f9fa",
                              alignItems: "center",
                              justifyContent: "center",
                              borderRadius: 8,
                            }}
                          >
                            <MinusIcon height={12} width={12} />
                          </View>
                        </TouchableOpacity>
                        <View>
                          <Text
                            style={{
                              color: "#4B5050",
                              fontWeight: "500",
                              fontSize: 16,
                              lineHeight: 20,
                            }}
                          >
                            {item.quantity}
                          </Text>
                        </View>
                        <TouchableOpacity onPress={() => onIncrement(item._id)}>
                          <View
                            style={{
                              width: 26,
                              height: 26,
                              // backgroundColor: '#febb2c',
                              backgroundColor: "#f8f9fa",
                              alignItems: "center",
                              justifyContent: "center",
                              borderRadius: 8,
                            }}
                          >
                            <PlusIcon height={12} width={12} />
                          </View>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>
              );
            })}

          <View
            style={{
              // borderColor: "#dadada",
              padding: 16,
              borderRadius: 16,
              backgroundColor: "#f6f7fa",
              // borderWidth: 1,
              display: "flex",
              flexDirection: "row",
              gap: 16,
              marginBottom: 32,
            }}
          >
            <View
              style={{
                justifyContent: "space-between",
                // backgroundColor: "red",
                display: "flex",
                flex: 1,
                flexDirection: "row",
              }}
            >
              <Text
                style={{
                  color: "#7f7f7f",
                  fontWeight: "400",
                  fontSize: 14,
                  lineHeight: 20,
                }}
              >
                SubTotal
              </Text>
              <Text
                style={{
                  color: "#4B5050",
                  fontWeight: "500",
                  fontSize: 14,
                  lineHeight: 20,
                }}
              >
                ${state.total.toFixed(2)}
              </Text>
            </View>
          </View>
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
export default Cart;

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
