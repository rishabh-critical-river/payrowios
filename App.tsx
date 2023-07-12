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
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
