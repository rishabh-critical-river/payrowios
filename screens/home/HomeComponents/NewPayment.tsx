import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  Button,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
function NewPayment({ navigation }: any) {
  return (
    <>
      <View style={styles.container}>
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
            }}
          >
            Tap to Pay
          </Text>
        </View>
        <Image
          source={require("./fab.png")}
          style={{
            width: 137.41,
            height: 80,
            alignSelf: "center",
          }}
        />
        <Text
          style={{
            fontSize: 22,
            fontWeight: "400",
            lineHeight: 28,
            textAlign: "center",
            marginTop: 10,
          }}
        >
          Textiles INC.
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: "400",
            lineHeight: 20,
            textAlign: "center",
            letterSpacing: 0.25,
            marginTop: 6,
            color: "#4B5050B2",
          }}
        >
          You are about to make a payment to this
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: "400",
            lineHeight: 20,
            textAlign: "center",
            letterSpacing: 0.25,

            color: "#4B5050B2",
          }}
        >
          company
        </Text>
        <View
          style={{
            borderWidth: 1,
            borderColor: "#4B50500D",
            borderRadius: 8,
            marginTop: 16,
            width: 133,
            height: 30,
            alignSelf: "center",

            backgroundColor: "#4B50500D",
          }}
        >
          <Text
            style={{
              alignSelf: "center",
              marginTop: 6,
              fontWeight: "500",
              fontSize: 13,
              lineHeight: 18,
              letterSpacing: -0.08,
              color: "#4B5050",
            }}
          >
            MID: 0987654321
          </Text>
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: "#4B505040",

            shadowColor: "#757E6E14",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            borderRadius: 8,
            marginTop: 24,
            width: 296,
            height: 48,
            alignSelf: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("AddItem");
            }}
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                flex: 1,
                marginLeft: 16,
                marginTop: 14,
                fontWeight: "500",
                fontSize: 14,
                lineHeight: 20,
                letterSpacing: 0.1,
                color: "#4B5050",
              }}
            >
              ADD ITEMS
            </Text>
            <View
              style={{
                marginTop: 15,
                backgroundColor: "#4B50500D",
                width: 71,
                height: 20,
                borderRadius: 10,
                marginRight: 16,
                alignItems: "center",
              }}
            >
              <Text> +1 items</Text>
            </View>
            <Image
              source={require("./plusicon.png")}
              style={{
                width: 20,
                height: 20,
                marginRight: 16,
                marginTop: 15,
                backgroundColor: "#4B5050E5",
                borderRadius: 10,
              }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: "#4B505040",

            shadowColor: "#757E6E14",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            borderRadius: 8,
            marginTop: 16,
            width: 296,
            height: 48,
            alignSelf: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Text
              style={{
                flex: 1,
                marginLeft: 16,
                marginTop: 14,
                fontWeight: "500",
                fontSize: 14,
                lineHeight: 20,
                letterSpacing: 0.1,
                color: "#4B5050",
              }}
            >
              SCAN BARCODE
            </Text>
            <Image
              source={require("./Union.png")}
              style={{
                width: 24,
                height: 24,
                marginRight: 16,
                marginTop: 12,
              }}
            />
          </View>
        </View>

        <Image
          source={require("./hrline.png")}
          style={{
            width: 296,
            alignSelf: "center",
            marginTop: 32,
          }}
        />
      </View>
      <View style={{ backgroundColor: "white" }}>
        <Text
          style={{
            alignSelf: "center",
            marginTop: 32,
            fontWeight: "400",
            fontSize: 14,
            lineHeight: 20,
            letterSpacing: 0.25,
            color: "#4B5050",
          }}
        >
          Add amount to pay
        </Text>

        <View style={{ alignSelf: "center", marginTop: 49 }}>
          <Text
            style={{
              marginBottom: 5,
              fontSize: 12,
              color: "#4B5050",
              fontWeight: "400",
            }}
          >
            Amount
          </Text>
          <TextInput
            keyboardType="number-pad"
            style={{
              color: "black",
              fontWeight: "400",
              fontSize: 20,

              opacity: 0.7,
              marginBottom: 4,
            }}
            placeholder="  Amount"
          >
            20
          </TextInput>
          <View
            //horizontal line
            style={{
              backgroundColor: "#4B505099",

              width: 296,
              height: 1.5,
              opacity: 0.7,
              alignSelf: "center",
              marginBottom: 26.4,
            }}
          />
        </View>

        <View style={{ backgroundColor: "white" }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate("TapCard");
            }}
          >
            <View
              style={{
                borderWidth: 1,

                borderColor: "#4B5050",
                backgroundColor: "#4B5050",
                borderRadius: 8,
                marginBottom: 16,
                width: 296,
                height: 52,
                justifyContent: "center",
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <View style={{ marginLeft: 16, paddingTop: 6 }}>
                  <View
                    style={{
                      borderWidth: 1,
                      borderColor: "#8EBD6C",

                      width: 14,
                      height: 3.61,

                      backgroundColor: "#8EBD6C",
                      marginBottom: 2.58,
                    }}
                  />
                  <View
                    style={{
                      borderWidth: 1,
                      borderColor: "#8EBD6C",

                      width: 14,
                      height: 3.61,

                      marginBottom: 2.58,
                      backgroundColor: "#8EBD6C",
                    }}
                  />
                  <View
                    style={{
                      borderWidth: 1,
                      borderColor: "#8EBD6C",

                      width: 14,
                      height: 3.61,

                      backgroundColor: "#8EBD6C",
                    }}
                  />
                </View>
                <Text
                  style={{
                    fontSize: 22,
                    paddingLeft: 4,
                    fontWeight: "400",
                    lineHeight: 28,
                    justifyContent: "center",
                    color: "white",
                    letterSpacing: 0.1,
                    flex: 1,
                  }}
                >
                  Pay
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
      </View>
    </>
  );
}

export default NewPayment;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
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

    padding: 10,

    height: 60,
    width: 60,

    justifyContent: "center",
    alignItems: "center",
  },
});
