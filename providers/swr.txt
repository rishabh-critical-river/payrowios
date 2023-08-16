import { AppState, AppStateStatus } from 'react-native';
import { SWRConfig } from 'swr';
import React from 'react';
import fetcher from '@/apis/fetcher';

const SWRProvider = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <SWRConfig
      value={{
        provider: () => new Map(),
        isVisible: () => {
          return true;
        },
        initFocus,
        fetcher: fetcher,
      }}
    >
      {children}
    </SWRConfig>
  );
};
export default SWRProvider;

const initFocus = (callback: () => void) => {
  let appState = AppState.currentState;

  const onAppStateChange = (nextAppState: AppStateStatus) => {
    /* If it's resuming from background or inactive mode to active one */
    if (appState.match(/inactive|background/) && nextAppState === 'active') {
      callback();
    }
    appState = nextAppState;
  };

  // Subscribe to the app state change events
  const subscription = AppState.addEventListener('change', onAppStateChange);

  return () => {
    subscription.remove();
  };
};
