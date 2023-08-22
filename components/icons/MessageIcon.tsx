import { SVGIconProps } from "@/typings/svg";
import * as React from "react";
import Svg, { Path } from "react-native-svg";

const MessageIcon = (props: SVGIconProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill={props.color}
      fillOpacity={0.85}
      d="M18 8.016V6H6v2.016h12Zm-3.984 6V12H6v2.016h8.016ZM6 9v2.016h12V9H6Zm14.016-6.984c.53 0 .984.203 1.359.609.406.375.61.828.61 1.36v12c0 .53-.204 1-.61 1.406-.375.406-.828.609-1.36.609H6l-3.984 3.984v-18c0-.53.187-.984.562-1.359.406-.406.875-.61 1.406-.61h16.032Z"
    />
  </Svg>
);
export default MessageIcon;
