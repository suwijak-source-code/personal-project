import { createContext, useState } from "react";
import localStorageService from "../service/localStorage";

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorageService.getToken()
  );
  const [user, setUser] = useState({});
  const [roles, setRoles] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        user,
        setUser,
        roles,
        setRoles,
        loginSuccess,
        setLoginSuccess,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
