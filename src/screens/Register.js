import React from "react";
import AccountBackground, {
  AccountCover,
  Title,
} from "../components/utility/Account-Background-style";

const RegisterScreen = () => {
  return (
    <AccountBackground>
      <AccountCover />
      <Title>Register</Title>
    </AccountBackground>
  );
};

export default RegisterScreen;
