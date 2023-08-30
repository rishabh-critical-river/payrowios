import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Button,
} from "react-native";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { dailyReportArray } from "@/constants/arrays";
import paymentDetails from "@/apis/mutations/payment/detail";
import base64 from "@/hooks/lib/base64";
import keyValidation from "@/hooks/lib/num-characters";
import useStorageData from "@/apis/hooks/use-storage-data";
import moment from "moment";
import { tokens } from "react-native-paper/lib/typescript/styles/themes/v3/tokens";
import truncateText from "@/utils/truncateText";

function DailyCashReport() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const safeAPI = React.useRef(false);
  const { user } = useStorageData("user");
  const { auth } = useStorageData("auth");
  const { user: userDecoded } = useStorageData("user", {
    decode: true,
  });

  const key = React.useMemo(() => {
    return base64.encode(
      JSON.stringify({
        num: Number(keyValidation(8)),
        validation: "Key Validation",
      })
    );
  }, []);

  const [state, setState] = React.useState(xyz);

  const DynamicTitle = React.useMemo(() => {
    if (!params.slug) return;
    const data = dailyReportArray.find((item) => item.slug === params.slug);
    return data?.name;
  }, []);

  const fetchPaymentDetails = React.useCallback(async () => {
    console.log("Fetch Payment Details");
    console.log("Auth from line 63", key);
    const channel = dailyReportArray.find((item) => item.slug === params.slug)
      ?.slug;
    try {
      if (auth?.tid && user?.token && userDecoded?.merchantId) {
        console.log("Key from line 63", key);
        const payload = {
          key,
          channel,
          tid: auth?.tid,
          merchantId: userDecoded?.merchantId,
          dates: {
            from: moment().format("YYYY-MM-DD"),
          },
        };
        console.log("Payload from line 75", payload);
        const { data } = await paymentDetails(payload, user?.token);
        if (data) {
          setState(data);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }, [auth?.tid, user?.token, userDecoded?.merchantId, key, params.slug]);
  console.log("State from line 85", state);
  React.useEffect(() => {
    safeAPI.current = true;
    if (safeAPI.current) {
      fetchPaymentDetails();
    }
    return () => {
      safeAPI.current = false;
    };
  }, []);
  // console.log("State from line 94", state);
  const data = React.useMemo(() => {
    if (state?.data) {
      return state.data.map((item) => {
        return {
          time: moment(item.paymentDate).format("hh:mm A"),
          transNo: truncateText(item.orderNumber, 5),
          value: item.totalAmount,
          status: "SUCCESS",
        };
      });
    } else {
      return [];
    }
  }, [state?.data]);

  console.log("Data from line 110", data);
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
            {DynamicTitle}
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
          PayRow Stores
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
          {`MID: ${userDecoded?.merchantId} `}
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
          <Text> {moment().format("DD/MM/YYYY ")}</Text>
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
            borderBottomColor: "#4B505026",
            borderBottomWidth: 1,
            borderTopColor: "#4B505026",
            borderTopWidth: 1,
            // marginTop: 25,
            marginLeft: 32,
            marginRight: 32,
            flexDirection: "row",

            marginTop: 9,
            paddingTop: 9,
            paddingBottom: 9,
          }}
        >
          <Text
            style={{
              fontSize: 12,
              fontWeight: "500",
              lineHeight: 16,
              color: "#4C4C4C",
              alignSelf: "center",
              textAlign: "center",
              width: 63,
            }}
          >
            Time
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
            Order No.
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
            Value
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: "500",
              lineHeight: 16,
              color: "#4C4C4C",
              alignSelf: "center",
              textAlign: "center",

              width: 110,
            }}
          >
            Status
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
          {data.length === 0 ? (
            <View>
              <Text style={{ textAlign: "center", marginTop: 20 }}>
                No Data Found
              </Text>
            </View>
          ) : (
            <FlatList
              data={data}
              renderItem={({ item, index }) => (
                <ListItem item={item} index={index} />
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          )}
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

export default DailyCashReport;

type ListItemProps = {
  item: {
    time: string;
    transNo: string;
    value: string;
    status: string;
  };
  index: number;
};

const ListItem = ({ item, index }: ListItemProps) => {
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
        SUCCESS
      </Text>
    </View>
  );
};

const xyz = {
  success: true,
  data: [
    {
      purchaseBreakdown: {
        service: [
          {
            serviceCode: "10000",
            serviceCat: "ELECTRICAL CONTRACTORS",
            englishName: "Apprentice Electrician",
            arabicName: "",
            quantity: 2,
            transactionAmount: 1.5,
            totalAmount: 1,
            _id: "64ef3704aebb80a45c13e8ff",
            taxDetails: [],
          },
        ],
        fee: [],
      },
      responseCode: 0,
      _id: "64ef3704aebb80a45c13e8fe",
      storeId: "Owner",
      orderNumber: "2870842222695361",
      channel: "Cash",
      posType: "pos",
      posId: "PRMID63",
      paymentDate: "2023-08-30T12:33:07.385Z",
      customerPhone: "9939853384",
      totalTaxAmount: 0.15,
      totalAmount: 3.15,
      toggleExpiration: true,
      distributorId: "MANZ101",
      userId: "PRMID63",
      mainMerchantId: "PRMID63",
      createdAt: "2023-08-30T12:33:08.513Z",
      updatedAt: "2023-08-30T12:33:08.513Z",
      __v: 0,
    },
    {
      purchaseBreakdown: {
        service: [
          {
            serviceCode: "10000",
            serviceCat: "ELECTRICAL CONTRACTORS",
            englishName: "Apprentice Electrician",
            arabicName: "",
            quantity: 1,
            transactionAmount: 1.5,
            totalAmount: 1,
            _id: "64ef37ddaebb80a45c13e903",
            taxDetails: [],
          },
          {
            serviceCode: "10000",
            serviceCat: "ELECTRICAL CONTRACTORS",
            englishName: "Journeyman Electrician",
            arabicName: "",
            quantity: 2,
            transactionAmount: 1.5,
            totalAmount: 1,
            _id: "64ef37ddaebb80a45c13e904",
            taxDetails: [],
          },
        ],
        fee: [],
      },
      responseCode: 0,
      _id: "64ef37ddaebb80a45c13e902",
      storeId: "Owner",
      orderNumber: "1072959073641947",
      channel: "Cash",
      posType: "pos",
      posId: "5935433282",
      paymentDate: "2023-08-30T12:36:44.315Z",
      customerPhone: "9939853381",
      totalTaxAmount: 0.225,
      totalAmount: 4.725,
      toggleExpiration: true,
      distributorId: "MANZ101",
      userId: "PRMID63",
      mainMerchantId: "PRMID63",
      createdAt: "2023-08-30T12:36:45.391Z",
      updatedAt: "2023-08-30T12:36:45.391Z",
      __v: 0,
    },
  ],
  reportPath:
    "https://payrowdev.uaenorth.cloudapp.azure.com/orderReport/Report59_Cash_2023-08-30.xlsx",
};
