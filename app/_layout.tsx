import React from 'react';

// import Screens from './screens';
import { SafeAreaView, StatusBar } from 'react-native';
import { app } from '@/styles/app';
import { Stack } from 'expo-router';

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="(onboarding)/get-started" />
    </Stack>
  );
};
export default RootLayout;
