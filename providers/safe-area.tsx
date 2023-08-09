import React from 'react';
import { app } from '@/styles/app';

import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

const SafeAreaProvider = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <SafeAreaView style={app['app-container']}>
      <StatusBar style="inverted" />
      {children}
    </SafeAreaView>
  );
};
export default SafeAreaProvider;
