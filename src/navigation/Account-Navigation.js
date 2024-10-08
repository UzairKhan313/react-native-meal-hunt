import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AccountScreen from "../screens/Account";
import LoginScreen from "../screens/Login";
import RegisterScreen from "../screens/Register";

const Stack = createStackNavigator();

const AccountNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={AccountScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AccountNavigation;
