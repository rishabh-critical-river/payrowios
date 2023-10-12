import { useRouter } from "expo-router";
import React, { useState } from "react";
import { TextInput } from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { RadioButton } from "react-native-paper";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Modal from "react-native-modal";

function InventoryManagement() {
  const router = useRouter();
  //   const categories = [
  //     {
  //       id: 1,
  //       name: "Bakery ",
  //       items: [{ id: 1, name: "Apple", price: 1.09 }],
  //     },
  //     {
  //       id: 2,
  //       name: "Meat & Poultry & Fish",
  //       items: [{ id: 1, name: "Tea", price: 1.09 }],
  //     },
  //     {
  //       id: 3,
  //       name: "Home Bake & Sugar",
  //       items: [{ id: 1, name: "Chicken", price: 1.09 }],
  //     },
  //     // Add more categories as needed
  //   ];

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (categoryId: any) => {
    if (openDropdown === categoryId) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(categoryId);
    }
  };
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <Modal isVisible={isModalVisible}>
        <View
          style={{
            backgroundColor: "white",
            borderRadius: 8,

            // flex: 0.25,
            padding: 16,
          }}
        >
          <View style={styles.popupcontentbox}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                width: "100%",
                paddingBottom: 10,
                borderBottomWidth: 1,
                borderBottomColor: "rgba(75, 80, 80, 0.25)",
                marginBottom: 10,

                gap: 12,
              }}
            >
              <View>
                <Image
                  source={require("@/assets/icons/avtarplus.png")}
                  style={{
                    width: 58,
                    height: 55,

                    marginRight: 10.02,
                  }}
                />
              </View>
              <View>
                <RadioButton status="unchecked" value={""} />
              </View>
              <View>
                <Image
                  source={require("@/assets/icons/ellipse.png")}
                  style={{
                    width: 58,
                    height: 55,

                    marginRight: 10.02,
                  }}
                />
              </View>
              <View>
                <RadioButton status="checked" value={""} />
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-start",
                width: "100%",
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "400",
                  lineHeight: 16,
                  color: "#4B5050",
                }}
              >
                Select your Product Picture
              </Text>
              <TouchableOpacity
                style={{
                  backgroundColor: "#E3EEDA",
                  borderRadius: 8,
                  paddingLeft: 12,
                  paddingRight: 12,
                  paddingTop: 6,
                  paddingBottom: 6,
                }}
                onPress={() => router.back()}
              >
                <Text
                  style={{
                    color: "#333",
                    fontSize: 12,
                    fontWeight: "500",
                    lineHeight: 16,
                  }}
                >
                  Next
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <View style={styles.container}>
        <View
          style={{
            marginLeft: 30,
            marginRight: 30,
            marginTop: 17,
            marginBottom: 32,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              flex: 1,
              alignItems: "center",
              flexDirection: "row",
              gap: 8,
            }}
            onPress={router.back}
          >
            <Image
              source={require("@/assets/icons/arrow_back.png")}
              style={{
                width: 16.03,
                height: 16.03,
              }}
            />
            <Text
              style={{
                textAlign: "center",
                fontWeight: "500",
                fontSize: 18,
                color: "#4B5050",
                lineHeight: 20,
              }}
            >
              Category
            </Text>
          </TouchableOpacity>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text
              style={{
                marginRight: 10,
                color: "#4B5050",
                fontSize: 14,
                fontWeight: "500",
              }}
            >
              TID :
            </Text>
            <Text
              style={{
                marginRight: 10,
                color: "#4B5050",
                fontSize: 14,
                fontWeight: "500",
              }}
            >
              3245167
            </Text>
          </View>
        </View>

        <View
          style={{
            alignSelf: "center",
            width: "80%",
          }}
        >
          <TextInput
            placeholder="search for category "
            style={{
              fontSize: 14,
              height: 40,
              padding: 3,
              paddingLeft: 12,
              borderRadius: 16,
              borderWidth: 1,
              borderColor: "rgba(245, 245, 245, 1)",
            }}
          />
          <View
            style={{
              position: "absolute",
              right: 3,
              backgroundColor: "#F5F5F5",
              padding: 9,
              top: 3,
              borderTopRightRadius: 16,
              borderBottomRightRadius: 16,
            }}
          >
            <Image
              style={{
                width: 16,
                height: 16,
              }}
              source={require("@/assets/icons/Search.png")}
            />
          </View>
        </View>

        <View>
          <View>
            <TouchableOpacity style={styles.dropDown}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "500",
                    lineHeight: 20,
                    color: "#4B5050",
                  }}
                >
                  Bread
                </Text>
                <Image
                  source={require("@/assets/icons/keyboard_arrow_right.png")}
                  style={{
                    width: 7.41,
                    height: 12,

                    marginRight: 10.02,
                  }}
                />
              </View>
            </TouchableOpacity>

            <View>
              <View style={{ marginBottom: 8 }}>
                <View style={styles.itembox}>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "flex-start",
                      width: "100%",
                      paddingBottom: 10,
                      borderBottomWidth: 1,
                      borderBottomColor: "rgba(75, 80, 80, 0.25)",
                      marginBottom: 10,

                      gap: 15,
                    }}
                  >
                    <TouchableOpacity onPress={toggleModal}>
                      <Image
                        source={require("@/assets/icons/avtarplus.png")}
                        style={{
                          width: 58,
                          height: 55,

                          marginRight: 10.02,
                        }}
                      />
                    </TouchableOpacity>
                    <View
                      style={{
                        flexDirection: "column",
                        gap: 10,
                        width: "100%",
                      }}
                    >
                      <View
                        style={{
                          flexDirection: "row",
                          gap: 30,
                        }}
                      >
                        <View
                          style={{
                            flexDirection: "row",
                            gap: 16,
                            alignItems: "center",
                          }}
                        >
                          <Text
                            style={{
                              fontSize: 14,
                              fontWeight: "500",
                              lineHeight: 20,
                              color: "#4B5050",
                            }}
                          >
                            200 AED
                          </Text>
                          <Image
                            source={require("@/assets/icons/editicon.png")}
                            style={{
                              width: 16,
                              height: 16,

                              marginRight: 10.02,
                            }}
                          />
                        </View>
                        <View
                          style={{
                            backgroundColor: "#E3EEDA",
                            borderRadius: 8,
                            paddingLeft: 12,
                            paddingRight: 12,
                            paddingTop: 6,
                            paddingBottom: 6,
                            marginLeft: 8,
                          }}
                        >
                          <Text
                            style={{
                              color: "#333",
                              fontSize: 12,
                              fontWeight: "500",
                              lineHeight: 16,
                            }}
                          >
                            Done
                          </Text>
                        </View>
                      </View>
                      <View
                        style={{
                          flexDirection: "row",
                          gap: 65,
                        }}
                      >
                        <View
                          style={{
                            flexDirection: "row",
                            gap: 16,
                            alignItems: "center",
                          }}
                        >
                          <Text
                            style={{
                              fontSize: 12,
                              fontWeight: "500",
                              lineHeight: 20,
                              color: "#558C8C",
                            }}
                          >
                            Product Name
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      width: "100%",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: "400",
                        lineHeight: 16,
                        color: "#4B5050",
                      }}
                    >
                      Delete the item
                    </Text>
                    <TouchableOpacity
                      style={{
                        backgroundColor: "#808080",
                        borderRadius: 8,
                        paddingLeft: 12,
                        paddingRight: 12,
                        paddingTop: 6,
                        paddingBottom: 6,
                      }}
                    >
                      <Text
                        style={{
                          color: "#fff",
                          fontSize: 12,
                          fontWeight: "500",
                          lineHeight: 16,
                        }}
                      >
                        Delete
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.itembox}>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "flex-start",
                      width: "100%",
                      paddingBottom: 10,
                      borderBottomWidth: 1,
                      borderBottomColor: "rgba(75, 80, 80, 0.25)",
                      marginBottom: 10,

                      gap: 15,
                    }}
                  >
                    <View>
                      <Image
                        source={require("@/assets/icons/avtarplus.png")}
                        style={{
                          width: 58,
                          height: 55,

                          marginRight: 10.02,
                        }}
                      />
                    </View>
                    <View
                      style={{
                        flexDirection: "column",
                        gap: 10,
                        width: "100%",
                      }}
                    >
                      <View
                        style={{
                          flexDirection: "row",
                          gap: 30,
                        }}
                      >
                        <View
                          style={{
                            flexDirection: "row",
                            gap: 16,
                            alignItems: "center",
                          }}
                        >
                          <Text
                            style={{
                              fontSize: 14,
                              fontWeight: "500",
                              lineHeight: 20,
                              color: "#4B5050",
                            }}
                          >
                            200 AED
                          </Text>
                          <Image
                            source={require("@/assets/icons/editicon.png")}
                            style={{
                              width: 16,
                              height: 16,

                              marginRight: 10.02,
                            }}
                          />
                        </View>
                        <View
                          style={{
                            backgroundColor: "#E3EEDA",
                            borderRadius: 8,
                            paddingLeft: 12,
                            paddingRight: 12,
                            paddingTop: 6,
                            paddingBottom: 6,
                            marginLeft: 8,
                          }}
                        >
                          <Text
                            style={{
                              color: "#333",
                              fontSize: 12,
                              fontWeight: "500",
                              lineHeight: 16,
                            }}
                          >
                            Done
                          </Text>
                        </View>
                      </View>
                      <View
                        style={{
                          flexDirection: "row",
                          gap: 65,
                        }}
                      >
                        <View
                          style={{
                            flexDirection: "row",
                            gap: 16,
                            alignItems: "center",
                          }}
                        >
                          <Text
                            style={{
                              fontSize: 12,
                              fontWeight: "500",
                              lineHeight: 20,
                              color: "#558C8C",
                            }}
                          >
                            Product Name
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      width: "100%",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: "400",
                        lineHeight: 16,
                        color: "#4B5050",
                      }}
                    >
                      Delete the item
                    </Text>
                    <TouchableOpacity
                      style={{
                        backgroundColor: "#808080",
                        borderRadius: 8,
                        paddingLeft: 12,
                        paddingRight: 12,
                        paddingTop: 6,
                        paddingBottom: 6,
                      }}
                    >
                      <Text
                        style={{
                          color: "#fff",
                          fontSize: 12,
                          fontWeight: "500",
                          lineHeight: 16,
                        }}
                      >
                        Delete
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
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
            position: "absolute",
            left: 0,
            bottom: 20,
            // zIndex: 999,
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
            color: "#4B5050",
            textAlign: "center",
            paddingBottom: 16,
          }}
        >
          ©2022 PayRow Company. All rights reserved
        </Text>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  dropDown: {
    width: "80%",
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "rgba(75, 80, 80, 0.25)",
    alignSelf: "center",
    marginTop: 20,
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
  },
  itembox: {
    width: "80%",

    borderRadius: 10,
    borderWidth: 1,
    borderColor: "rgba(75, 80, 80, 0.25)",
    alignSelf: "center",
    marginTop: 20,
    paddingTop: 20,
    paddingBottom: 12,

    paddingLeft: 14,
    paddingRight: 14,
    shadowColor: "#757e6e",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.08,
    shadowRadius: 3,
  },
  popupcontentbox: {
    width: "100%",

    borderRadius: 10,
    borderWidth: 1,
    borderColor: "rgba(75, 80, 80, 0.25)",
    alignSelf: "center",

    paddingTop: 20,
    paddingBottom: 12,

    paddingLeft: 14,
    paddingRight: 14,
    shadowColor: "#757e6e",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.08,
    shadowRadius: 3,
  },
  itemContainer: {
    width: "70%",
    alignSelf: "center",
    marginTop: 20,
    borderRadius: 10,

    justifyContent: "center",
    borderWidth: 1,
    borderColor: "rgba(75, 80, 80, 0.2)",
    flexDirection: "column",
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
  },
  logo: {
    width: 150,
    height: 48.53,
    alignSelf: "center",
    marginTop: 33,
  },
  rightPin: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  leftPin: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D3D3D3",
    borderTopEndRadius: 10,
    borderBottomEndRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  horizontal: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  horizontalOr: {
    paddingLeft: 5,
    paddingRight: 5,
    marginTop: 18,
    marginBottom: 18,
  },
  horizontalLine: {
    borderBottomColor: "#D3D3D3",
    width: 105,
    borderBottomWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    alignSelf: "center",
  },
  url: {
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  fingerprint: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginTop: 70,
    marginBottom: 10,
  },
  verticalLine: {
    borderBottomColor: "#D3D3D3",
    color: "black",
    width: 15,
    transform: [{ rotate: "90deg" }],
    borderBottomWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    alignSelf: "center",
  },

  languageText: {
    fontSize: 16,
    justifyContent: "center",
    color: "##838c95",
    alignItems: "center",
  },
  languages: {
    flexDirection: "column",

    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontSize: 15,
    textAlign: "center",
    marginTop: 20,
    marginBottom: 15,
  },
  box: {
    display: "flex",
    flexDirection: "row",
    textAlign: "center",
    borderWidth: 1,
    borderColor: "#4B505066",
    borderRadius: 8,

    width: 52,
    height: 56,
  },
  button: {
    marginLeft: 165,
    marginTop: 34,
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
  button2: {
    marginLeft: 165,
    marginTop: 5,

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
  goToSummaryButton: {
    alignSelf: "center",
    marginTop: 32,
    width: "80%",
  },
  resendCode: {
    alignSelf: "center",
    marginTop: 16,
    width: "80%",
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

  buttonContent: {
    borderWidth: 0.6,
    borderColor: "#4B5050",
    backgroundColor: "#4B5050",
    borderRadius: 8,

    height: 48,
    width: "100%",
    justifyContent: "center",
    flexDirection: "row",
  },
});

export default InventoryManagement;
