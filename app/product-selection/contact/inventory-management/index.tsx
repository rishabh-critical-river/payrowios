import { useRouter } from "expo-router";
import React, { useState } from "react";
import { TextInput } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

function InventoryManagement() {
  const router = useRouter();
  const categories = [
    {
      id: 1,
      name: "Bakery ",
      items: [{ id: 1, name: "Apple", price: 1.09 }],
    },
    {
      id: 2,
      name: "Meat & Poultry & Fish",
      items: [{ id: 1, name: "Tea", price: 1.09 }],
    },
    {
      id: 3,
      name: "Home Bake & Sugar",
      items: [{ id: 1, name: "Chicken", price: 1.09 }],
    },
    // Add more categories as needed
  ];

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
      <View style={styles.container}>
        <View
          style={{
            position: "absolute",
            right: 16,
            top: 30,
          }}
        >
          <TouchableOpacity
          //   onPress={() => router.push("/product-selection/")}
          >
            <Image
              source={require("@/assets/icons/menu.png")}
              style={{
                width: 42,
                height: 40,
              }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginLeft: 32,
            marginTop: 17,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={router.back}>
            <Image
              source={require("@/assets/onboarding/Watermark.png")}
              style={{
                width: 36,
                height: 50,
                marginRight: 9,
              }}
            />
          </TouchableOpacity>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Text
              style={{
                fontSize: 12,
                fontWeight: "400",
                lineHeight: 16,
                letterSpacing: 0.5,
                color: "#4B5050",
              }}
            >
              Welcome
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "500",
                lineHeight: 20,
                letterSpacing: 0.5,
                color: "#4B5050",
              }}
            >
              TID : 3245167
            </Text>
          </View>
        </View>
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
              marginBottom: 52,
            }}
          >
            Inventory Management
          </Text>
        </View>

        <View
          style={{
            alignSelf: "center",
            width: "80%",
          }}
        >
          <TextInput
            placeholder="Search items & Edit"
            style={{
              fontSize: 14,
              height: 40,
              padding: 3,
              paddingLeft: 12,
              borderRadius: 5,
              borderWidth: 1,
              borderColor: "rgba(75, 80, 80, 0.25)",
            }}
          />
          <View
            style={{
              position: "absolute",
              right: 3,
              backgroundColor: "#F5F5F5",
              padding: 9,
              top: 3,
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
          {categories.map((category) => (
            <View key={category.id}>
              <TouchableOpacity
                style={styles.dropDown}
                onPress={() => toggleDropdown(category.id)}
              >
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
                    {category.name}
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
              {openDropdown === category.id && (
                <View>
                  {category.items.map((item) => (
                    <View style={{ marginBottom: 8 }} key={item.id}>
                      <TouchableOpacity
                        style={styles.dropDownoption}
                        onPress={() =>
                          router.push(
                            "/product-selection/contact/inventory-management/inventory-category"
                          )
                        }
                      >
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
                            Bread{" "}
                          </Text>
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
                              source={require("@/assets/icons/keyboard_arrow_right.png")}
                              style={{
                                width: 7.41,
                                height: 12,

                                marginRight: 10.02,
                              }}
                            />
                          </View>
                        </View>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.dropDownoption}>
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
                            Leaves{" "}
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
                      <TouchableOpacity style={styles.dropDownoption}>
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
                            Roots{" "}
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
                    </View>
                  ))}
                </View>
              )}
            </View>
          ))}
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
  dropDownoption: {
    width: "80%",
    paddingBottom: 13,
    paddingTop: 15,
    borderRadius: 10,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(75, 80, 80, 0.25)",
    alignSelf: "center",

    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 15,
    paddingRight: 15,
    // shadowColor: "#757e6e",
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.08,
    // shadowRadius: 3,
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
