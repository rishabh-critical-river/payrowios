import React from 'react';
import { Slot } from 'expo-router';
import useDeviceId from '@/hooks/use-device-id';
import AuthProvider from '@/providers/auth';
import SafeAreaProvider from '@/providers/safe-area';
import { Provider } from 'react-redux';
import store from '@/store';
import Providers from '@/providers';

const RootLayout = () => {
  const state = useDeviceId();
  // Generate a unique device id
  if (state.deviceId) console.log('IMEI', state.deviceId);

  return (
    <Provider store={store}>
      <Providers>
        <SafeAreaProvider>
          <AuthProvider>
            <Slot />
          </AuthProvider>
        </SafeAreaProvider>
      </Providers>
    </Provider>
  );
};
export default RootLayout;
