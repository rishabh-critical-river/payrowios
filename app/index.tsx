import React from "react";
import { useRouter } from "expo-router";
import PayRowLogo from "@/components/logo";
import { AntDesign } from "@expo/vector-icons";
import useStorageData from "@/apis/hooks/use-storage-data";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Modal from "react-native-modal";
import CloseIcon from "@/components/icons/CloseIcon";
import { Checkbox } from "react-native-paper";
import PlusIcon from "@/components/icons/PlusIcon";
import MinusIcon from "@/components/icons/minus";

const GetStartedScreen = () => {
  const router = useRouter();
  const { user } = useStorageData("user");

  const onStarted = React.useCallback(() => {
    if (user?.token) {
      router.push("/auth/enter-pin");
    } else {
      router.push("/auth/login");
    }
  }, [user]);

  // console.log(user);
  return (
    <>
      <Modal
        isVisible
        hasBackdrop
        avoidKeyboard
        backdropOpacity={0.5}
        style={{ margin: 0, justifyContent: "flex-end" }}
      >
        <TouchableOpacity activeOpacity={0.8}>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 16,
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
              <CloseIcon color={"white"} />
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.container2}>
          <View
            style={{
              backgroundColor: "#000",
              borderTopLeftRadius: 16,
              borderTopRightRadius: 16,
              padding: 16,
              height: Dimensions.get("window").height * 0.9,
            }}
          >
            <Image
              source={require("@/assets/images/valueaddtax.png")}
              style={{
                width: "100%",
                height: 175,
                marginLeft: -16,
                marginRight: -16,
                marginTop: -16,
                objectFit: "cover",
              }}
            />
            <View style={{ marginTop: 20 }}>
              <View
                style={{
                  justifyContent: "space-between",

                  display: "flex",

                  flexDirection: "row",
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
                  Do you have a voucher?
                </Text>
                <Text
                  style={{
                    color: "#febb2c",
                    fontWeight: "500",
                    fontSize: 16,
                    lineHeight: 20,
                  }}
                >
                  $192
                </Text>
              </View>
              <View
                style={{
                  paddingBottom: 12,
                  borderBottomWidth: 1,
                  borderBottomColor: "#4B5050",
                  paddingTop: 20,
                  borderTopColor: "#4B5050",
                  borderTopWidth: 1,
                  marginTop: 12,
                  marginBottom: 8,
                }}
              >
                <View style={{ flexDirection: "row", gap: 20 }}>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: "400",
                      lineHeight: 18,
                      color: "#fff",
                    }}
                  >
                    pickles
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: "400",
                      lineHeight: 18,
                      color: "#4B5050",
                    }}
                  >
                    (OPTIONAL)
                  </Text>
                </View>
                <View style={{ marginBottom: 12 }}>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: "400",
                      lineHeight: 18,
                      color: "#4B5050",
                    }}
                  >
                    Optional
                  </Text>
                </View>
                <View
                  style={{
                    justifyContent: "space-between",

                    display: "flex",

                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      gap: 4,
                      alignItems: "center",
                    }}
                  >
                    <Checkbox status={"unchecked"} />
                    <Text
                      style={{
                        color: "#fff",
                        fontWeight: "400",
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
                      color: "#4B5050",
                      fontWeight: "500",
                      fontSize: 16,
                      lineHeight: 20,
                    }}
                  >
                    $0
                  </Text>
                </View>
              </View>
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
                gap: 8,
                alignItems: "center",
              }}
            >
              <TouchableOpacity
              // onPress={() => onDecrement(item._id)}
              >
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
                  0
                </Text>
              </View>
              <TouchableOpacity
              // onPress={() => onIncrement(item._id)}
              >
                <View
                  style={{
                    width: 26,
                    height: 26,
                    // backgroundColor: '#febb2c',
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
              style={styles.goToSummaryButton}
              onPress={() => {
                // navigation.navigate('paymentMode');
                // Payment Mode screen
                router.push("/payment/payment-mode");
              }}
            >
              <View style={styles.buttonContent}>
                <Text style={styles.buttonText}>Add to cart</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <View style={styles.container}>
        <PayRowLogo />

        {user !== null && (
          <View
            style={{
              top: 30,
              right: 16,
              position: "absolute",
            }}
          >
            {user?.token && (
              <TouchableOpacity
                onPress={() => router.push("/product-selection/")}
              >
                <Image
                  source={require("@/assets/icons/menu.png")}
                  style={{
                    width: 42,
                    height: 40,
                  }}
                />
              </TouchableOpacity>
            )}
          </View>
        )}

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
          // onPress={() => router.push('/products/add-item')}
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
  container2: {
    display: "flex",
    flex: 1,
    backgroundColor: "#000",
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
  goToSummaryButton: {
    alignSelf: "center",

    textAlign: "center",
    justifyContent: "center",
  },
  buttonContent: {
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
  },
  buttonText: {
    fontSize: 16,

    fontWeight: "500",
    lineHeight: 24,
    justifyContent: "center",
    color: "white",
    letterSpacing: 0.1,
    flex: 1,
  },
});
