import { Feather, Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

interface Props {
  navigation: any;
}

const EnterPin: React.FC<Props> = ({ navigation }) => {
  const [pin, setPin] = useState<string>("");

  // Function to handle clicking a number
  const handleNumberClick = (number: string) => {
    if (pin.length < 4) {
      // If the PIN is empty, replace the asterisk with the entered number
      // Otherwise, append the number to the existing PIN
      setPin((prevPin) => (prevPin.length === 0 ? number : prevPin + number));
    }
  };

  // Function to handle backspace
  const handleBackspace = () => {
    setPin((prevPin) => prevPin.slice(0, -1));
  };

  // Function to handle PIN confirmation
  const handleConfirmPin = () => {
    if (pin.length === 4) {
      // Perform the necessary PIN verification logic here
      // For example, check if the entered PIN matches the stored PIN
      const storedPin = "1234"; // Replace this with your actual stored PIN
      if (pin === storedPin) {
        navigation.navigate("Confirmation");
      } else {
        // Perform some error handling, e.g., show an error message
        console.log("Invalid PIN. Please try again.");
      }
    }
  };

  return (
    <>

      <View style={styles.container}>
      <View
          style={{
            paddingLeft: 19.98,
            paddingTop: 17,
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#fff",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("TapCard");
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
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "500",
              lineHeight: 32,
              letterSpacing: 0.5,
              color: "#333333",
            }}
          >
            Enter Pin
          </Text>
        </View>
        <Image style={styles.logo} source={require("./payrowLogo.png")} />
        <Text style={styles.enterPinText}>Please enter your PIN</Text>
        <View style={styles.pinContainer}>
          {Array.from({ length: 4 }, (_, index) => (
            <Text key={index} style={styles.pinDigit}>
              {pin[index] ? "*" : ""}
            </Text>
          ))}
        </View>

        <View style={styles.numberPadContainer}>
          <TouchableOpacity
            style={styles.numberButton}
            onPress={() => handleNumberClick("1")}
          >
            <Text style={styles.numberButtonText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.numberButton}
            onPress={() => handleNumberClick("2")}
          >
            <Text style={styles.numberButtonText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.numberButton}
            onPress={() => handleNumberClick("3")}
          >
            <Text style={styles.numberButtonText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.numberButton}
            onPress={() => handleNumberClick("4")}
          >
            <Text style={styles.numberButtonText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.numberButton}
            onPress={() => handleNumberClick("5")}
          >
            <Text style={styles.numberButtonText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.numberButton}
            onPress={() => handleNumberClick("6")}
          >
            <Text style={styles.numberButtonText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.numberButton}
            onPress={() => handleNumberClick("7")}
          >
            <Text style={styles.numberButtonText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.numberButton}
            onPress={() => handleNumberClick("8")}
          >
            <Text style={styles.numberButtonText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.numberButton}
            onPress={() => handleNumberClick("9")}
          >
            <Text style={styles.numberButtonText}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.numberButton}
            onPress={handleBackspace}
          >
            <Image
              source={require("./backspace.png")}
              style={styles.backspaceIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.numberButton}
            onPress={() => handleNumberClick("0")}
          >
            <Text style={styles.numberButtonText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.numberButton}
            onPress={handleConfirmPin}
          >
            <Ionicons
              name="arrow-forward-circle-sharp"
              size={44}
              color="#72AC47"
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.footerContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Confirmation");
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>CANCEL</Text>
          <Image
            source={require("./clear.png")}
            style={{
              width: 13.97,
              height: 13.97,
              position: "absolute",
              right: 16,
              top: 16,
            }}
          />
        </TouchableOpacity>
        <Text style={styles.footerText}>
          ©2022 PayRow Company. All rights reserved
        </Text>
      </View>
    </>
  );
};

export default EnterPin;

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
  },
  enterPinText: {
    fontSize: 22,
    fontWeight: "400",
    lineHeight: 28,
    textAlign: "center",
    marginTop: 15,
    color: "#333333",
  },
  pinContainer: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 20,
  },
  pinDigit: {
    fontSize: 32,
    fontWeight: "700",
    marginRight: 20,
  },
  numberPadContainer: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 26,
    marginLeft: 30,
    flexWrap: "wrap",
    width: 296,
  },
  numberButton: {
    borderWidth: 1,
    borderColor: "#4B50504D",
    borderRadius: 8,
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4B505005",
    marginRight: 26,
    marginBottom: 26,
  },
  numberButtonText: {
    fontSize: 28,
    fontWeight: "400",
    color: "#4B5050",
    alignSelf: "center",
    lineHeight: 36,
  },
  backspaceIcon: {
    alignSelf: "center",
    width: 25,
    height: 20,
  },
  goIcon: {
    alignSelf: "center",
    width: 40,
    height: 40,
  },
  footerContainer: {
    backgroundColor: "white",
  },
  button: {
    borderWidth: 1,
    borderColor: "#4B505040",
    borderRadius: 8,
    marginBottom: 16,
    width: 296,
    height: 48,
    alignSelf: "center",
    backgroundColor: "#4B5050",
  },
  buttonText: {
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 24,
    color: "#FFFFFF",
    marginLeft: 16,
    marginTop: 12,
  },
  footerText: {
    fontSize: 12,
    backgroundColor: "white",
    color: "#7f7f7f",
    textAlign: "center",
    paddingBottom: 15,
  },
});
