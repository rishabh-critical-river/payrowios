import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import useStyle from './style';
import { View, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

type Props = {
  children?: React.ReactNode;
  endIcon?: React.ReactNode;
} & React.ComponentProps<typeof TouchableOpacity>;

const Button = (props: Props) => {
  const styles = useStyle();
  return (
    <TouchableOpacity {...props} style={styles.button}>
      <View style={styles.container}>
        <Text style={styles.text}>{props.children}</Text>
        {props.endIcon && <View style={styles.endIcon}>{props.endIcon}</View>}
      </View>
    </TouchableOpacity>
  );
};
export default Button;
