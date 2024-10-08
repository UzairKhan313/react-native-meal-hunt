import { useContext, createContext, useState } from "react";
import { loginRequest } from "./Auth-Service";

const AuthContext = createContext({});

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then((result) => {
        console.log(result.user);
        // setUser();
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);

        console.log(err);
        console.log(err.message);
        setError(err.message);
      });
  };
  return (
    <AuthContext.Provider
      value={{ isAuthenticated: !!user, user, isLoading, error, onLogin }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
