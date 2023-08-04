import React from 'react';
import { Image } from 'react-native';
import Arrow from '@/assets/icons/arrow_back.png';

const ArrowBack = () => {
  return (
    <Image
      source={Arrow}
      style={{
        width: 16.03,
        height: 16.03,
        marginRight: 35.98,
      }}
    />
  );
};
export default ArrowBack;
