import useProduct from "@/store/hooks/use-product";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Button } from "react-native-paper";

import Modal from "react-native-modal";
import CloseIcon from "@/components/icons/CloseIcon";
import PlusIcon from "@/components/icons/PlusIcon";
import MinusIcon from "@/components/icons/minus";
import toast from "@/hooks/lib/toast";

const ProductDetail = () => {
  const router = useRouter();
  const params = useLocalSearchParams();

  const [model, setModal] = React.useState(false);

  const { state, updateItemActive, updateItemDecrement, updateItemIncrement } =
    useProduct();

  const selectedProduct = React.useMemo(() => {
    if (state.items.length > 0) {
      return state.items.find((item) => item._id === params.category_id);
    } else {
      return null;
    }
  }, [state.items]);

  const [activeItemId, setActiveItemId] = React.useState<string | null>(null);
  const onSelect = React.useCallback(
    (item_id: string) => {
      if (item_id) {
        if (!params.category_id) return;
        setModal(true);
        setActiveItemId(item_id);
        if (params.category_id) {
          // @ts-expect-error
          updateItemIncrement(params.category_id, item_id);
        }
      }
    },
    [params.category_id]
  );

  const activeItem = React.useMemo(() => {
    if (selectedProduct && activeItemId) {
      return selectedProduct.serviceItems.find(
        (item) => item._id === activeItemId
      );
    }
  }, [activeItemId]);

  const toCart = React.useCallback(() => {
    if (activeItem) {
      if (activeItem?.quantity < 0) {
        toast.show("Atleast one quantity is required");
      }
    }
    if (selectedProduct) {
      if (activeItemId) {
        if (!params.category_id) return;
        setModal(false);
        // @ts-expect-error
        updateItemActive(params?.category_id, activeItemId, true);
        router.push({
          pathname: "/products/cart",
          params: {
            item_id: activeItemId,
            category_id: selectedProduct._id,
          },
        });
      }
    }
  }, [selectedProduct, activeItemId, activeItem]);

  const onIncrement = React.useCallback(() => {
    if (params.category_id) {
      // @ts-expect-error
      updateItemIncrement(params.category_id, activeItemId);
    }
  }, [params.category_id, activeItemId]);

  const onDecrement = React.useCallback(() => {
    if (params.category_id) {
      // @ts-expect-error
      updateItemDecrement(params.category_id, activeItemId);
    }
  }, [params.category_id, activeItemId]);

  return (
    <>
      <CartModel
        name={activeItem?.itemName as string}
        price={activeItem?.price as number}
        show={model}
        onClose={() => {
          setModal(false);
          onDecrement();
        }}
        onAddToCart={toCart}
        count={
          selectedProduct
            ? selectedProduct.serviceItems.find(
                (item) => item._id === activeItemId
              )?.quantity || 0
            : 0
        }
        onDecrement={onDecrement}
        onIncrement={onIncrement}
      />
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
              color: "#4B5050",
              maxWidth: Dimensions.get("window").width / 1.3,
            }}
            numberOfLines={1}
          >
            {toCapitilize(selectedProduct?.serviceName || "")}
          </Text>
        </View>
        <View
          style={{
            margin: 32,
            maxWidth: "100%",
            gap: 16,
          }}
        >
          {selectedProduct ? (
            selectedProduct.serviceItems.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  style={{
                    padding: 8,
                    borderRadius: 16,
                    borderWidth: 1,
                    display: "flex",
                    flexDirection: "row",
                    gap: 12,
                    backgroundColor: "#fff",
                    borderColor: item.selected ? "#007aff" : "#dadada",
                  }}
                  onPress={() => onSelect(item._id)}
                  activeOpacity={0.8}
                >
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
                    <Image
                      source={require("@/assets/images/worker.jpg")}
                      style={{
                        width: 80,
                        height: 78,
                        borderRadius: 15,
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
                      {item.itemName}
                    </Text>
                    <Text
                      style={{
                        color: "#7f7f7f",
                        fontWeight: "400",
                        fontSize: 10,
                        lineHeight: 18,
                      }}
                    >
                      {item.itemDescription}
                    </Text>
                    <Text
                      style={{
                        color: "#4B5050",
                        fontWeight: "bold",
                        fontSize: 14,
                        lineHeight: 18,
                      }}
                    >
                      ${item.price.toFixed(2)}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })
          ) : (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                height: Dimensions.get("window").height / 2,
              }}
            >
              <Text>No items found for this </Text>
              <Text>{params.category_id}</Text>
              <Button onPress={router.back}>Go Back</Button>
            </View>
          )}
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

const toCapitilize = (str: string) => {
  const lower = str.toLowerCase();
  return lower.charAt(0).toUpperCase() + lower.slice(1);
};

