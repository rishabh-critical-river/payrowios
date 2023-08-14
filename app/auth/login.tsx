import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  ScrollView,
  Button,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import PayRowLogo from "@/components/logo";
import { useRouter } from "expo-router";
import useCheckDevice from "@/apis/hooks/use-check-device";
import PanelView from "@/components/view/PanelView";
import Modal from "react-native-modal";

function Login({ navigation }: any) {
  const router = useRouter();
  const { state, isValid, onChangeState, onCheckDevice } = useCheckDevice();
  console.log(state);

  const onCreateAccount = React.useCallback(() => {
    router.push({
      pathname: "/auth/create-account",
      params: {
        tid: state.tid,
        mobileNumber: state.mobileNumber,
      },
    });
  }, [state.tid, state.mobileNumber]);

  return (
    <ScrollView>
      <Modal
        isVisible={state.alert}
        style={{
          justifyContent: "center",
          margin: 0,
          padding: 16,
        }}
        onBackdropPress={() => onChangeState("alert", false)}
      >
        <View
          style={{
            borderRadius: 8,
            backgroundColor: "white",
            padding: 16,
          }}
        >
          <View
            style={
              {
                // marginBottom: 20,
              }
            }
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "500",
                lineHeight: 28,
                color: "#333333",
              }}
            >
              Account Exist
            </Text>
          </View>
          <View
            style={{
              marginBottom: 20,
            }}
          >
            <Text
              style={{
                fontSize: 13,
                fontWeight: "400",
                lineHeight: 20,
                color: "#333333",
              }}
            >
              TID and phone number are already registered on another device .If
              you click continue,you will be logout from the previous device and
              login here .{" "}
            </Text>
          </View>
          <View style={{ flexDirection: "column", gap: 16 }}>
            <Button title="Continue" onPress={onCreateAccount} />
            <Button
              title="Cancle"
              onPress={() => onChangeState("alert", false)}
            />
          </View>
        </View>
      </Modal>

      <View style={styles.container}>
        <View
          style={{
            position: "absolute",
            right: 0,
            top: 76,
            zIndex: 999,
          }}
        >
          <Image
            source={require("@/assets/onboarding/Watermark_grey.png")}
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
                source={require("@/assets/onboarding/design.png")}
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
            <PayRowLogo />
          </View>

          <View style={{ alignSelf: "center", marginTop: 24, width: "100%" }}>
            <Text
              style={{
                fontSize: 12,
                lineHeight: 12,
                fontWeight: "400",
                color: "#4B5050",
                height: 13,
              }}
            >
              Merchant TID
            </Text>
            <TextInput
              style={{
                opacity: 0.7,
                fontSize: 16,
                fontWeight: "400",
                borderBottomWidth: 1,
              }}
              placeholder="TID Number"
              keyboardType="numeric"
              maxLength={6}
              onChangeText={(value) => onChangeState("tid", value)}
              value={state.tid}
            />
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
                  source={require("@/assets/onboarding/UAE.png")}
                  style={{
                    width: 18,
                    height: 18,
                    marginRight: 4,
                  }}
                />
                <Image
                  source={require("@/assets/onboarding/IconPlacholder.png")}
                  style={{
                    width: 20,
                    height: 20,
                    marginRight: 4,
                  }}
                />
              </View>
              <TextInput
                editable={false}
                style={{
                  color: "black",
                  fontWeight: "400",
                  fontSize: 16,

                  height: 24,
                  opacity: 0.7,
                  marginRight: 4,
                  // width: '100%',
                }}
                // placeholder="Amount"
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
                placeholder="Amount"
                keyboardType="numeric"
                maxLength={10}
                value={state.mobileNumber}
                onChangeText={(value) => onChangeState("mobileNumber", value)}
              ></TextInput>
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
              // onPress={() => {
              //   // navigation.navigate('Create Account');
              //   router.push('/auth/create-account');
              // }}
              onPress={onCheckDevice}
              disabled={!isValid}
            >
              <View
                style={{
                  borderWidth: 1,
                  borderColor: "#4B5050",
                  backgroundColor: "#4B5050",
                  borderRadius: 8,
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

        {/* <TouchableOpacity
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
              marginBottom: 16,
              width: 328,
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
        </TouchableOpacity> */}
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
    </ScrollView>
  );
}

export default Login;
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "white",
  },
  gradient: {
    width: "100%",
    height: 268,
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
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

    // padding: 10,
    fontSize: 20,
    height: 48,
    width: "100%",
    // width: 296,
    cursor: "pointer",
    borderRadius: 70,
    justifyContent: "center",
    alignItems: "center",
    // marginBottom: 15,
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
