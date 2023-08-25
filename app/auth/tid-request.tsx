import React from "react";
import useModal from "@/hooks/use-modal";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import useInputs from "@/hooks/use-inputs";
import createContact from "@/apis/mutations/contact/contact-us";
import useStorageData from "@/apis/hooks/use-storage-data";
import { ScrollView } from "react-native-gesture-handler";

function ContactUs() {
  const { user } = useStorageData("user");
  const router = useRouter();
  const { setSnackbarModal } = useModal();

  const [state, setState] = useInputs({
    // name: "",
    email: "",
    // message: "",
    mobileNumber: "",
  });

  //   const onSubmit = React.useCallback(async () => {
  //     if (user?.token) {
  //       try {
  //         const { data, status } = await createContact(
  //           {
  //             ...state,
  //             mobileNumber: `971${state.mobileNumber}`,
  //           },
  //           user?.token
  //         );
  //         console.log("Response from contact ", data);
  //         if (status === 200) {
  //           router.push(
  //             "/product-selection/contact/contact-us/register-complain"
  //           );
  //         }
  //         console.log(state);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     }
  //   }, [state, user?.token]);

  const valid = React.useMemo(() => {
    if (
      //   state.name.length > 0 &&
      state.email.length > 0 &&
      //   state.message.length > 0 &&
      state.mobileNumber.length > 0
    ) {
      return true;
    }
  }, [state.name, state.email, state.message, state.mobileNumber]);
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
      }}
    >
      <View style={{ display: "flex", flex: 1, backgroundColor: "white" }}>
        <View
          style={{
            marginLeft: 18,
            marginTop: 17,
            flexDirection: "row",
            alignItems: "center",
            width: 360,
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
            Request TID
          </Text>
        </View>

        <Image
          source={require("@/assets/onboarding/payrowLogo.png")}
          style={{
            width: 150,
            height: 48.529,
            alignSelf: "center",
            marginTop: 32,
            flexShrink: 0,
          }}
        />
        {/* <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              marginLeft: 32,
              marginRight: 32,
              textAlign: "center",
              fontSize: 16,
              fontWeight: "500",
              lineHeight: 20,
              letterSpacing: 0.1,
              marginTop: 16.47,
              color: "#333333",
              width: 296,
              height: 48,
              // letterSpacing: 0.1,
            }}
          >
            Leave us a message, we will get in touch with you as soon as
            possible
          </Text>
        </View> */}

        <View style={{ alignSelf: "center", marginTop: 24 }}>
          <Text
            style={{
              fontSize: 12,
              lineHeight: 12,
              fontWeight: "400",
              color: "#4B5050",
              width: 296,
              height: 13,
            }}
          >
            Registered Email id
          </Text>

          <TextInput
            style={{
              color: "#333333",
              fontWeight: "400",
              fontSize: 16,
              opacity: 0.7,
              borderColor: "#999999",
              borderBottomWidth: 1,
            }}
            placeholder="Enter your email"
            onChangeText={(text) => setState("email", text)}
            value={state.email}
          />
        </View>

        <View style={{ alignSelf: "center", marginTop: 28 }}>
          <Text
            style={{
              fontSize: 12,
              lineHeight: 12,
              fontWeight: "400",
              color: "#4B5050",
              width: 296,
              height: 16,
            }}
          >
            Phone Number
          </Text>
          <View
            style={{
              flexDirection: "row",
              opacity: 0.7,
              borderColor: "#999999",
              borderBottomWidth: 1,
            }}
          >
            <Image
              source={require("@/assets/icons/UAE.png")}
              style={{
                width: 18,
                height: 18,
                marginRight: 4,
              }}
            />
            <Image
              source={require("@/assets/icons/IconPlacholder.png")}
              style={{
                width: 20,
                height: 20,
                marginRight: 4,
              }}
            />
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
              placeholder=""
              editable={false}
            >
              +971
            </TextInput>

            <TextInput
              keyboardType="numeric"
              style={{
                color: "#333333",
                fontWeight: "400",
                fontSize: 16,
                // width: 81,
                height: 24,
                opacity: 0.7,
                marginBottom: 4,
              }}
              placeholder="561563669"
              onChangeText={(text) => setState("mobileNumber", text)}
              value={state.mobileNumber}
              maxLength={10}
            />
          </View>
          <View
            //horizontal line
            style={{
              backgroundColor: "#99999",

              width: 296,
              height: 1,
              opacity: 0.7,
              alignSelf: "center",
            }}
          />
        </View>
      </View>
      <View style={styles.footerText}>
        <TouchableOpacity
          //   disabled={!valid}
          // onPress={() => {
          //   // navigation.navigate("registercomplain");
          //   // router.push(
          //   //   '/product-selection/contact/contact-us/register-complain'
          //   // );
          // }}
          style={{ alignSelf: "center", width: 296 }}
          onPress={() => {
            setSnackbarModal({
              content: "Request send successfully",
              width: 200,
            });
          }}
        >
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "#4B5050",
              //   width: 296,
              height: 48,
              gap: 181,

              borderRadius: 8,
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 11,
              marginTop: 16,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                paddingLeft: 16,
                fontWeight: "500",
                lineHeight: 24,
                justifyContent: "center",
                color: "white",
                letterSpacing: 0.1,
              }}
            >
              SEND
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
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            router.push("/auth/login");
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>CANCEL</Text>
          <Entypo
            name="cross"
            size={24}
            style={{
              marginRight: 16,
            }}
            color="#4B5050E5"
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 14,
            backgroundColor: "white",
            color: "#7f7f7f",
            width: 288,
            height: 20,
            fontWeight: "400",
            flexDirection: "row",
            justifyContent: "center",
            alignSelf: "center",
          }}
        >
          ©2022 PayRow Company. All rights reserved
        </Text>
      </View>
    </ScrollView>
  );
}

export default ContactUs;

const styles = StyleSheet.create({
  footerText: {
    fontSize: 12,
    backgroundColor: "white",
    color: "#7f7f7f",
    textAlign: "center",
    paddingBottom: 15,
  },
  buttonText: {
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 24,
    color: "#4B5050",
    marginLeft: 16,
    // marginTop: 12,
  },
  button: {
    borderWidth: 1,
    borderColor: "#4B505040",
    borderRadius: 8,
    marginBottom: 16,
    width: 296,
    height: 48,
    alignSelf: "center",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // backgroundColor: "#4B5050",
  },
  clearIcon: {
    width: 13.97,
    height: 13.97,
    position: "absolute",
    right: 16,
    top: 16,
  },
});
