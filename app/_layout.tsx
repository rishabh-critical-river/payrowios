import React from 'react';
import { Slot } from 'expo-router';
import SWRProvider from '@/providers/swr';
import useDeviceId from '@/hooks/use-device-id';
import AuthProvider from '@/providers/auth';
import SafeAreaProvider from '@/providers/safe-area';
import { Provider } from 'react-redux';
import store from '@/store';

const RootLayout = () => {
  const state = useDeviceId();
  // Generate a unique device id
  if (state.deviceId) console.log('IMEI', state.deviceId);

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <AuthProvider>
          <SWRProvider>
            <Slot />
          </SWRProvider>
        </AuthProvider>
      </SafeAreaProvider>
    </Provider>
  );
};
export default RootLayout;
