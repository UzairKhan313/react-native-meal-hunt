import { useContext, createContext, useState, useEffect } from "react";
import { loginRequest, registerRequest } from "./Auth-Service";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../app/firebase-two";

const AuthContext = createContext({});

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then((result) => {
        setUser(result.user);
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.message);
      });
  };

  const onRegister = (email, password, repeatPassword) => {
    setIsLoading(true);
    if (password !== repeatPassword) {
      setError("Password do not match!.");
      return;
    }

    registerRequest(email, password)
      .then((result) => {
        setUser(result.user);
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  };

  // Logout function
  const onLogout = async () => {
    try {
      await signOut(auth); // Firebase sign out
      setUser(null); // Clear user state after logout
    } catch (error) {}
  };

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser); // Automatically manages user state
    setIsLoading(false);
    setError(null);
  });

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onLogin,
        onRegister,
        onLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
