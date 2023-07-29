import { AntDesign } from "@expo/vector-icons";
import React, { useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Button,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from "react-native";

function CreateAccount({ navigation }) {
  const et1 = useRef();
  const et2 = useRef();
  const et3 = useRef();
  const et4 = useRef();
  return (
    <>
      <View style={styles.container}>
      <View
          style={{
            position: "absolute",
            right: 0,
            top: 76,
          }}
        >
          <Image
            source={require("../../src/Images/Watermark.png")}
            
            style={{
              width: 36,
              height: 50,
            }}
          />
        </View>

        <Image
          source={require("../../src/Images/payrowLogo.png")}
          style={styles.logo}
        />
        <Text
          style={{
            marginTop: 30.47,
            fontSize: 18,
            fontWeight: "400",
            lineHeight: 28,
            color:"#333333",
            alignSelf: "center",
          }}
        >
          Enter Authentication Code
        </Text>
        {/* <View
          style={{
            width: "100%",
            height: 20,
            marginTop: 6,

            alignSelf: "center",
          }}
        >
          <Text style={{ alignSelf: "center", color: "#666666" }}>
            SMS code sent to verify phone number 
          </Text> 
        </View> */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginLeft: 52,
            marginRight: 52,
            marginTop: 24,
          }}
        >
          <TextInput
            secureTextEntry={true}
            ref={et1}
            style={styles.box}
            keyboardType="number-pad"
            maxLength={1}
            onChangeText={(text) => {
              if (text.length >= 1) {
                et2.current.focus();
              }
            }}
          />
          <TextInput
            secureTextEntry={true}
            ref={et2}
            style={styles.box}
            keyboardType="number-pad"
            maxLength={1}
            onChangeText={(text) => {
              if (text.length >= 1) {
                et3.current.focus();
              } else if (text.length < 1) {
                et1.current.focus();
              }
            }}
          />
          <TextInput
            secureTextEntry={true}
            ref={et3}
            style={styles.box}
            keyboardType="number-pad"
            maxLength={1}
            onChangeText={(text) => {
              if (text.length >= 1) {
                et4.current.focus();
              } else if (text.length < 1) {
                et2.current.focus();
              }
            }}
          />
          <TextInput
            secureTextEntry={true}
            ref={et4}
            style={styles.box}
            keyboardType="number-pad"
            maxLength={1}
            onChangeText={(text) => {
              if (text.length < 1) {
                et3.current.focus();
              } else {
                Keyboard.dismiss();
              }
            }}
          />
        </View>
        <TouchableOpacity
          style={styles.goToSummaryButton}
          onPress={() => {
            navigation.navigate("AddItem");
          }}
        >
          <View style={styles.buttonContent}>
            <Text
              style={styles.buttonText}
              onPress={() => {
                navigation.navigate("CreatePin");
              }}
            >
              SUBMIT
            </Text>
            <View style={styles.arrowIcon}>
              <AntDesign name="arrowright" size={22} color="white" />
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.resendCode}
          onPress={() => {
            navigation.navigate("");
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
                Send code
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
                  <AntDesign name="right" size={16} color="#4C4C4C" />
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
      <View
          style={{
            position: "absolute",
            right: 0,
            top: 76,
            zIndex:999,
          }}
        >
          <Image
            source={require("../../src/Images/Watermark_grey.png")}
            
            style={{
              width: 36,
              height: 50,
            }}
          />
        </View>

        {/* <LinearGradient
          colors={["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 1)"]}
        > */}

        <LinearGradient colors={["#231123", "#558C8C"]} style={styles.gradient}>
          <View>
            <View style={{ marginTop: 30, alignSelf: "center" }}>
              <ImageBackground
                source={require("../home/HomeComponents/design.png")}
                style={{
                  width: 220,
                  height: 154,
                  alignSelf: "center",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 57,
                    lineHeight: 64,
                    fontWeight: "700",
                    color: "#fff",
                  }}
                >
                  Hello!
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    lineHeight: 20,
                    fontWeight: "400",
                    color: "#fff",
                  }}
                >
                  Sign in to your account
                </Text>
              </ImageBackground>
            </View>
          </View>
        </LinearGradient>
        {/* </LinearGradient> */}

        <View
          style={{
            position: "relative",
            backgroundColor: "#fff",
            top: -80,
            zIndex: 999,
            borderWidth: 1,
            borderColor: "#CCCCCC",
            marginLeft: 32,
            marginRight: 32,

            paddingTop: 24,
            paddingBottom: 29,
            paddingLeft: 16,
            paddingRight: 16,
            borderRadius: 8,
            marginBottom: 11,
          }}
        >
          <View
            style={{
              display: "flex",
              alignSelf: "center",
            }}
          >
            <Image
              style={{
                width: 150,
                height: 48.3,
              }}
              source={require("../home/HomeComponents/payrowLogo.png")}
            />
          </View>

          <View style={{ alignSelf: "center", marginTop: 24, width: "100%" }}>
            <Text
              style={{
                fontSize: 12,
                lineHeight: 12,
                fontWeight: "400",
                color: "#4B5050",
                // width: 296,
                height: 13,
              }}
            >
              Merchant TID
            </Text>

            <TextInput
              style={{
                fontWeight: "400",
                fontSize: 16,
                opacity: 0.7,

                borderBottomWidth: 1,
              }}
              placeholder="  Amount"
            >
              TID Number
            </TextInput>
          </View>

          <View
            style={{
              alignSelf: "center",
              marginTop: 28,
              borderBottomColor: "#333333",
              borderBottomWidth: 1,
              width: "100%",
            }}
          >
            <Text
              style={{
                fontSize: 12,
                lineHeight: 12,
                fontWeight: "400",
                color: "#4B5050",
                // width: 296,
                height: 16,
              }}
            >
              Phone Number
            </Text>
            <View style={{ flexDirection: "row" }}>
              <View style={{ alignItems: "center", flexDirection: "row" }}>
                <Image
                  source={require("./UAE.png")}
                  style={{
                    width: 18,
                    height: 18,
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
              </View>
              <TextInput
                style={{
                  color: "black",
                  fontWeight: "400",
                  fontSize: 16,
                  width: 37,
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
                  fontWeight: "400",
                  fontSize: 16,
                  width: 81,
                  height: 24,
                  opacity: 0.7,

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

                // width: 296,
                height: 1,
                opacity: 1,
                alignSelf: "center",
              }}
            />
          </View>
          <View style={{ marginTop: 35 }}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                navigation.navigate("Create Account");
              }}
            >
              <View
                style={{
                  borderWidth: 1,

                  borderColor: "#4B5050",
                  backgroundColor: "#4B5050",
                  borderRadius: 8,

                  // width: 328,
                  width: "100%",
                  height: 48,
                  justifyContent: "center",
                }}
              >
                <View style={{ flexDirection: "row", maxWidth: "100%" }}>
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
                    SIGN IN
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
          </View>
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: "#CCCCCC",
            marginLeft: 32,
            marginRight: 32,
            marginTop: -80,
            paddingTop: 19,
            paddingBottom: 19,
            paddingLeft: 16,
            paddingRight: 16,
            borderRadius: 8,
            marginBottom: 11,
          }}
        >
          <View style={{ marginBottom: 16 }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("");
              }}
              style={{
                borderWidth: 1,
                borderColor: "#4B505040",
                borderRadius: 9,

                width: "100%",
                height: 44,
                alignSelf: "center",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "500",
                  flex: 1,

                  color: "#4B5050",
                  lineHeight: 20,

                  marginLeft: 16,
                }}
              >
                Forgot TID?
              </Text>
              <AntDesign
                name="right"
                size={15}
                style={{
                  width: 20, // Set the desired width
                  height: 20, // Set the desired height
                  fontWeight: "bold", // Set the desired font weight (bold)
                  marginRight: 8,
                }}
                color="#4B5050E5"
              />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("");
              }}
              style={{
                borderWidth: 1,
                borderColor: "#4B505040",
                borderRadius: 9,

                width: "100%",
                height: 44,
                alignSelf: "center",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "500",
                  flex: 1,

                  color: "#4B5050",
                  lineHeight: 20,

                  marginLeft: 16,
                }}
              >
                Contact us
              </Text>
              <AntDesign
                name="right"
                size={15}
                style={{
                  width: 20, // Set the desired width
                  height: 20, // Set the desired height
                  fontWeight: "bold", // Set the desired font weight (bold)
                  marginRight: 8,
                }}
                color="#4B5050E5"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
        <Image
          source={require("../../src/Images/getStarted.png")}
          style={{
            width: 312,
            height: 230,
            alignSelf: "center",
            marginTop: 36,
            marginBottom: 16,
          }}
        />

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
    </>
  );
}
const styles = StyleSheet.create({
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

export default CreateAccount;
