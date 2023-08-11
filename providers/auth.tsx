import React from 'react';
import { useFocusEffect, useRouter } from 'expo-router';
import useStorageData from '@/apis/hooks/use-storage-data';

type AuthContextData = {};
const AuthContext = React.createContext({} as AuthContextData);

const AuthProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const router = useRouter();
  const { user } = useStorageData('user');

  // Redirect to the correct page
  // useFocusEffect(() => {
  //   if (user?.token) {
  //     router.replace('/products/add-item');
  //   } else {
  //     router.replace('/auth/enter-pin');
  //   }
  // });

  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};
export default AuthProvider;
