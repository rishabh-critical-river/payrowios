import React from 'react';
import { Slot, Stack } from 'expo-router';
import { app } from '@/styles/app';
import { SafeAreaView, StatusBar } from 'react-native';

const RootLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <SafeAreaView style={app['app-container']}>
        <StatusBar barStyle="light-content" />
      </SafeAreaView>
    </Stack>
  );
};
export default RootLayout;
