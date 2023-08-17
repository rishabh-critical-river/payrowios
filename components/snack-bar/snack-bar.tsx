import React from "react";
import { Snackbar } from "react-native-paper";
import { View, Text } from "react-native";
import useAppSelector from "@/store/hooks/use-selector";

interface SnackbarComponentProps {
  content: string;
  duration: number;
  width: number;
  snackbarVisible: boolean;
  onDismiss: () => void;
}

const SnackbarModel: React.FC<SnackbarComponentProps> = ({
  content,
  width,
  snackbarVisible,
  onDismiss,
}) => {
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
      onDismiss={onDismiss}
    >
      <Text style={{ textAlign: "center" }}>{content}</Text>
    </Snackbar>
  );
};
export default SnackbarModel;
