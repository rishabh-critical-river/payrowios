import { AntDesign } from "@expo/vector-icons";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from "react-native";
function AboutPayrow({ navigation }) {
  return (
    <>
      <ScrollView
        style={{ display: "flex", flex: 1, backgroundColor: "white" }}
      >
        <View
          style={{
            marginLeft: 19.98,

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
            About Us
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
        <Image
          source={require("./Heroshot.png")}
          style={{ width: 328, height: 218, alignSelf: "center" }}
        />
        <Text
          style={{
            textAlign: "center",
            fontSize: 14,
            fontWeight: "400",
            color: "#4B5050",
          }}
        >
          Ultimate Fintech Partner
        </Text>
        <Text
          style={{
            fontWeight: "400",
            fontSize: 22,
            lineHeight: 28,

            marginLeft: 32,
            marginTop: 30,
          }}
        >
          {" "}
          About us
        </Text>
        <Text
          style={{
            color: "#4B5050E5",
            fontWeight: "400",
            fontSize: 14,
            lineHeight: 20,
            letterSpacing: 0.25,
            marginLeft: 32,
            marginTop: 14,
            marginRight: 32,
          }}
        >
          PayRow is a B2B Fintech player addressing retail and microfinance
          industry using the business model of platform-as-a-service. The
          company has been established in the year 2020 In payment industry
          veterans PayRow having an inspiring experience to extent in market.
        </Text>
        <Text
          style={{
            color: "#4B5050E5",
            fontWeight: "400",
            fontSize: 14,
            lineHeight: 20,
            letterSpacing: 0.25,
            marginLeft: 32,
            marginTop: 14,
            marginRight: 32,
          }}
        >
          PayRow drives its services for each region (Middle East - Africa -
          South Asia) from ideation stage to the final revenue output. By
          offerings company’s – hardware and software are targeted either
          towards payment service providers or end merchants and business
          owners. For joining journey send interest to info@PayRow.ae
        </Text>
        <Image
          style={{
            width: 296,
            height: 395,
            alignSelf: "center",
            marginTop: 32,
          }}
          source={require("./ceo.png")}
        />

        <Text
          style={{
            fontWeight: "400",
            fontSize: 22,
            lineHeight: 28,

            marginLeft: 46,
            marginTop: 30,
          }}
        >
          Hardware Products
        </Text>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("cashReceivedMachine");
          }}
          style={{
            borderWidth: 1,
            borderColor: "#4B505040",
            borderRadius: 9,

            width: 296,
            height: 48,
            alignSelf: "center",
            alignItems: "center",
            flexDirection: "row",
            marginTop: 16,
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontWeight: "500",
              flex: 1,

              color: "#4B5050",
              lineHeight: 20,
              letterSpacing: 0.1,
              marginLeft: 16,
            }}
          >
            Cash Received Machine
          </Text>
          <AntDesign
            name="right"
            size={16}
            color="#4B5050"
            style={{ marginRight: 18 }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("posandretail");
          }}
          style={{
            borderWidth: 1,
            borderColor: "#4B505040",
            borderRadius: 9,

            width: 296,
            height: 48,
            alignSelf: "center",
            alignItems: "center",
            flexDirection: "row",
            marginTop: 16,
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontWeight: "500",
              flex: 1,

              color: "#4B5050",
              lineHeight: 20,
              letterSpacing: 0.1,
              marginLeft: 16,
            }}
          >
            POS & Retail Machine
          </Text>
          <AntDesign
            name="right"
            size={16}
            color="#4B5050"
            style={{ marginRight: 18 }}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontWeight: "400",
            fontSize: 22,
            lineHeight: 28,

            marginLeft: 46,
            marginTop: 32,
          }}
        >
          Software Products
        </Text>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("softpos");
          }}
          style={{
            borderWidth: 1,
            borderColor: "#4B505040",
            borderRadius: 9,

            width: 296,
            height: 48,
            alignSelf: "center",
            alignItems: "center",
            flexDirection: "row",
            marginTop: 16,
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontWeight: "500",
              flex: 1,

              color: "#4B5050",
              lineHeight: 20,
              letterSpacing: 0.1,
              marginLeft: 16,
            }}
          >
            Soft POS
          </Text>
          <AntDesign
            name="right"
            size={16}
            color="#4B5050"
            style={{ marginRight: 18 }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("paybylink");
          }}
          style={{
            borderWidth: 1,
            borderColor: "#4B505040",
            borderRadius: 9,

            width: 296,
            height: 48,
            alignSelf: "center",
            alignItems: "center",
            flexDirection: "row",
            marginTop: 16,
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontWeight: "500",
              flex: 1,

              color: "#4B5050",
              lineHeight: 20,
              letterSpacing: 0.1,
              marginLeft: 16,
            }}
          >
            Pay by Link
          </Text>
          <AntDesign
            name="right"
            size={16}
            color="#4B5050"
            style={{ marginRight: 18 }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("paybyqrcode");
          }}
          style={{
            borderWidth: 1,
            borderColor: "#4B505040",
            borderRadius: 9,

            width: 296,
            height: 48,
            alignSelf: "center",
            alignItems: "center",
            flexDirection: "row",
            marginTop: 16,
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontWeight: "500",
              flex: 1,

              color: "#4B5050",
              lineHeight: 20,
              letterSpacing: 0.1,
              marginLeft: 16,
            }}
          >
            Pay by QR Code
          </Text>
          <AntDesign
            name="right"
            size={16}
            color="#4B5050"
            style={{ marginRight: 18 }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("paymentgateway");
          }}
          style={{
            borderWidth: 1,
            borderColor: "#4B505040",
            borderRadius: 9,

            width: 296,
            height: 48,
            alignSelf: "center",
            alignItems: "center",
            flexDirection: "row",
            marginTop: 16,
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontWeight: "500",
              flex: 1,

              color: "#4B5050",
              lineHeight: 20,
              letterSpacing: 0.1,
              marginLeft: 16,
            }}
          >
            Payment Gateway
          </Text>
          <AntDesign
            name="right"
            size={16}
            color="#4B5050"
            style={{ marginRight: 18 }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("wps");
          }}
          style={{
            borderWidth: 1,
            borderColor: "#4B505040",
            borderRadius: 9,

            width: 296,
            height: 48,
            alignSelf: "center",
            alignItems: "center",
            flexDirection: "row",
            marginTop: 16,
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontWeight: "500",
              flex: 1,

              color: "#4B5050",
              lineHeight: 20,
              letterSpacing: 0.1,
              marginLeft: 16,
            }}
          >
            WPS
          </Text>
          <AntDesign
            name="right"
            size={16}
            color="#4B5050"
            style={{ marginRight: 18 }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("vat");
          }}
          style={{
            borderWidth: 1,
            borderColor: "#4B505040",
            borderRadius: 9,

            width: 296,
            height: 48,
            alignSelf: "center",
            alignItems: "center",
            flexDirection: "row",
            marginTop: 16,
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontWeight: "500",
              flex: 1,

              color: "#4B5050",
              lineHeight: 20,
              letterSpacing: 0.1,
              marginLeft: 16,
            }}
          >
            Value-Added Tax (VAT)
          </Text>
          <AntDesign
            name="right"
            size={16}
            color="#4B5050"
            style={{ marginRight: 18 }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("kvyc");
          }}
          style={{
            borderWidth: 1,
            borderColor: "#4B505040",
            borderRadius: 9,

            width: 296,
            height: 48,
            alignSelf: "center",
            alignItems: "center",
            flexDirection: "row",
            marginTop: 16,
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontWeight: "500",
              flex: 1,

              color: "#4B5050",
              lineHeight: 20,
              letterSpacing: 0.1,
              marginLeft: 16,
            }}
          >
            E-KYC
          </Text>
          <AntDesign
            name="right"
            size={16}
            color="#4B5050"
            style={{ marginRight: 18 }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("buynowpaylater");
          }}
          style={{
            borderWidth: 1,
            borderColor: "#4B505040",
            borderRadius: 9,

            width: 296,
            height: 48,
            alignSelf: "center",
            alignItems: "center",
            flexDirection: "row",
            marginTop: 16,
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontWeight: "500",
              flex: 1,

              color: "#4B5050",
              lineHeight: 20,
              letterSpacing: 0.1,
              marginLeft: 16,
            }}
          >
            Buy Now & Pay Later (BNPL)
          </Text>
          <AntDesign
            name="right"
            size={16}
            color="#4B5050"
            style={{ marginRight: 18 }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("wallet");
          }}
          style={{
            borderWidth: 1,
            borderColor: "#4B505040",
            borderRadius: 9,

            width: 296,
            height: 48,
            alignSelf: "center",
            alignItems: "center",
            flexDirection: "row",
            marginTop: 16,
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontWeight: "500",
              flex: 1,

              color: "#4B5050",
              lineHeight: 20,
              letterSpacing: 0.1,
              marginLeft: 16,
            }}
          >
            Wallet
          </Text>
          <AntDesign
            name="right"
            size={16}
            color="#4B5050"
            style={{ marginRight: 18 }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("payrowprepaid");
          }}
          style={{
            borderWidth: 1,
            borderColor: "#4B505040",
            borderRadius: 9,

            width: 296,
            height: 48,
            alignSelf: "center",
            alignItems: "center",
            flexDirection: "row",
            marginTop: 16,
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontWeight: "500",
              flex: 1,

              color: "#4B5050",
              lineHeight: 20,
              letterSpacing: 0.1,
              marginLeft: 16,
            }}
          >
            PayRow Prepaid Cards
          </Text>
          <AntDesign
            name="right"
            size={16}
            color="#4B5050"
            style={{ marginRight: 18 }}
          />
        </TouchableOpacity>
      </ScrollView>
      <View style={{ backgroundColor: "white" }}>
        <Text
          style={{
            fontSize: 12,
            marginTop: 16,
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

export default AboutPayrow;
