import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer, useRoute } from "@react-navigation/native";
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
  FlatList,
} from "react-native";
import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useRouter } from "expo-router";
const data = [
  { time: "Jan", transNo: "0.0", value: "0", status: "Completed" },
  { time: "Feb", transNo: "0.0", value: "0", status: "Pending" },
  { time: "Mar", transNo: "0.0", value: "0", status: "Failed" },
  { time: "Apr", transNo: "0.0", value: "0", status: "Completed" },
  { time: "May", transNo: "0.0", value: "0", status: "Pending" },
  { time: "Jun", transNo: "0.0", value: "0", status: "Failed" },
  { time: "Jul", transNo: "0.0", value: "0", status: "Completed" },
  { time: "Aug", transNo: "0.0", value: "0", status: "Pending" },
  { time: "Sep", transNo: "0.0", value: "0", status: "Failed" },
  { time: "Oct", transNo: "0.0", value: "0", status: "Failed" },
  { time: "Nov", transNo: "0.0", value: "0", status: "Failed" },
  { time: "Dec", transNo: "0.0", value: "0", status: "Failed" },
  // Add more dummy data as needed
];

const ListItem = ({ item, index }) => {
  const rowStyle = index % 2 === 0 ? styles.whiteRow : styles.blackRow;

  return (
    <View style={[styles.rowContainer, rowStyle]}>
      <Text
        style={{
          color: "#4B5050",
          fontWeight: "400",
          lineHeight: 16,
          fontSize: 11,
          alignSelf: "center",
          textAlign: "center",
          width: 63,
        }}
      >
        {item.time}
      </Text>
      <Text
        style={{
          color: "#4B5050",
          fontWeight: "400",
          lineHeight: 16,
          fontSize: 11,
          alignSelf: "center",
          textAlign: "center",
          width: 90,
        }}
      >
        {item.transNo}
      </Text>
      <Text
        style={{
          color: "#4B5050",
          fontWeight: "400",
          lineHeight: 16,
          fontSize: 11,
          alignSelf: "center",
          textAlign: "center",
          width: 67,
        }}
      >
        {item.value}
      </Text>

      <Text
        style={{
          color: "#4B5050",
          fontWeight: "400",
          lineHeight: 16,
          fontSize: 11,
          alignSelf: "center",
          textAlign: "center",
          width: 110,
        }}
      >
        <AntDesign
          name="download"
          size={20}
          color="black"
          style={{ marginLeft: 9, marginTop: 9 }}
        />
      </Text>
    </View>
  );
};

