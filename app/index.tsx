import React from 'react';

// import Screens from './screens';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { app } from '@/styles/app';
import { GetStartedScreen } from '@/screens/onboarding';
import Text from '@/components/text';

/**
 * Root Screen for PayRow App
 * @returns
 */
function RootScreen() {
  return (
    <SafeAreaView style={app['app-container']}>
      <Text>Global</Text>
      <StatusBar barStyle="light-content" />
      <GetStartedScreen />
    </SafeAreaView>
  );
}

export default RootScreen;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: 'white',
  },
  logo: {
    width: 150,
    height: 48.3,
    alignSelf: 'center',
    marginTop: 33,
  },
  selectLanguage: {
    width: 163,
    height: 28,
    fontSize: 17,

    color: '#333333',
    fontWeight: '400',
    marginTop: 24.47,
    alignSelf: 'center',
  },
  languageText: {
    fontSize: 14,
    paddingLeft: 16,
    fontWeight: '500',
    lineHeight: 20,
    justifyContent: 'center',
    color: '#4B5050CC',
  },
  languages: {
    flexDirection: 'column',

    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    width: 303,
    height: 20,
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '400',
    color: '#4B5050',
    textAlign: 'center',
    marginTop: 6,
    alignSelf: 'center',
    marginBottom: 15,
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  box: {
    display: 'flex',
    borderWidth: 1,
    borderColor: '#4B505033',
    backgroundColor: '#ffffff',
    borderRadius: 8,
    marginBottom: 15,
    width: 328,
    height: 48,
    justifyContent: 'center',
  },
  button: {
    alignSelf: 'center',
    color: '#4B5050',

    padding: 10,
    fontSize: 20,
    height: 48,
    width: 328,
    cursor: 'pointer',
    borderRadius: 70,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  arrow: {
    display: 'flex',
    position: 'relative',
    borderWidth: 1,
    borderColor: 'white',
    width: 40,
    height: 5,
    backgroundColor: 'white',
  },
  arrowTriangle: {
    display: 'flex',
    borderWidth: 1,
    position: 'absolute',
    width: 20,
    height: 5,
    borderColor: 'white',
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderRightWidth: 1,
    transform: [{ rotate: '45deg' }],
    right: 9,
    top: 19,
  },
  arrowTriangleRight: {
    display: 'flex',
    borderWidth: 1,
    position: 'absolute',
    width: 20,
    height: 5,
    borderColor: 'white',
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderLeftWidth: 1,
    transform: [{ rotate: '-45deg' }],
    right: 9,
    top: 36,
  },
});
