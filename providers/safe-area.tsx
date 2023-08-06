import { app } from '@/styles/app';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
const SafeAreaProvider = () => {
  return (
    <SafeAreaView style={app['app-container']}>
      <StatusBar barStyle="light-content" />
    </SafeAreaView>
  );
};
export default SafeAreaProvider;
