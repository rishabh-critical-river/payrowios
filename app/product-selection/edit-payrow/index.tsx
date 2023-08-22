import useCreatePin from "@/apis/hooks/use-create-pin";
import PayRowLogo from "@/components/logo";
import OTPInput from "@/components/otp-input";
import useModal from "@/hooks/use-modal";
import useOTPInterval from "@/hooks/use-otp-interval";
import getErrorString from "@/utils/getErrorString";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useCallback, useState } from "react";
import { TextInput } from "react-native";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

function EditPayrow() {
  const router = useRouter();
  //   const { setSnackbarModal } = useModal();
  const categories = [
    {
      id: 1,
      name: "Fruits & Vegetables",
      items: [
        { id: 1, name: "Apple", price: 1.09 },
        { id: 2, name: "Banana", price: 0.39 },
        { id: 3, name: "Carrot", price: 0.49 },
      ],
    },
    {
      id: 2,
      name: "Beverages",
      items: [
        { id: 1, name: "Tea", price: 1.09 },
        { id: 2, name: "Cofee", price: 0.39 },
        { id: 3, name: "SoftDrink  ", price: 0.49 },
      ],
    },
    {
      id: 3,
      name: "Meat & Fish",
      items: [
        { id: 1, name: "Chicken", price: 1.09 },
        { id: 2, name: "Beef", price: 0.39 },
        { id: 3, name: "Fish", price: 0.49 },
      ],
    },
    // Add more categories as needed
  ];

  // const [openDropdown, setOpenDropdown] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [editedItemName, setEditedItemName] = useState("");

  const handleItemNameChange = (event: any) => {
    setEditedItemName(event.target.value);
  };

  const saveEditedItemName = (categoryId: any, itemId: any) => {
    // Update the item name in your data structure here
    // For example, you can find the category and item by their IDs and update the name
  };
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
        <View>
          {categories.map((category) => (
            <View key={category.id}>
              <TouchableOpacity
                style={styles.dropDown}
                onPress={() => toggleDropdown(category.id)}
              >
                <Text>{category.name}</Text>
              </TouchableOpacity>
              {openDropdown === category.id && (
                <View>
                  {category.items.map((item) => (
                    <View style={styles.itemContainer} key={item.id}>
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          marginTop: 12,
                          justifyContent: "space-between",
                        }}
                      >
                        <Text> Add Picture</Text>
                        <Image
                          style={{
                            width: 58,
                            height: 55,
                            marginLeft: 26,
                            marginRight: 20,
                          }}
                          source={require("@/assets/icons/ellipse.png")}
                        />
                        <Text>Edit</Text>
                      </View>

                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          marginTop: 14,
                          gap: 22,
                        }}
                      >
                        <Text>Product Name</Text>
                        <TextInput
                          style={{
                            borderRadius: 5,
                            borderWidth: 1,
                            borderColor: "rgba(75, 80, 80, 0.25)",

                            width: 64,
                            height: 32,
                          }}
                        >
                          {item.name}
                        </TextInput>
                        <Text>Edit</Text>
                      </View>

                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          marginTop: 14,
                          gap: 22,
                        }}
                      >
                        <Text>Product Price</Text>
                        <TextInput
                          keyboardType="numeric"
                          style={{
                            borderRadius: 5,
                            borderWidth: 1,
                            borderColor: "rgba(75, 80, 80, 0.25)",

                            width: 64,
                            height: 32,
                          }}
                        >
                          {item.price}
                        </TextInput>
                        <Text>Edit</Text>
                      </View>
                      <TouchableOpacity
                        style={{
                          width: 64,
                          height: 32,
                          borderRadius: 5,
                          backgroundColor: "#4B5050",
                          marginTop: 20,
                          justifyContent: "center",
                          alignSelf: "flex-end",
                          marginRight: 25,
                          marginBottom: 18,
                        }}
                      >
                        <Text style={{ color: "white", alignSelf: "center" }}>
                          Save
                        </Text>
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
            right: 16,
            top: 20,
          }}
        >
          <TouchableOpacity onPress={() => router.push("/product-selection/")}>
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
  itemContainer: {
    width: "70%",
    alignSelf: "center",

    borderRadius: 10,
    marginBottom: 16,
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

export default EditPayrow;
