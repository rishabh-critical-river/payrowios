import React from 'react';
import useThemeColor from '../theme';
import { View as IView } from 'react-native';
import type { ViewProps } from '../theme/type';

function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    'background'
  );

  return <IView style={[{ backgroundColor }, style]} {...otherProps} />;
}

export default View;
