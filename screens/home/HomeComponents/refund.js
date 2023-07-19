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
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

function Refund({ navigation }) {
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
            Refund
          </Text>
        </View>
        <Image
          source={require("../../../src/Images/payrowLogo.png")}
          style={styles.logo}
        />
        <Text
          style={{
            fontSize: 16,
            fontWeight: "500",
            lineHeight: 24,
            textAlign: "center",
            marginTop: 24,
            color: "#4B5050",
          }}
        >
          Please enter the transaction number
        </Text>
        <View style={{ alignSelf: "center", marginTop: 28 }}>
          <Text
            style={{
              marginBottom: 5,
              fontSize: 12,
              color: "#4B5050",
              fontWeight: "400",
            }}
          >
            Transaction Number
          </Text>
          <TextInput
            style={{
              color: "black",
              fontWeight: "400",
              fontSize: 20,

              opacity: 0.7,
              marginBottom: 4,
            }}
            placeholder="  Amount"
          >
            SE192231485
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
          Select Reason
        </Text>
        <TouchableOpacity
          style={{
            width: 296,
            height: 48,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "rgba(117, 126, 110, 0.4)",
            alignSelf: "center",
            marginTop: 16,
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
          }}
        >
          <Text style={{ fontWeight: "600", flex: 1 }}>Wrong Product</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 296,
            height: 48,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "rgba(117, 126, 110, 0.4)",
            alignSelf: "center",
            marginTop: 16,
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
          }}
        >
          <Text style={{ fontWeight: "600", flex: 1 }}>Product Damaged</Text>
          <View>
            <MaterialCommunityIcons
              name="checkbox-marked-circle"
              size={20}
              color="#4B5050E5"
              style={{ marginRight: 10 }}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 296,
            height: 48,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "rgba(117, 126, 110, 0.4)",
            alignSelf: "center",
            marginTop: 16,
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
          }}
        >
          <Text style={{ fontWeight: "600", flex: 1 }}>Product Not Needed</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 296,
            height: 48,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "rgba(117, 126, 110, 0.4)",
            alignSelf: "center",
            marginTop: 16,
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
          }}
        >
          <Text style={{ fontWeight: "600", flex: 1 }}>Expired Product</Text>
        </TouchableOpacity>
      </View>
      <View style={{ backgroundColor: "white" }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("otpRefund");
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
                SUBMIT
              </Text>
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: 16,
                }}
              >
                <AntDesign name="arrowright" size={20} color="white" />
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

export default Refund;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  logo: {
    width: 150,
    height: 48.3,
    alignSelf: "center",
    marginTop: 32,
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
