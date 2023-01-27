import { createContext, useCallback, useEffect, useState } from "react";

const AuthContext = createContext({
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  user: null,
  setUser: () => {},
  login: () => {},
  logout: () => {},
  localStorageRecordName: "",
});

export const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const localStorageRecordName = "1000sunny-user";

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem(localStorageRecordName)));
  }, []);

  useEffect(() => {
    if (user) setIsAuthenticated(true);
  }, [user]);

  const login = useCallback((user, rememberMe) => {
    setUser(user);
    setIsAuthenticated(true);
    if (rememberMe)
      localStorage.setItem(localStorageRecordName, JSON.stringify(user));
  }, []);

  const logout = useCallback(() => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem(localStorageRecordName);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
