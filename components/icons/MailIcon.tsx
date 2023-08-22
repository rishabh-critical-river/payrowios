import { SVGIconProps } from "@/typings/svg";
import * as React from "react";
import Svg, { Path } from "react-native-svg";

const MailIcon = (props: SVGIconProps) => (
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
      d="M20.016 8.016V6L12 11.016 3.984 6v2.016L12 12.984l8.016-4.968Zm0-4.032c.53 0 .984.204 1.359.61.406.406.61.875.61 1.406v12c0 .531-.204 1-.61 1.406-.375.407-.828.61-1.36.61H3.986c-.532 0-1-.203-1.407-.61A2.011 2.011 0 0 1 2.016 18V6c0-.531.187-1 .562-1.406.406-.407.875-.61 1.406-.61h16.032Z"
    />
  </Svg>
);
export default MailIcon;
