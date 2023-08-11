import React from 'react';
import { Text } from 'react-native';

const FooterText = () => {
  return (
    <Text
      style={{
        fontSize: 12,
        backgroundColor: 'white',
        color: '#7f7f7f',
        textAlign: 'center',
        paddingBottom: 15,
      }}
    >
      ©2022 PayRow Company. All rights reserved
    </Text>
  );
};
export default FooterText;
