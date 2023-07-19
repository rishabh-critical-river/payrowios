import React, { useRef, useState, useEffect } from "react";
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
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { BarCodeScanner } from "expo-barcode-scanner";
import axios from "axios";
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
    return <Text>No access to the camera.</Text>;
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
                style={{ width: "50%", height: "50%" }}
              />
              <Button title="Close Scanner" onPress={handleCloseScanner} />
            </View>
          </Modal>
        </View>

        {orderDetails
          ? navigation.navigate("paymentSummary", { orderDetails })
          : navigation.navigate("AddItem")}

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
            <Text style={{ fontSize: 14, fontWeight: "500" }}>
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
          You can Select multiple items
        </Text>
        <View style={styles.buttonContainer}>
          <Button
            title="SCAN TO ADD"
            onPress={handleOpenScanner}
            color="white"
          />
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
            <View style={{ marginTop: 20, alignSelf: "center", width: "80%" }}>
              <FlatList
                data={selectedCategory.items}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.itemContainer}
                    onPress={() => handleItemPress(item)}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                      }}
                    >
                      <View
                        style={{ flex: 1, flexDirection: "row", marginTop: 6 }}
                      >
                        <Image
                          style={{ width: 58, height: 55, marginLeft: 14 }}
                          source={require("./ellipse.png")}
                        />
                        <View
                          style={{
                            flexDirection: "column",
                            marginLeft: 11,
                          }}
                        >
                          <Text
                            style={{
                              marginBottom: 17,
                              color: "#4B5050",
                              fontSize: 14,
                              fontWeight: "500",
                            }}
                          >
                            {item.price} AED
                          </Text>
                          <Text
                            style={{
                              color: "#4B5050",
                              fontSize: 12,
                              fontWeight: "400",
                            }}
                          >
                            {item.name}
                          </Text>
                        </View>
                      </View>
                      <View>
                        <View
                          style={{
                            flexDirection: "row",
                            marginBottom: 14,
                            marginTop: 6,
                          }}
                        >
                          <Image
                            style={{
                              width: 20,
                              height: 20,
                            }}
                            source={require("./plusicon.png")}
                          />

                          <Text style={{ marginLeft: 15 }}>1</Text>

                          <Image
                            style={{
                              width: 20,
                              height: 20,
                              marginRight: 15,
                              marginLeft: 15,
                            }}
                            source={require("./plusicon.png")}
                          />
                        </View>
                        <View style={{ flexDirection: "row" }}>
                          <Text
                            style={{
                              color: "#4B5050",
                              fontWeight: "500",
                              fontSize: 10,
                              letterSpacing: 0.1,
                              marginTop: 2,
                            }}
                          >
                            TOTAL
                          </Text>
                          <Text
                            style={{
                              color: "#4B5050",
                              fontWeight: "500",
                              fontSize: 12,
                              letterSpacing: 0.1,
                              marginRight: 15,
                            }}
                          >
                            {" "}
                            {item.price} AED
                          </Text>
                        </View>
                      </View>
                    </View>

                    {/* You can add additional item content here */}
                  </TouchableOpacity>
                )}
              />
            </View>
          )}
        </View>
      </View>

      <View style={{ backgroundColor: "white" }}>
        <View style={styles.priceContainer}>
          <Text style={styles.priceLabel}>Total Price</Text>
          <View style={styles.priceTextContainer}>
            <Text style={styles.priceText}>600</Text>
            <Text style={styles.priceCurrency}>AED</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.goToSummaryButton}
          onPress={() => {
            navigation.navigate("paymentSummary");
          }}
        >
          <View style={styles.buttonContent}>
            <Text style={styles.buttonText}>GO TO SUMMARY</Text>
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
}

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
    marginRight: 8,
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

export default AddItem;
