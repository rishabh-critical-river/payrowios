import React from 'react';
import { app } from '@/styles/app';
import { StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SafeAreaProvider = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <SafeAreaView style={app['app-container']}>
      <StatusBar barStyle="light-content" />
      {children}
    </SafeAreaView>
  );
};
export default SafeAreaProvider;
