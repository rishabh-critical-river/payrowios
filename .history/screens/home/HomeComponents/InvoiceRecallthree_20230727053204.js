import React, { useState } from "react";
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
} from "react-native";
import Modal from "react-native-modal";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { Avatar } from "react-native-elements";
const countries = [{ country: "TRANSACTION ID" }, { country: "BY DATE" }];
import { Entypo } from "@expo/vector-icons";
function InvoiceRecallthree({ navigation }) {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <>
      <ScrollView style={{ backgroundColor: "white" }}>
        <View style={{ display: "flex", flex: 1, backgroundColor: "white" }}>
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
            <Text
              style={{
                fontSize: 20,
                fontWeight: "500",
                lineHeight: 32,
                letterSpacing: 0.5,
                color: "#4B5050",
              }}
            >
              Invoice
            </Text>
          </View>
          <Image
            style={{
              width: 150,
              height: 48.3,
              alignSelf: "center",
              marginTop: 24,
            }}
            source={require("./payrowLogo.png")}
          />
          <Text
            style={{
              textAlign: "center",
              fontWeight: "400",
              fontSize: 22,
              marginTop: 10,
              color: "#333333",
              marginBottom: 6,
              lineHeight: 28,
            }}
          >
            Textiles Inc.
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontWeight: "400",
              fontSize: 14,
              marginBottom: 12,
              lineHeight: 20,

              color: "#4B5050B2",
            }}
          >
            Location details & PO Box
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginLeft: 32,
              marginRight: 32,
              color: "#4B5050B2",
              fontWeight: "400",
              fontSize: 12,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 12,
              }}
            >
              <Text style={{ color: "#4B5050B2" }}>Date:</Text>
              <Text style={{ color: "#4B5050B2" }}>24/08/2023</Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 12,
              }}
            >
              <Text style={{ color: "#4B5050B2" }}>Time:</Text>
              <Text style={{ color: "#4B5050B2" }}>24-08-23</Text>
            </View>
          </View>
          <Text
            style={{
              textAlign: "center",
              fontWeight: "500",
              fontSize: 16,
              marginTop: 16,
              color: "#4B5050",
              marginBottom: 16,
            }}
          >
            Transaction Successful
          </Text>
          <View style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginLeft: 32,
                marginRight: 32,
                color: "#4B5050",
                fontWeight: "400",
                fontSize: 12,
              }}
            >
              <Text style={{ color: "#4B5050B2" }}>Merchant#</Text>

              <Text style={{ color: "#4B5050B2" }}>003125403</Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginLeft: 32,
                marginRight: 32,
                color: "#4B5050",
                fontWeight: "400",
                fontSize: 12,
              }}
            >
              <Text style={{ color: "#4B5050B2" }}>Terminal 3</Text>

              <Text style={{ color: "#4B5050B2" }}>11016524</Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginLeft: 32,
                marginRight: 32,
                color: "#4B5050",
                fontWeight: "400",
                fontSize: 12,
              }}
            >
              <Text style={{ color: "#4B5050B2" }}>Sequence</Text>

              <Text style={{ color: "#4B5050B2" }}>1426</Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginLeft: 32,
                marginRight: 32,
                color: "#4B5050",
                fontWeight: "400",
                fontSize: 12,
              }}
            >
              <Text style={{ color: "#4B5050B2" }}>InvoiceNumber</Text>

              <Text style={{ color: "#4B5050B2" }}>54321</Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginLeft: 32,
                marginRight: 32,
                color: "#4B5050",
                fontWeight: "400",
                fontSize: 12,
              }}
            >
              <Text style={{ color: "#4B5050B2" }}>Branch:</Text>

              <Text style={{ color: "#4B5050B2" }}>1234</Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginLeft: 32,
                marginRight: 32,
                color: "#4B5050",
                fontWeight: "400",
                fontSize: 12,
              }}
            >
              <Text style={{ color: "#4B5050B2" }}>Visa</Text>

              <Text style={{ color: "#4B5050B2" }}></Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginLeft: 32,
                marginRight: 32,
                color: "#4B5050",
                fontWeight: "400",
                fontSize: 12,
              }}
            >
              <Text style={{ color: "#4B5050B2" }}>**** **** **** 1257</Text>

              <Text style={{ color: "#4B5050B2" }}></Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginLeft: 32,
                marginRight: 32,
                color: "#4B5050",
                fontWeight: "400",
                fontSize: 12,
              }}
            >
              <Text style={{ color: "#4B5050B2" }}>Source: (Q)</Text>

              <Text style={{ color: "#4B5050B2" }}>Expiry XXXX</Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginLeft: 32,
                marginRight: 32,
                color: "#4B5050",
                fontWeight: "400",
                fontSize: 12,
              }}
            >
              <Text style={{ color: "#4B5050B2" }}>Vat #:</Text>

              <Text style={{ color: "#4B5050B2" }}>2849715</Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginLeft: 32,
                marginRight: 32,
                color: "#4B5050",
                fontWeight: "400",
                fontSize: 12,
              }}
            >
              <Text style={{ color: "#4B5050B2" }}>Vat Ammount %5:</Text>

              <Text style={{ color: "#4B5050B2" }}>5.5AED</Text>
            </View>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginLeft: 32,
              marginRight: 32,
              color: "#333333",
              marginTop: 20,
            }}
          >
            <Text
              style={{
                color: "#333333",
                fontWeight: "500",
                fontSize: 14,
                lineHeight: 20,
              }}
            >
              Amount: AED 250
            </Text>

            <Text
              style={{
                color: "#333333",
                fontWeight: "500",
                fontSize: 14,
                lineHeight: 20,
              }}
            >
              AUTH CODE: 00
            </Text>
          </View>
          <Text
            style={{
              textAlign: "center",
              fontWeight: "500",
              fontSize: 16,
              marginTop: 20,
              color: "#4B5050",
              marginBottom: 32,
              opacity: 0.800000011920929,
            }}
          >
            -- Thank You --
          </Text>
        </View>
      </ScrollView>
      <View style={{ backgroundColor: "white" }}>
        <TouchableOpacity
          style={styles.goToSummaryButton}
          onPress={toggleModal}
        >
          <View style={styles.buttonContent}>
            <Text style={styles.buttonText}>SHARE CUSTOMER COPY </Text>
            <View style={styles.arrowIcon}>
              <Entypo name="share" size={22} color="white" />
            </View>
          </View>
        </TouchableOpacity>
        <Modal
          isVisible={isModalVisible}
          style={{
            justifyContent: "flex-end",
            margin: 0,
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              flex: 0.38,
            }}
          >
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 500,
                  lineHeight: 24,
                  color: "#4B5050",
                  marginLeft: 32,
                  marginTop: 28,
                }}
              >
                Share Customer Copy
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginLeft: 30,
                  marginRight: 150,
                  marginTop: 16,
                }}
              >
                <Image
                  source={require("./Active.png")}
                  style={{
                    width: 52,
                    height: 52,
                  }}
                />
                <Image
                  source={require("./Normal1.png")}
                  style={{
                    width: 52,
                    height: 52,
                  }}
                />
                <Image
                  source={require("./Normal2.png")}
                  style={{
                    width: 52,
                    height: 52,
                  }}
                />
              </View>
              <View style={{ marginLeft: 32, marginTop: 22 }}>
                <Text
                  style={{
                    fontSize: 12,
                    lineHeight: 12,
                    fontWeight: "400",
                    color: "#333333",
                    opacity: 0.800000011920929,
                    marginBottom: 7,
                  }}
                >
                  Contact Number
                </Text>
                <View style={{ flexDirection: "row" }}>
                  <Image
                    source={require("./UAE.png")}
                    style={{
                      width: 24,
                      height: 24,
                      marginRight: 4,
                    }}
                  />
                  <Image
                    source={require("./IconPlacholder.png")}
                    style={{
                      width: 20,
                      height: 20,
                      marginRight: 4,
                    }}
                  />
                  <TextInput
                    style={{
                      color: "#4B5050",
                      fontWeight: "500",
                      fontSize: 22,
                      width: 50,
                      height: 24,
                      opacity: 0.7,
                      marginRight: 4,
                    }}
                    placeholder="Amount"
                  >
                    +971
                  </TextInput>

                  <TextInput
                    style={{
                      color: "#4B5050",
                      fontWeight: "500",
                      fontSize: 22,
                      width: 150,
                      height: 24,
                      opacity: 0.7,
                      marginRight: 4,
                      // borderColor: "#99999",
                      // borderBottomWidth: 1,
                    }}
                    placeholder="  Amount"
                  >
                    561503987
                  </TextInput>
                </View>
                <View
                  //horizontal line
                  style={{
                    backgroundColor: "#99999",

                    width: 296,
                    height: 1,
                    opacity: 0.7,
                    alignSelf: "center",
                  }}
                />
              </View>
              <View
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: "#4B5050",
                  width: 310,
                  marginLeft: 32,
                  marginTop: 8,
                }}
              />
            </View>
            <TouchableOpacity
              style={{
                marginLeft: 32,
                marginRight:32,

                // width: "80%",
                marginBottom: 40,
                marginTop: 25,
              }}
              onPress={() => {
                navigation.navigate("ConfirmationInvoice");
                toggleModal();
              }}
            >
              <View style={styles.buttonContent}>
                <Text style={styles.buttonText}>SHARE</Text>
                <View style={styles.arrowIcon}>
                  <AntDesign name="arrowright" size={22} color="white" />
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </Modal>
        <TouchableOpacity
          style={styles.resendCode}
          onPress={() => {
            navigation.navigate("HomeScreen");
          }}
        >
          <View
            style={{
              borderWidth: 0.5,
              borderColor: "#B2B2B2",
              borderRadius: 8,
              backgroundColor: "#FFFFFF",

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
                  color: "#4C4C4C",
                  letterSpacing: 0.1,
                  flex: 1,
                }}
              >
                HOME
              </Text>
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: 16,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <AntDesign name="arrowright" size={24} color="#4C4C4C" />
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 14,
            backgroundColor: "white",
            color: "#7f7f7f",
            textAlign: "center",
            // paddingBottom: 15,
            fontWeight: "400",
            lineHeight: 20,
            letterSpacing: 0.25,
            marginTop: 16,
            paddingBottom:16,
          }}
        >
          ©2022 PayRow Company. All rights reserved
        </Text>
      </View>
    </>
  );
}

export default InvoiceRecallthree;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  modalContainer: {
    flex: 0.5,
    justifyContent: "center",
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 16,
  },
  modalContent: {
    flexGrow: 1,
    justifyContent: "center",
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  phoneNumberInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 16,
    borderRadius: 8,
  },
  submitButton: {
    backgroundColor: "blue",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  submitButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  resendCode: {
    alignSelf: "center",
    marginTop: 16,
    width: "80%",
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
  goToSummaryButton: {
    alignSelf: "center",

    width: "80%",
  },

  logo: {
    width: 150,
    height: 48.3,
    alignSelf: "center",
    marginTop: 32,
  },
  arrowIcon: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
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
    alignSelf: "center",

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
