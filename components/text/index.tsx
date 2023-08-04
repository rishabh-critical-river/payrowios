import React from 'react';
import useThemeColor from '../theme';
import { Text as IText } from 'react-native';
import type { TextProps } from '../theme/type';

function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return <IText style={[{ color }, style]} {...otherProps} />;
}

export default Text;
