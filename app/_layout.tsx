import React from 'react';
import { Slot } from 'expo-router';
import SWRProvider from '@/providers/swr';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useDeviceId from '@/hooks/use-device-id';
import AuthProvider from '@/providers/auth';

const RootLayout = () => {
  const state = useDeviceId();
  // Generate a unique device id
  if (state.deviceId) console.log(state.deviceId);

  return (
    <AuthProvider>
      <SafeAreaProvider>
        <SWRProvider>
          <Slot />
        </SWRProvider>
      </SafeAreaProvider>
    </AuthProvider>
  );
};
export default RootLayout;
