import React from "react";
import { Snackbar } from "react-native-paper";
import { View, Text } from "react-native";

interface SnackbarComponentProps {
  content: string;
  duration: number;
}
const SnackbarModel: React.FC<SnackbarComponentProps> = ({
  content,
  duration,
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
        width: "60%",
        alignSelf: "center",
        backgroundColor: "white",
      }}
      visible={snackbarVisible}
      onDismiss={() => setSnackbarVisible(false)}
    >
      <Text>{content}</Text>
    </Snackbar>
  );
};
export default SnackbarModel;
