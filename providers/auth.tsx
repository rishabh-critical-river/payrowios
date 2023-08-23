import React from 'react';

type AuthContextData = {};

const AuthContext = React.createContext({} as AuthContextData);

const AuthProvider = ({ children }: React.PropsWithChildren<{}>) => {
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};
export default AuthProvider;
