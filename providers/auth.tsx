import { useRouter } from 'expo-router';
import React from 'react';

type AuthContextData = {};
const AuthContext = React.createContext({} as AuthContextData);

const AuthProvider = ({ children }: React.PropsWithChildren<{}>) => {
  // Based on condition, redirect to create pin or login or Home
  //   const router = useRouter();

  //   React.useEffect(() => {
  //     router.replace('/auth/login');
  //   }, []);
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};
export default AuthProvider;
