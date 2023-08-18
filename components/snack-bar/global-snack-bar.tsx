import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SnackbarModel from "./snack-bar";
import useAppSelector from "@/store/hooks/use-selector";
import { useDispatch } from "react-redux";
import { setSnackBarModal } from "@/store/slices/modal";

const GlobalSnackBar = () => {
  const { snackBar } = useAppSelector((state) => state.modal);
  const [snackbarVisible, setSnackbarVisible] = React.useState(false);
  const dispatch = useDispatch();

  React.useEffect(() => {
    let modalTimer: any;
    if (snackBar.content) {
      setSnackbarVisible(true);
      modalTimer = setTimeout(() => {
        setSnackbarVisible(false);
        dispatch(
          setSnackBarModal({
            content: "",
            width: 0,
          })
        );
      }, 800);
    }
    return () => modalTimer && clearTimeout(modalTimer);
  }, [snackBar]);

  console.log("snackBar", snackBar);

  return (
    <SnackbarModel
      duration={800}
      content={snackBar.content}
      width={snackBar.width}
      snackbarVisible={snackbarVisible}
      onDismiss={() => setSnackbarVisible(false)}
    />
  );
};

export default GlobalSnackBar;
