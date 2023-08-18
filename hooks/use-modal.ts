import { setSnackBarModal } from "@/store/slices/modal";
import React from "react";
import { useDispatch } from "react-redux";

/**
 * Basic hook to use OTP interval
 * @param {number} interval - The interval in seconds
 */

const useModal = () => {
  const dispatch = useDispatch();

  const setSnackbarModal = React.useCallback(
    ({ content, width }: { content: string; width: number }) => {
      dispatch(setSnackBarModal({ content: content, width: width }));
    },
    [dispatch]
  );

  return { setSnackbarModal };
};

export default useModal;
