import React from 'react';
import { Slot, Stack } from 'expo-router';
import SWRProvider from '@/providers/swr';
// import { SafeAreaProvider } from 'react-native-safe-area-context';
import useDeviceId from '@/hooks/use-device-id';
import AuthProvider from '@/providers/auth';
import SafeAreaProvider from '@/providers/safe-area';
import { Provider } from 'react-redux';
import store from '@/store';

const RootLayout = () => {
  const state = useDeviceId();
  // Generate a unique device id
  if (state.deviceId) console.log(state.deviceId);

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <AuthProvider>
          <SWRProvider>
            <Slot />
          </SWRProvider>
        </AuthProvider>
      </Provider>
    </SafeAreaProvider>
  );
};
export default RootLayout;
