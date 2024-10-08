import React from "react";
import AppNavigator from "./App-Navigation";
import { useAuthContext } from "../services/auth/Auth-Context";
import AccountNavigation from "./Account-Navigation";

const Naivgation = () => {
  const { user, isAuthenticated } = useAuthContext();
  return isAuthenticated ? <AppNavigator /> : <AccountNavigation />;
};

export default Naivgation;
