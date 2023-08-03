import React from 'react';
import { Image } from 'react-native';

const PayRowLogo = () => {
  return (
    <Image
      style={{
        width: 150,
        height: 48.3,
        marginTop: 33,
        alignSelf: 'center',
      }}
      source={require('@/assets/logo/payrow-logo.png')}
    />
  );
};
export default PayRowLogo;
