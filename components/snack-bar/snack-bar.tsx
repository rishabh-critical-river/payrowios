import React from "react";
import { Snackbar } from "react-native-paper";
import { View, Text } from "react-native";

interface SnackbarComponentProps {
  content: string;
  duration: number;
  width: number;
}
const SnackbarModel: React.FC<SnackbarComponentProps> = ({
  content,
  duration,
  width,
}) => {
  const [snackbarVisible, setSnackbarVisible] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setSnackbarVisible(false);
    }, duration);
  }, []);
  return (
    <Snackbar
      style={{
        width: width,
        alignSelf: "center",
        backgroundColor: "white",
        position: "absolute",
        bottom: 90,
      }}
      visible={snackbarVisible}
      onDismiss={() => setSnackbarVisible(false)}
    >
      <Text style={{ textAlign: "center" }}>{content}</Text>
    </Snackbar>
  );
};
export default SnackbarModel;
