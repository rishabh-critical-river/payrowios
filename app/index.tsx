import React from 'react';

// import Screens from './screens';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { app } from '@/styles/app';
import { GetStartedScreen } from '@/screens/onboarding';

/**
 * Root Screen for PayRow App
 * @returns
 */
function RootScreen() {
  return <GetStartedScreen />;
}

export default RootScreen;
