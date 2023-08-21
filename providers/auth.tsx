import React from 'react';
import { AppState } from 'react-native';

type AuthContextData = {};
const AuthContext = React.createContext({} as AuthContextData);

const min = 1;

const AuthProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [lastInteraction, setLastInteraction] = React.useState(null);

  const isInactive = () => {
    if (lastInteraction) {
      const now = new Date();
      const difference = Number(now) - Number(lastInteraction);
      return difference > min * 60 * 1000; // 5 minutes in milliseconds
    }
  };
  React.useEffect(() => {
    const interval = setInterval(() => {
      setLastInteraction(new Date());
    }, 1000); // 1 second

    return () => {
      clearInterval(interval);
    };
  }, []);

  React.useEffect(() => {
    const unsubscribe = AppState.addEventListener('change', () => {
      if (isInactive() && AppState.currentState === 'background') {
        // logout();
        // storage.deleteLocalData('user');
        console.log('logout by inactivity');
      }
    });

    return () => {
      unsubscribe.remove();
    };
  }, []);

  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};
export default AuthProvider;
