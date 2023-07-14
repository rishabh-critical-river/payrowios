import React, { useRef, useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  SafeAreaView,
  ScrollView,
  Image,
  Button,
  TouchableOpacity,
  Modal,
} from "react-native";
import axios from "axios";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { Avatar } from "react-native-elements";
import { BarCodeScanner } from "expo-barcode-scanner";
import PaymentSummary from "./PaymentSummary";
const countries = [
  { country: "Stems", code: "93", iso: "AF" },
  { country: "Leaves", code: "355", iso: "AL" },
  { country: "Roots", code: "213", iso: "DZ" },
  { country: "Seeds", code: "1-684", iso: "AS" },
];
const categories = [
  {
    name: "Fruits & Vegetables",
    items: [
      { name: "Apple", price: 1.99 },
      { name: "Banana", price: 0.99 },
      { name: "Carrot", price: 0.49 },
    ],
  },
  {
    name: "Meat",
    items: [
      { name: "Chicken", price: 4.99 },
      { name: "Beef", price: 7.99 },
      { name: "Pork", price: 5.99 },
    ],
  },
  // Add more categories as needed
];
function AddItem({ navigation }) {
  const [search, setSearch] = useState("");
  const [clickedFruits, setClickedFruits] = useState(false);
  const [clickedMeat, setClickedMeat] = useState(false);
  const [clickedBakery, setClickedBakery] = useState(false);
  const [clickedSweet, setClickedSweet] = useState(false);
  const [clickedDairy, setClickedDairy] = useState(false);
  const [data, setData] = useState(countries);
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [selectedMeat, setSelectedMeat] = useState([]);
  const [selectedBakery, setSelectedBakery] = useState([]);
  const [selectedSweet, setSelectedSweet] = useState([]);
  const [selectedDairy, setSelectedDairy] = useState([]);
  const [itemCount, setItemCount] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]);
  const [hasPermission, setHasPermission] = useState(null);
  const [scannedData, setScannedData] = useState(null);
  const [isScannerVisible, setIsScannerVisible] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);
  const apiUrl =
    "https://payrowdev.uaenorth.cloudapp.azure.com/gateway/payrow/getQrCodeOrderDetails/000000024279";
  const fetchOrderDetails = async () => {
    try {
      const response = await axios.get(apiUrl, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic3RvcmUgb3duZXIiLCJpZCI6IjY0MTE1NGQwZWU2ZTMxNzdkNTZmM2UyNSIsInVzZXJJZCI6IlBSTUlENjgiLCJmaXJzdE5hbWUiOiJTdXByaXlhIiwibGFzdE5hbWUiOiJNIiwibWVyY2hhbnRJZCI6IlBSTUlENjgiLCJyZXBvcnRpbmdJRCI6IlBSTUlENjgiLCJzdG9yZUlkIjoiT3duZXIiLCJjb3VudHJ5IjoiSW5kaWEiLCJkaXN0cmlidXRvcklkIjoiZGlkNDE0NDYzIiwibW9iaWxlTnVtYmVyIjo5NzE5NDkwNzgxNzE2LCJlbWFpbElkIjoibWVyZ3Uuc3Vwcml5YUBjcml0aWNhbHJpdmVyLmNvbSIsImFkZHJlc3NEZXRhaWxzIjoiYXNkYWRhZCIsImJ1c2luZXNzVHlwZSI6Ikdyb2NlcnkgU3RvcmUiLCJib0JveCI6MTIzNDUsImlhdCI6MTY3OTM4MDQ4NH0.K8JV_tPcEcrMkIEXhKzFlVcWhNXkyokUcGPTmV2Ia0o",
        },
      });

      setOrderDetails(response.data);

      // Log the response data
      console.log("Response:", response.data);
    } catch (error) {
      console.error(error);
    }
  };
  console.log(orderDetails, "orderDetails");
  const handleBarCodeScanned = ({ data }) => {
    setScannedData(data);
    setIsScannerVisible(false);
    fetchOrderDetails();
  };

  const handleOpenScanner = () => {
    setIsScannerVisible(true);
  };

  const handleCloseScanner = () => {
    setIsScannerVisible(false);
    setScannedData(null);
  };
  if (hasPermission === null) {
    return <Text>Requesting camera permission...</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera.</Text>;
  }
  const handleCategoryPress = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(category);
    }
  };

  const handleItemPress = (item) => {
    const updatedItems = [...selectedItems];
    const itemIndex = updatedItems.findIndex(
      (selectedItem) => selectedItem.name === item.name
    );

    if (itemIndex === -1) {
      updatedItems.push(item);
    } else {
      updatedItems.splice(itemIndex, 1);
    }

    setSelectedItems(updatedItems);
  };
  return (
    <>
      <View style={{ display: "flex", flex: 1, backgroundColor: "white" }}>
        <View>
          <Modal visible={isScannerVisible} animationType="slide">
            <View style={{ flex: 1 }}>
              <BarCodeScanner
                onBarCodeScanned={handleBarCodeScanned}
                style={{
                  width: "50%",
                  height: "50%",
                }}
              />
              <Button title="Close Scanner" onPress={handleCloseScanner} />
            </View>
          </Modal>
        </View>
        <Text>{scannedData}</Text>

        {orderDetails ? (
          <Button
            title="Go to Payment Summary"
            onPress={() =>
              navigation.navigate("paymentSummary", { orderDetails })
            }
          />
        ) : (
          <Text>No order details available</Text>
        )}

        <View
          style={{
            marginLeft: 19.98,
            marginTop: 17,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image
            source={require("./arrow_back.png")}
            style={{
              width: 16.03,
              height: 16.03,
              marginRight: 35.98,
            }}
          />
          <View>
            <Text>Welcome</Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "500",
              }}
            >
              TID : 8327162
            </Text>
          </View>
        </View>
        <Text
          style={{
            textAlign: "center",
            fontWeight: "400",
            fontSize: 22,
            marginTop: 20,
          }}
        >
          Select Product
        </Text>
        <Text style={{ textAlign: "center", marginTop: 8 }}>
          You can Select multiple item
        </Text>
        <View
          style={{
            width: 299,
            height: 48,
            backgroundColor: "#4B5050",
            alignSelf: "center",
            borderRadius: 8,
            marginTop: 20,
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Button
            style={{
              color: "white",
              fontSize: 16,
              fontWeight: "500",
              marginLeft: 16,
            }}
            onPress={handleOpenScanner}
            title="SCAN TO ADD"
          >
            <Text
              style={{
                color: "white",
                fontSize: 16,
                fontWeight: "500",
                marginLeft: 16,
              }}
            >
              {" "}
              SCAN TO ADD
            </Text>
          </Button>
          <MaterialCommunityIcons
            style={{ marginRight: 12 }}
            name="barcode-scan"
            size={24}
            color="white"
          />
        </View>

        <View>
          {categories.map((category, index) => (
            <TouchableOpacity
              key={index}
              style={styles.containers}
              onPress={() => handleCategoryPress(category)}
            >
              <Text style={{ fontWeight: "600", flex: 1 }}>
                {category.name}
              </Text>
              {selectedItems.length > 0 && (
                <View style={styles.badge}>
                  <Text style={{ textAlign: "center" }}>
                    {selectedItems.length === 1
                      ? selectedItems.length + " item"
                      : `+${selectedItems.length} items`}
                  </Text>
                </View>
              )}
              <Image
                source={
                  selectedCategory === category
                    ? require("./upload.png")
                    : require("./dropdown.png")
                }
                style={{ width: 16, height: 16 }}
              />
            </TouchableOpacity>
          ))}
          {selectedCategory && (
            <View style={{ marginTop: 20, alignSelf: "center", width: "90%" }}>
              <FlatList
                data={selectedCategory.items}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.itemContainer}
                    onPress={() => handleItemPress(item)}
                  >
                    {/* Render item content */}
                  </TouchableOpacity>
                )}
              />
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
          <Text
            style={{
              fontWeight: "500",
              flex: 1,
              fontSize: 14,
              lineHeight: 20,
              marginLeft: 16,
            }}
          >
            Total Price
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 22, fontWeight: "500", lineHeight: 28 }}>
              600
            </Text>
            <Text style={{ color: "#4B505099", marginRight: 8, marginLeft: 9 }}>
              AED
            </Text>
          </View>
        </View>

        <TouchableOpacity
          style={{ alignSelf: "center", marginTop: 16, width: "80%" }}
          onPress={() => {
            navigation.navigate("paymentSummary");
          }}
        >
          <View
            style={{
              borderWidth: 1,
              borderColor: "#4B5050",
              backgroundColor: "#4B5050",
              borderRadius: 8,
              marginBottom: 16,
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
                GO TO SUMMARY
              </Text>
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: 16,
                }}
              >
                <AntDesign name="arrowright" size={22} color="white" />
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
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  containers: {
    width: "85%",
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

  logo: {
    width: 150,
    height: 48.3,
    alignSelf: "center",
    marginTop: 33,
  },
  languageLogo: {
    width: 40,
    height: 40,
    marginLeft: 170,
    marginTop: 30,
  },
  homeBlocks: {
    fontSize: 14,
    fontWeight: "500",
    flex: 1,
    marginTop: 14,

    color: "#4B5050",
    lineHeight: 20,

    marginLeft: 16,
  },
  homeElements: {
    marginTop: 24,

    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    maxHeight: 448,
  },
  text: {
    fontSize: 15,
    fontWeight: "500",
    color: "#838c95",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 15,
  },
  box: {
    borderWidth: 1,
    borderColor: "#4B505040",
    borderRadius: 9,
    marginBottom: 16,
    width: 296,
    height: 48,
    textAlign: "center",
    flexDirection: "row",
  },
  button: {
    marginLeft: 165,

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
});

export default AddItem;
