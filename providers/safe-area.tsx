import React from 'react';
import { app } from '@/styles/app';
import { StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SafeAreaProvider = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <SafeAreaView style={app['app-container']}>
      <StatusBar networkActivityIndicatorVisible backgroundColor={'black'} />
      {children}
    </SafeAreaView>
  );
};
export default SafeAreaProvider;
{
  /* <StatusBar style="dark" /> */
}
