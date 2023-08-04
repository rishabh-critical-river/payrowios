import React from 'react';
import { Stack } from 'expo-router';
import { app } from '@/styles/app';
import { SafeAreaView, StatusBar } from 'react-native';

const RootLayout = () => {
  return (
    <SafeAreaView style={app['app-container']}>
      <StatusBar barStyle="light-content" />
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="(onboarding)/get-started" />
      </Stack>
    </SafeAreaView>
  );
};
export default RootLayout;
