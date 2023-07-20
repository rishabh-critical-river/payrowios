import React from "react";
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
  FlatList,
} from "react-native";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
const data = [
  { time: "10:00 AM", transNo: "123", value: "100", status: "Completed" },
  { time: "11:00 AM", transNo: "456", value: "200", status: "Pending" },
  { time: "12:00 PM", transNo: "789", value: "150", status: "Failed" },
  { time: "10:00 AM", transNo: "123", value: "100", status: "Completed" },
  { time: "11:00 AM", transNo: "456", value: "200", status: "Pending" },
  { time: "12:00 PM", transNo: "789", value: "150", status: "Failed" },
  { time: "10:00 AM", transNo: "123", value: "100", status: "Completed" },
  { time: "11:00 AM", transNo: "456", value: "200", status: "Pending" },
  { time: "12:00 PM", transNo: "789", value: "150", status: "Failed" },
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
          marginRight: 45,
        }}
      >
        {item.time}
      </Text>
      <View style={styles.infoContainer}>
        <Text
          style={{
            color: "#4B5050",
            fontWeight: "400",
            lineHeight: 16,
            fontSize: 11,

            marginRight: 60,
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

            marginRight: 40,
          }}
        >
          {item.value}
        </Text>
      </View>

      <Text
        style={{
          color: "#4B5050",
          fontWeight: "400",
          lineHeight: 16,
          fontSize: 11,
          marginRight: 19,
        }}
      >
        {item.status}
      </Text>
    </View>
  );
};

function DailyReport() {
  return (
    <>
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
            Tap to Pay
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
            }}
          >
            <MaterialCommunityIcons
              name="calendar-today"
              size={20}
              color="black"
              style={{ marginLeft: 9, marginTop: 9 }}
            />
          </View>
          <Text>06/07/2023</Text>
          <View
            style={{
              width: 38,
              height: 38,
              backgroundColor: "#4B50500F",
              marginLeft: 20,
              marginRight: 8,
            }}
          >
            <AntDesign
              name="download"
              size={20}
              color="black"
              style={{ marginLeft: 9, marginTop: 9 }}
            />
          </View>
          <Text>Download Report</Text>
        </View>

        <View
          style={{
            borderBottomColor: "#4B505026",
            borderBottomWidth: 1,
            marginTop: 25,
            marginLeft: 32,
            marginRight: 32,
          }}
        />
        <View
          style={{
            marginLeft: 50,
            marginRight: 50,
            flexDirection: "row",
            marginTop: 9,
          }}
        >
          <Text
            style={{
              fontSize: 12,
              fontWeight: "500",
              lineHeight: 16,
              color: "#4C4C4C",
            }}
          >
            Time
          </Text>
          <Text
            style={{
              marginLeft: 40,
              marginRight: 36,
              fontSize: 12,
              fontWeight: "500",
              lineHeight: 16,
              color: "#4C4C4C",
            }}
          >
            Trans No.
          </Text>
          <Text
            style={{
              marginRight: 40,
              fontSize: 12,
              fontWeight: "500",
              lineHeight: 16,
              color: "#4C4C4C",
            }}
          >
            Value
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: "500",
              lineHeight: 16,
              color: "#4C4C4C",
            }}
          >
            Status
          </Text>
        </View>
        <View
          style={{
            borderBottomColor: "#4B505026",
            borderBottomWidth: 1,
            marginTop: 9,
            marginLeft: 32,
            marginRight: 32,
          }}
        />
        <View style={styles.container}>
          <FlatList
            data={data}
            renderItem={({ item, index }) => (
              <ListItem item={item} index={index} />
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
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

    padding: 10,
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

export default DailyReport;