function MonthlyCardReport({ navigation }: any) {
  const router = useRouter();
  return (
    <>
      <ScrollView style={{ marginBottom: 12 }}>
        <View style={{ display: "flex", flex: 1, backgroundColor: "white" }}>
          <View
            style={{
              marginLeft: 19.98,
              marginTop: 17,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <TouchableOpacity onPress={router.back}>
              <Image
                source={require("@/assets/icons/arrow_back.png")}
                style={{
                  width: 16.03,
                  height: 16.03,
                  marginRight: 35.98,
                }}
              />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "500",
                lineHeight: 32,
                letterSpacing: 0.5,
                color: "#4B5050",
              }}
            >
              Pay By QR Code
            </Text>
          </View>
          <Text
            style={{
              color: "#4B5050",
              fontWeight: "500",
              fontSize: 16,
              lineHeight: 24,
              marginLeft: 30,
              marginTop: 30,
            }}
          >
            Name of the Business
          </Text>
          <View
            style={{
              flexDirection: "row",
              marginLeft: 30,
              marginTop: 4,
            }}
          >
            <Text
              style={{
                color: "#4B5050B2",
                fontSize: 14,
                fontWeight: "400",
                lineHeight: 20,
                marginRight: 13,
              }}
            >
              Dubai
            </Text>
            <Text
              style={{
                color: "#4B5050B2",
                fontSize: 14,
                fontWeight: "400",
                lineHeight: 20,
              }}
            >
              Vat No. 3100984
            </Text>
          </View>
          <Text
            style={{
              color: "#4B5050",
              fontWeight: "500",
              fontSize: 13,
              lineHeight: 18,
              marginLeft: 30,
              marginTop: 6,
            }}
          >
            MID: 0987654321
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 32,
              marginRight: 32,
              marginTop: 24,
            }}
          >
            <View
              style={{
                width: 38,
                height: 38,
                backgroundColor: "#4B50500F",
                marginRight: 8,
                borderRadius: 8,
              }}
            >
              <MaterialCommunityIcons
                name="calendar-today"
                size={20}
                color="black"
                style={{ marginLeft: 9, marginTop: 9 }}
              />
            </View>
            <Text style={{ color: "#4B5050B2" }}>2023</Text>
            {/* <View
            style={{
              width: 38,
              height: 38,
              backgroundColor: "#4B50500F",
              marginLeft: 20,
              marginRight: 8,
              borderRadius: 8,
            }}
          >
            <AntDesign
              name="download"
              size={20}
              color="black"
              style={{ marginLeft: 9, marginTop: 9 }}
            />
          </View>
          <Text>Download Report</Text> */}
          </View>

          {/* <View
          style={{
            borderBottomColor: "#4B505026",
            borderBottomWidth: 1,
            marginTop: 25,
            marginLeft: 32,
            marginRight: 32,
          }}
        /> */}
          <View
            style={{
              // borderBottomColor: "#4B505026",
              // borderBottomWidth: 1,
              marginTop: 25,
              marginLeft: 32,
              marginRight: 32,
            }}
          />
          {/* <View
          style={{
            marginLeft: 50,
            marginRight: 50,
            flexDirection: "row",
            marginTop: 9,
            alignSelf: "center",
          }}
        > */}
          <View style={[styles.bordertopbotton]}>
            <Text
              style={{
                fontSize: 12,
                fontWeight: "500",
                lineHeight: 16,
                color: "#4C4C4C",
                width: 63,
                textAlign: "center",
              }}
            >
              Mon
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: "500",
                lineHeight: 16,
                color: "#4C4C4C",
                alignSelf: "center",
                textAlign: "center",
                width: 90,
              }}
            >
              value
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: "500",
                lineHeight: 16,
                color: "#4C4C4C",
                alignSelf: "center",
                textAlign: "center",
                width: 67,
              }}
            >
              Total trans
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: "500",
                lineHeight: 16,
                color: "#4C4C4C",
                alignSelf: "center",
                textAlign: "center",

                width: 100,
              }}
            >
              Download
            </Text>
          </View>
          {/* <View
          style={{
            borderBottomColor: "#4B505026",
            borderBottomWidth: 1,
            marginTop: 9,
            marginLeft: 32,
            marginRight: 32,
          }}
        /> */}
          <View>
            <FlatList
              data={data}
              renderItem={({ item, index }) => (
                <ListItem item={item} index={index} />
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </View>
      </ScrollView>
      <View style={{ backgroundColor: "white" }}>
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
    paddingTop: 20,
    backgroundColor: "white",
  },
  rowContainer: {
    flexDirection: "row",
    // justifyContent: "space-between",
    textAlign: "center",

    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 32,
    marginRight: 32,
  },
  bordertopbotton: {
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderBottomColor: "#4B505026",
    borderTopColor: "#4B505026",

    flexDirection: "row",
    // justifyContent: "space-between",
    textAlign: "center",

    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 32,
    marginRight: 32,
  },
  whiteRow: {
    backgroundColor: "#FFFFFF",
  },
  blackRow: {
    backgroundColor: "#4B50500A",
  },
  rowText: {
    color: "#000000",
    fontSize: 16,
  },
  infoContainer: {
    flexDirection: "row",
  },
  infoText: {
    color: "#000000",
    fontSize: 16,
    marginRight: 10,
  },
});

export default MonthlyCardReport;
