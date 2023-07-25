import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  StatusBar,
} from "react-native";
import LanguageSelection from "./screens/onboarding/LanguageSelection";
import CreateAccount from "./screens/onboarding/CreateAccount";
import HomeScreen from "./screens/home/HomeScreen";
import TapToPay from "./screens/home/HomeComponents/TapToPay";
import AddItem from "./screens/home/HomeComponents/AddItem";
import TapCard from "./screens/home/HomeComponents/TapCard";
import EnterPin from "./screens/home/HomeComponents/EnterPin";
import Confirmation from "./screens/home/HomeComponents/Confirmation";
import NewPayment from "./screens/home/HomeComponents/NewPayment";
import Contact from "./screens/home/HomeComponents/contact";
import Refund from "./screens/home/HomeComponents/refund";
import OtpRefund from "./screens/home/HomeComponents/otpRefund";
import ProductSelection from "./screens/home/HomeComponents/productSelection";
import PaymentSummary from "./screens/home/HomeComponents/PaymentSummary";
import PaymentMode from "./screens/home/HomeComponents/paymentMode";
import PaymentHistory from "./screens/home/HomeComponents/PaymentHistory";
import HistoryMethods from "./screens/home/HomeComponents/historyMethods";
import DailyReport from "./screens/home/HomeComponents/DailyReport";
import MonthlyReport from "./screens/home/HomeComponents/MonthlyReport";
import AboutPayrow from "./screens/home/HomeComponents/AboutPayrow";
import CashReceivedMachine from "./screens/home/HomeComponents/CashReceivedMachine";
import InvoiceRecall from "./screens/home/HomeComponents/InvoiceRecall";
import PosAndRetail from "./screens/home/HomeComponents/PosAndRetail";
import SoftPos from "./screens/home/HomeComponents/SoftPos";
import PayByLink from "./screens/home/HomeComponents/PayByLink";
import PayByQrCode from "./screens/home/HomeComponents/PayByQrCode";

import PaymentGateWay from "./screens/home/HomeComponents/PaymentGateWay";
import Wps from "./screens/home/HomeComponents/Wps";
import Vat from "./screens/home/HomeComponents/Vat";
import Kvyc from "./screens/home/HomeComponents/Kvyc";
import BuyNowPayLater from "./screens/home/HomeComponents/BuyNowPayLater";
import Wallet from "./screens/home/HomeComponents/Wallet";
import PayRowPrepaids from "./screens/home/HomeComponents/PayRowPrepaid";
import Support from "./screens/home/HomeComponents/Support";
import NewComplain from "./screens/home/HomeComponents/NewComplain";
import RegisterComplain from "./screens/home/HomeComponents/RegisteredComplain";
import ContactUs from "./screens/home/HomeComponents/ContactUse";
import InvoiceRecalltwo from "./screens/home/HomeComponents/InvoiceRecalltwo";
import InvoiceRecallthree from "./screens/home/HomeComponents/InvoiceRecallthree";
import PaymentDetails from "./screens/home/HomeComponents/PaymentDetails";
import ConfirmationInvoice from "./screens/home/HomeComponents/ConfirmationInvoice";
import CashPay from "./screens/home/HomeComponents/CashPay";
import QRCode from "./screens/home/HomeComponents/QrCode";
import Login from "screens/onboarding/login";
// import SoftPose from "./screens/home/HomeComponents/SoftPose";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="selectLanaguage"
            component={LanguageSelection}
            options={{ headerShown: false }}
          />
            <Stack.Screen
            name="Login "
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Create Account"
            component={CreateAccount}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="TapToPay"
            component={TapToPay}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AddItem"
            component={AddItem}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="TapCard"
            component={TapCard}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="EnterPin"
            component={EnterPin}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Confirmation"
            component={Confirmation}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="NewPayment"
            component={NewPayment}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="contact"
            component={Contact}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="refund"
            component={Refund}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="otpRefund"
            component={OtpRefund}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="productSelection"
            component={ProductSelection}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="paymentSummary"
            component={PaymentSummary}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="paymentMode"
            component={PaymentMode}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="paymentHistory"
            component={PaymentHistory}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="historyMethods"
            component={HistoryMethods}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="dailyReport"
            component={DailyReport}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="monthlyReport"
            component={MonthlyReport}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="aboutPayrow"
            component={AboutPayrow}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="cashReceivedMachine"
            component={CashReceivedMachine}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="invoiceRecall"
            component={InvoiceRecall}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="posandretail"
            component={PosAndRetail}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="softpos"
            component={SoftPos}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="paybylink"
            component={PayByLink}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="paybyqrcode"
            component={PayByLink}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="paymentgateway"
            component={PaymentGateWay}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="wps"
            component={Wps}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="vat"
            component={Vat}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="kvyc"
            component={Kvyc}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="buynowpaylater"
            component={BuyNowPayLater}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="registercomplain"
            component={RegisterComplain}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="wallet"
            component={Wallet}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="payrowprepaid"
            component={PayRowPrepaids}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="paymentdetails"
            component={PaymentDetails}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="support"
            component={Support}
            options={{ headerShown: false }}
          />
          {/* <Stack.Screen
            name="softpose"
            payrowprepaid 
            component={SoftPose}
            options={{ headerShown: false }}
           
          /> */}
          <Stack.Screen
            name="newcomplain"
            component={NewComplain}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="contactus"
            component={ContactUs}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Recallss"
            component={InvoiceRecalltwo}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="InvoiceRecallthree"
            component={InvoiceRecallthree}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ConfirmationInvoice"
            component={ConfirmationInvoice}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="cashPay"
            component={CashPay}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="QrCode"
            component={PayByQrCode}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="QrCodePay"
            component={QRCode}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
