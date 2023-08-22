import React from 'react';
import { Slot } from 'expo-router';
import useDeviceId from '@/hooks/use-device-id';
import AuthProvider from '@/providers/auth';
import SafeAreaProvider from '@/providers/safe-area';
import { Provider } from 'react-redux';
import store from '@/store';
import Providers from '@/providers';
import GlobalSnackBar from '@/components/snack-bar/global-snack-bar';
import 'react-native-gesture-handler';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';

const RootLayout = () => {
  const state = useDeviceId();
  // Generate a unique device id
  if (state.deviceId) console.log('IMEI', state.deviceId);

  const tap = Gesture.Tap().onStart(() => {
    console.log('tap');
  });

  return (
    <GestureDetector gesture={tap}>
      <Provider store={store}>
        <Providers>
          <SafeAreaProvider>
            <AuthProvider>
              <Slot />
            </AuthProvider>
            <GlobalSnackBar />
          </SafeAreaProvider>
        </Providers>
      </Provider>
    </GestureDetector>
  );
};
export default RootLayout;
