import React, { useState } from "react";
import { ActivityIndicator, MD2Colors } from "react-native-paper";

import AccountBackground, {
  AccountContainer,
  AccountCover,
  AuthButton,
  AuthInput,
  Title,
} from "../components/utility/Account-Background-style";

import { useAuthContext } from "../services/auth/Auth-Context";
import { Spacer } from "../components/spacer/space";
import { Text } from "../components/typography/Text";

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const { onRegister, isLoading, error } = useAuthContext();
  return (
    <AccountBackground>
      <AccountCover />
      <Title>Register</Title>
      <AccountContainer>
        <AuthInput
          label="E-mail"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(u) => setEmail(u)}
        />
        <Spacer position="top" size="large">
          <AuthInput
            label="Password"
            value={password}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(p) => setPassword(p)}
          />
        </Spacer>
        <Spacer position="top" size="large">
          <AuthInput
            label="Confrim Password"
            value={repeatPassword}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(p) => setRepeatPassword(p)}
          />
        </Spacer>
        {error && (
          <Spacer position="top" size="large">
            <Text variant="error">{error}</Text>
          </Spacer>
        )}
        <Spacer position="top" size="large">
          {!isLoading ? (
            <AuthButton
              icon="email"
              mode="contained"
              onPress={() => onRegister(email, password, repeatPassword)}
            >
              Register
            </AuthButton>
          ) : (
            <ActivityIndicator animate={true} color={MD2Colors.red400} />
          )}
        </Spacer>
      </AccountContainer>
      <Spacer position="top" size="large">
        <AuthButton mode="contained" onPress={() => navigation.goBack()}>
          Back
        </AuthButton>
      </Spacer>
    </AccountBackground>
  );
};

export default RegisterScreen;
