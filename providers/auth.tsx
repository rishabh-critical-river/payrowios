import React from 'react';
import { AppState } from 'react-native';
import * as TaskManager from 'expo-task-manager';
import * as BackgroundFetch from 'expo-background-fetch';

type AuthContextData = {};
type Status = BackgroundFetch.BackgroundFetchStatus | null;
const AuthContext = React.createContext({} as AuthContextData);

const LOG_OUT = 'LOG_OUT';

TaskManager.defineTask(LOG_OUT, async () => {
  const now = Date.now();
  console.log(
    `Got background fetch call at date: ${new Date(now).toISOString()}`
  );
  // Be sure to return the successful result type!
  return BackgroundFetch.BackgroundFetchResult.NewData;
});

async function registerBackgroundFetchAsync() {
  return BackgroundFetch.registerTaskAsync(LOG_OUT, {
    minimumInterval: 60 * 10, // 10 minutes
  });
}

const AuthProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [status, setStatus] = React.useState<Status>(null);
  const [isRegistered, setIsRegistered] = React.useState(false);

  const onRefresh = async () => {
    await registerBackgroundFetchAsync();
    console.log('App is in foreground, start background task.');
  };

  React.useEffect(() => {
    const unsubscribe = AppState.addEventListener('change', () => {
      if (AppState.currentState === 'background') {
        onRefresh();
      }
    });

    return () => {
      unsubscribe.remove();
    };
  }, []);

  const checkStatusAsync = async () => {
    const status = await BackgroundFetch.getStatusAsync();
    const isRegistered = await TaskManager.isTaskRegisteredAsync(LOG_OUT);
    setStatus(status);
    setIsRegistered(isRegistered);
  };
  React.useEffect(() => {
    checkStatusAsync();
  }, []);

  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};
export default AuthProvider;
