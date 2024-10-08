import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import AppNavigator from "./App-Navigation";
import { useAuthContext } from "../services/auth/Auth-Context";
import AccountNavigation from "./Account-Navigation";

const Naivgation = () => {
  const { user, isAuthenticated } = useAuthContext();
  return (
    <NavigationContainer>
      {isAuthenticated ? <AppNavigator /> : <AccountNavigation />}
    </NavigationContainer>
  );
};

export default Naivgation;
