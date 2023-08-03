import React from 'react';
import { Image } from 'react-native';

const ArrowBack = () => {
  return (
    <Image
      source={require('@/assets/icons/arrow_back.png')}
      style={{
        width: 16.03,
        height: 16.03,
        marginRight: 35.98,
      }}
    />
  );
};
export default ArrowBack;
