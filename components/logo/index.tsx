import React from "react";
import type { ImageStyle, StyleProp } from "react-native";
import { Image } from "react-native";

type PayRowLogoProps = {
  style?: StyleProp<ImageStyle>;
};

const PayRowLogo = (props: PayRowLogoProps) => {
  return (
    <Image
      style={[
        {
          width: 150,
          height: 48.3,
          marginTop: 33,
          alignSelf: "center",
        },
        props?.style,
      ]}
      source={require("@/assets/logos/payrow-logo.png")}
    />
  );
};
export default PayRowLogo;
