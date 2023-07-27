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
import {
  VictoryChart,
  VictoryLine,
  VictoryTheme,
  VictoryBar,
  VictoryAxis,
  VictoryPie,
} from "victory-native";

function PaymentHistory({ navigation }) {
  const data = [
    { month: "Jan", amount: 500 },
    { month: "Feb", amount: 750 },
    { month: "Mar", amount: 400 },
    { month: "Apr", amount: 900 },
    { month: "May", amount: 600 },
    { month: "Jun", amount: 300 },
    { month: "Jul", amount: 100 },
    { month: "Aug", amount: 500 },
    { month: "Sep", amount: 750 },
    { month: "Oct", amount: 400 },
    { month: "Nov", amount: 900 },
    { month: "Dec", amount: 600 },
  ];
  const graphicData = [
    { y: 40, x: "5%" },
    { y: 60, x: "90%" },
  ];
  const graphicData2 = [
    { y: 90, x: "5%" },
    { y: 10, x: "90%" },
  ];
  const colorScale = ["#80B459", "#4B505014"];
  const barWidth = 16; // Adjust the bar width
  const gap = 4; // Adjust the gap size
  const yMax = Math.max(...data.map((item) => item.amount));
  const yMin = 0;
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
            Payment History 
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

        <View
          style={{
            borderWidth: 1,
            borderColor: "#4B505040",
            borderRadius: 9,
            marginBottom: 16,
            marginTop: 24,
            width: 296,
            height: 72,
            alignSelf: "center",
            flexDirection: "row",

            alignItems: "center",
          }}
        >
          <View style={{ marginLeft: 16 }}>
            <Text
              style={{ color: "#4B5050CC", fontSize: 12, fontWeight: "400" }}
            >
              Sequences - per month
            </Text>
            <Text style={{ color: "#191919", fontSize: 16, fontWeight: "500" }}>
              4,000,000
            </Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={{ width: 80, height: 80, marginBottom: 40 }}>
              <VictoryPie
                data={graphicData}
                width={122} // Decrease the width
                height={122} // Decrease the height
                innerRadius={14} // Adjust the inner radius
                colorScale={colorScale}
                style={{
                  labels: {
                    fill: "white",
                    fontSize: 15,
                    padding: 7,
                  },
                }}
              />
            </View>
            <View
              style={{
                flexDirection: "column",
                marginLeft: 3,
              }}
            >
              <Text
                style={{
                  color: "#4B5050CC",
                  fontSize: 12,
                  fontWeight: "400",
                }}
              >
                Average
              </Text>
              <Text
                style={{ color: "#191919", fontSize: 14, fontWeight: "500" }}
              >
                1M
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            borderWidth: 1,
            borderColor: "#4B505040",
            borderRadius: 9,
            marginBottom: 16,

            width: 296,
            height: 72,
            alignSelf: "center",
            flexDirection: "row",

            alignItems: "center",
          }}
        >
          <View style={{ marginLeft: 16 }}>
            <Text
              style={{ color: "#4B5050CC", fontSize: 12, fontWeight: "400" }}
            >
              Total Credit - per month
            </Text>
            <Text style={{ color: "#191919", fontSize: 16, fontWeight: "500" }}>
              5,000,000
            </Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={{ width: 80, height: 80, marginBottom: 40 }}>
              <VictoryPie
                data={graphicData2}
                width={122} // Decrease the width
                height={122} // Decrease the height
                innerRadius={14} // Adjust the inner radius
                colorScale={colorScale}
                style={{
                  labels: {
                    fill: "white",
                    fontSize: 15,
                    padding: 7,
                  },
                }}
              />
            </View>
            <View
              style={{
                flexDirection: "column",
                marginLeft: 3,
              }}
            >
              <Text
                style={{
                  color: "#4B5050CC",
                  fontSize: 12,
                  fontWeight: "400",
                }}
              >
                Average
              </Text>
              <Text
                style={{ color: "#191919", fontSize: 14, fontWeight: "500" }}
              >
                5M
              </Text>
            </View>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("historyMethods");
          }}
          style={styles.box}
        >
          <Text style={styles.homeBlocks}> DAILY REPORT </Text>
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
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("historyMethods");
          }}
          style={styles.box}
        >
          <Text style={styles.homeBlocks}> MONTHLY REPORT </Text>
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
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("invoiceRecall");
          }}
          style={styles.box}
        >
          <Text style={styles.homeBlocks}> INVOICE RECALL </Text>
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
        <View>
          <VictoryChart domain={{ y: [yMin, yMax] }}>
            <VictoryAxis
              style={{
                tickLabels: {
                  fontSize: 10,
                  fill: "#4B5050CC",
                  padding: 1,
                },
              }}
            />
            <VictoryBar
              data={data}
              x="month"
              y="amount"
              barWidth={barWidth}
              style={{
                data: {
                  fill: "#4B5050CC",
                },
                labels: {
                  fontSize: 10,
                },
              }}
            />
            <VictoryBar
              data={data}
              x="month"
              y="amount"
              barWidth={barWidth + gap}
              style={{
                data: {
                  fill: "transparent",
                  stroke: "transparent",
                  strokeWidth: 0,
                },
              }}
            />
          </VictoryChart>
        </View>
      </View>
      <View style={{ backgroundColor: "white" }}>
        <Text
          style={{
            fontSize: 12,
            backgroundColor: "white",
            color: "#7f7f7f",
            textAlign: "center",
            marginTop: 14,
            marginBottom
          }}
        >
          ©2022 PayRow Company. All rights reserved
        </Text>
      </View>
    </>
  );
}

export default PaymentHistory;
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
    marginBottom: 35,
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
    height: 44,
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    marginLeft: 165,
    backgroundColor: "#72ac47",
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
