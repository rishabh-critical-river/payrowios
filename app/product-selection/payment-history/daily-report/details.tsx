import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  TextInput,
} from "react-native";
import {
  AntDesign,
  Entypo,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { dailyReportArray } from "@/constants/arrays";
import paymentDetails from "@/apis/mutations/payment/detail";
import base64 from "@/hooks/lib/base64";
import keyValidation from "@/hooks/lib/num-characters";
import useStorageData from "@/apis/hooks/use-storage-data";
import moment from "moment";
import truncateText from "@/utils/truncateText";
import toast from "@/hooks/lib/toast";
import { PaymentDetailsResponse } from "@/typings/payment";
import Modal from "react-native-modal";
import useCheckDevice from "@/apis/hooks/use-check-device";
import sendUrl from "@/apis/mutations/order/send-url";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import sleep from "@/utils/sleep";

function DailyCashReport() {
  const [downloadModel, setDownloadModel] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [email, setEmail] = React.useState("");
  const router = useRouter();
  const params = useLocalSearchParams();
  const safeAPI = React.useRef(false);
  const { user } = useStorageData("user");
  const { auth } = useStorageData("auth");
  const { user: userDecoded } = useStorageData("user", {
    decode: true,
  });

  const [key, setKey] = React.useState(keyValidation(8));
  const generate = React.useCallback(() => {
    setKey(keyValidation(8));
  }, []);

  const init = {
    data: [],
    reportPath: "",
    success: false,
  };
  const [state, setState] = React.useState<PaymentDetailsResponse>(init);
  const [date, setDate] = React.useState(new Date());

  const DynamicTitle = React.useMemo(() => {
    if (!params.slug) return;
    const data = dailyReportArray.find((item) => item.slug === params.slug);
    return data?.name;
  }, []);

  const channel = React.useMemo(() => {
    if (!params.slug) return;
    const data = dailyReportArray.find((item) => item.slug === params.slug);
    return data?.slug;
  }, [params.slug]);

  const fetchPaymentDetails = React.useCallback(async () => {
    setLoading(true);
    try {
      if (auth?.tid && user?.token && userDecoded?.merchantId) {
        const payload = {
          key: base64.encode(
            JSON.stringify({
              num: Number(key),
              validation: "Key Validation",
            })
          ),
          channel,
          tid: auth?.tid,
          merchantId: userDecoded?.merchantId,
          dates: {
            from: moment(date).format("YYYY-MM-DD"),
          },
        };
        const { data } = await paymentDetails(payload, user?.token);
        if (data) {
          setState(data as PaymentDetailsResponse);
          setLoading(false);
        }
      }
    } catch (error: any) {
      // console.log(error);
      if (error?.response?.status === 400) {
        setLoading(false);
        setState(init);

        toast.show("No data found");
      }
    }
  }, [auth?.tid, user?.token, userDecoded?.merchantId, channel, key, date]);

  React.useEffect(() => {
    safeAPI.current = true;
    if (safeAPI.current) {
      fetchPaymentDetails();
    }
    return () => {
      safeAPI.current = false;
    };
  }, [auth?.tid, user?.token, userDecoded?.merchantId, channel, key]);

  const keyRef = React.useRef<boolean>(false);
  React.useEffect(() => {
    keyRef.current = true;
    if (keyRef.current) {
      generate();
    }
    return () => {
      keyRef.current = false;
    };
  }, [date]);

  const data = React.useMemo(() => {
    if (state?.data.length > 0) {
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

  const onDownloadFile = React.useCallback(async () => {
    if (state.reportPath) {
      setDownloadModel(true);
    } else {
      toast.show("No report found");
    }
  }, [state?.reportPath]);

  const sentLinkByMail = React.useCallback(async () => {
    if (!email) return toast.show("Email is required");
    try {
      if (user?.token && email && state.reportPath) {
        const subject = `PayRow Report`;
        const payload = {
          email,
          subject,
          url: state.reportPath,
        };
        const { data } = await sendUrl(payload, user?.token);
        if (data) {
          toast.show("Email sent successfully");
          setDownloadModel(false);
        }
      }
    } catch (error) {
      console.log(error);
      toast.show("Something went wrong");
    }
  }, [user?.token, email, state.reportPath]);

  const openCalender = React.useCallback(() => {
    DateTimePickerAndroid.open({
      value: date,
      onChange: (_, selectedDate) => {
        if (selectedDate) {
          setDate(selectedDate);
        }
      },
      mode: "date",
      is24Hour: true,
      maximumDate: new Date(),
    });
  }, []);

  return (
    <>
      {/* <Button title="Fetch Data" onPress={fetchPaymentDetails} /> */}
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
          <TouchableOpacity
            onPress={openCalender}
            style={{
              flexDirection: "row",
              alignItems: "center",
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
            <Text style={{ color: "#4B5050B2" }}>
              {" "}
              {moment(date).format("DD/MM/YYYY ")}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onDownloadFile}
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: 38,
                height: 38,
                backgroundColor: "#4B50500F",
                marginLeft: 12,
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
            <Text style={{ color: "#4B5050B2" }}>Download Report</Text>
          </TouchableOpacity>
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
          {loading ? (
            <View
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: 400,
                gap: 16,
              }}
            >
              <ActivityIndicator size="large" color="#4B5050B2" />
            </View>
          ) : data.length === 0 ? (
            <View
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: 400,
                gap: 16,
              }}
            >
              <View
                style={{
                  width: 110,
                  height: 110,
                  borderRadius: 100,
                  borderColor: "#eee",
                  borderWidth: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    width: 80,
                    height: 80,
                    backgroundColor: "#80a95d21",
                    borderRadius: 100,

                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {/* <Ionicons name="information" size={60} color="#80a95d" /> */}
                  <FontAwesome5 name="exclamation" size={40} color="#80a95d" />
                </View>
              </View>
              {/* <Image
                  source={require('@/assets/images/no-data.jpg')}
                  style={{
                    width: 100,
                    height: 100,
                  }}
                /> */}
              <Text
                style={{
                  color: "#4B5050B2",
                  fontSize: 14,
                  fontWeight: "400",
                  lineHeight: 20,
                }}
              >
                No data found
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
      <Modal
        isVisible={downloadModel}
        style={{
          justifyContent: "center",
          margin: 0,
          padding: 16,
        }}
        onBackdropPress={() => setDownloadModel(false)}
      >
        <View
          style={{
            padding: 32,
            borderRadius: 8,
            backgroundColor: "white",
            paddingBottom: 72,
          }}
        >
          <View>
            <Text
              style={{
                fontSize: 24,
                fontWeight: "400",
                lineHeight: 28,
                color: "#333333",
                marginBottom: 16,
              }}
            >
              Alert
            </Text>
          </View>
          <View
            style={{
              marginBottom: 20,
            }}
          >
            <Text
              style={{
                fontSize: 14,
                fontWeight: "400",
                lineHeight: 20,
                color: "#333333",
              }}
            >
              Enter email to download the report
            </Text>
          </View>
          <View style={{ flexDirection: "row", marginBottom: 16 }}>
            <TextInput
              style={{
                color: "#4B5050",
                fontWeight: "500",
                fontSize: 22,
                width: 255,
                height: 24,
                opacity: 0.7,
                marginRight: 4,
                borderBottomWidth: 1,
                borderBottomColor: "#4B505040",
              }}
              placeholder="Enter email"
              keyboardType="email-address"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </View>
          <View style={{ flexDirection: "column", gap: 16 }}>
            <TouchableOpacity
              // style={styles.button}

              onPress={sentLinkByMail}
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
                    Continue
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
            <TouchableOpacity
              onPress={() => setDownloadModel(false)}
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
                  fontSize: 16,
                  fontWeight: "500",
                  flex: 1,

                  color: "#4B5050",
                  lineHeight: 20,

                  marginLeft: 16,
                }}
              >
                Cancel
              </Text>

              <Entypo
                name="cross"
                size={24}
                style={{
                  marginRight: 16,
                }}
                color="#4B5050E5"
              />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
    value: number | string;
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
          color: "#4B5050B2",
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
          color: "#4B5050B2",
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
          color: "#4B5050B2",
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
          color: "#4B5050B2",
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