// const iosColors=[
//   '#ff3b30',
//   '#ff9500',
//   '#ffcc00',
//   '#4cd964',
//   '#5ac8fa',
//   '#007aff',
//   '#5856d6',
//   '#ff2d55',
//   '#8e8e93',

// ]

type Function = () => void;
type ModelProps = {
  name: string;
  price: number;
  show: boolean;
  count: number | string;
  onClose: Function;
  onAddToCart: Function;
  onDecrement: Function;
  onIncrement: Function;
};
const CartModel = (props: ModelProps) => {
  return (
    <Modal
      isVisible={props.show}
      hasBackdrop
      avoidKeyboard
      backdropOpacity={0.5}
      style={{ margin: 0, justifyContent: "flex-end" }}
    >
      <TouchableOpacity activeOpacity={0.8} onPress={props.onClose}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <View
            style={{
              backgroundColor: "rgba(0,0,0,0.5)",
              height: 40,
              width: 40,
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CloseIcon color="white" />
          </View>
        </View>
      </TouchableOpacity>
      <View
        style={{
          flex: 0.95,
          display: "flex",
          backgroundColor: "#000",
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          height: Dimensions.get("window").height * 0.9,
        }}
      >
        <View
          style={{
            padding: 16,
          }}
        >
          <Image
            source={require("@/assets/banners/glassmorphism.jpeg")}
            style={{
              height: 175,
              width: "100%",
              objectFit: "cover",
              borderRadius: 8,
            }}
          />
          <View style={{ marginTop: 20 }}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontWeight: "400",
                  fontSize: 14,
                  lineHeight: 20,
                }}
              >
                {props?.name}
              </Text>
              <Text
                style={{
                  color: "#febb2c",
                  fontWeight: "500",
                  fontSize: 16,
                  lineHeight: 20,
                }}
              >
                ${props?.price?.toFixed(2)}
              </Text>
            </View>
            {/* <View
              style={{
                paddingBottom: 12,
                borderBottomWidth: 1,
                borderBottomColor: '#4B5050',
                paddingTop: 20,
                borderTopColor: '#4B5050',
                borderTopWidth: 1,
                marginTop: 12,
                marginBottom: 8,
              }}
            >
              <View style={{ flexDirection: 'row', gap: 20 }}>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: '400',
                    lineHeight: 18,
                    color: '#fff',
                  }}
                >
                  pickles
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: '400',
                    lineHeight: 18,
                    color: '#4B5050',
                  }}
                >
                  (OPTIONAL)
                </Text>
              </View>
              <View style={{ marginBottom: 12 }}>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: '400',
                    lineHeight: 18,
                    color: '#4B5050',
                  }}
                >
                  Optional
                </Text>
              </View>
              <View
                style={{
                  justifyContent: 'space-between',

                  display: 'flex',

                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <View
                  style={{
                    flexDirection: 'row',
                    gap: 4,
                    alignItems: 'center',
                  }}
                >
                  <Checkbox status="unchecked" />
                  <Text
                    style={{
                      color: '#fff',
                      fontWeight: '400',
                      fontSize: 14,
                      lineHeight: 20,
                    }}
                  >
                    pickles
                  </Text>
                </View>
                <Text
                  style={{
                    // color: "#febb2c",
                    color: '#4B5050',
                    fontWeight: '500',
                    fontSize: 16,
                    lineHeight: 20,
                  }}
                >
                  $0
                </Text>
              </View>
            </View> */}
          </View>
        </View>
      </View>
      <View style={{ backgroundColor: "#000" }}>
        <View
          style={{
            justifyContent: "space-between",
            display: "flex",
            flexDirection: "row",
            marginLeft: 16,
            marginRight: 16,
            marginBottom: 16,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 16,
              alignItems: "center",
            }}
          >
            <TouchableOpacity onPress={props.onDecrement}>
              <View
                style={{
                  width: 38,
                  height: 48,
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
                {props.count}
              </Text>
            </View>
            <TouchableOpacity onPress={props.onIncrement}>
              <View
                style={{
                  width: 38,
                  height: 48,
                  backgroundColor: "#febb2c",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 8,
                }}
              >
                <PlusIcon height={12} width={12} />
              </View>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{
              alignSelf: "center",
              justifyContent: "center",
            }}
            onPress={props.onAddToCart}
          >
            <View
              style={{
                borderWidth: 0.6,
                borderColor: "#4B5050",
                backgroundColor: "#4B5050",
                borderRadius: 8,

                height: 48,
                width: "100%",
                paddingTop: 8,
                paddingLeft: 16,
                paddingRight: 16,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 16,

                  fontWeight: "500",
                  lineHeight: 24,
                  justifyContent: "center",
                  color: "white",
                  letterSpacing: 0.1,
                  flex: 1,
                }}
              >
                Add to cart
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
