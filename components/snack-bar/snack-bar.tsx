import React from "react";
import { Snackbar } from "react-native-paper";
import { View, Text } from "react-native";
import { Dimensions } from "react-native";

interface SnackbarComponentProps {
  content: string;
  duration: number;
}
const SnackbarModel: React.FC<SnackbarComponentProps> = ({
  content,
  duration,
}) => {
  const { width } = Dimensions.get("screen");
  const [snackbarVisible, setSnackbarVisible] = React.useState(true);
  const [textWidth, setTextWidth] = React.useState(0);
  React.useEffect(() => {
    setTimeout(() => {
      setSnackbarVisible(false);
    }, duration);
  }, []);
  const measureText = (text: string) => {
    const tempText = (
      <Text onLayout={(event) => setTextWidth(event.nativeEvent.layout.width)}>
        {text}
      </Text>
    );
    return tempText;
  };
  const dynamicConatinerStyle = {
    width: textWidth + 20,
  };
  return (
    <Snackbar
      style={
        {
          // width: null,
          // alignSelf: "center",
          // backgroundColor: "white",
          // position: "relative",
          // bottom: 300,
          // zIndex: 999,
        }
      }
      visible={true}
      onDismiss={() => setSnackbarVisible(false)}
      wrapperStyle={{
        width: "auto",
        alignSelf: "center",
        // maxWidth: "70%",
        // minWidth: width / 1.5,
      }}
    >
      {measureText(content)}
      <View style={[dynamicConatinerStyle]}>
        <Text>{content}</Text>
      </View>
    </Snackbar>
  );
};
export default SnackbarModel;
