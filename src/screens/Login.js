import { View, Text } from "react-native";
import React from "react";
import AccountBackground, {
  AccountCover,
} from "../components/utility/Account-Background-style";

const LoginScreen = () => {
  return (
    <AccountBackground>
      <AccountCover />
    </AccountBackground>
  );
};

export default LoginScreen;
