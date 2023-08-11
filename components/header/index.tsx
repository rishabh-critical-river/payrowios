import { View, Text, Image } from 'react-native';
import React from 'react';

export default function BackButton() {
  return (
    <View
      style={{
        position: 'absolute',
        right: 0,
        top: 76,
      }}
    >
      <Image
        source={require('@/assets/icons/Watermark.png')}
        style={{
          width: 36,
          height: 50,
        }}
      />
    </View>
  );
}
