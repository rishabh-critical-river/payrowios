import React from 'react';
import { Slot, Stack } from 'expo-router';
import SWRProvider from '@/providers/swr';
// import { SafeAreaProvider } from 'react-native-safe-area-context';
import useDeviceId from '@/hooks/use-device-id';
import AuthProvider from '@/providers/auth';
import SafeAreaProvider from '@/providers/safe-area';

const RootLayout = () => {
  const state = useDeviceId();
  // Generate a unique device id
  if (state.deviceId) console.log(state.deviceId);

  return (
    <SafeAreaProvider>
      <AuthProvider>
        <SWRProvider>
          <Slot />
        </SWRProvider>
      </AuthProvider>
    </SafeAreaProvider>
  );
};
export default RootLayout;
