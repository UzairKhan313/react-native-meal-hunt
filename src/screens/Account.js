import React from "react";
import LottieView from "lottie-react-native";
import AccountBackground, {
  AccountContainer,
  AccountCover,
  AnimationWrapper,
  AuthButton,
  Title,
} from "../components/utility/Account-Background-style";

import { Spacer } from "../components/spacer/space";

const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountCover />
      <AnimationWrapper>
        <LottieView
          source={require("../../assets/water-million.json")}
          key="animation"
          autoPlay
          style={{
            width: 350,
            height: 350,
          }}
          loop
          resizeMode="cover"
        />
      </AnimationWrapper>
      <Title>Meal Hunt</Title>
      <AccountContainer>
        <AuthButton
          icon="lock-open-outline"
          color="black"
          mode="contained"
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </AuthButton>
        <Spacer position="top" size="large">
          <AuthButton
            icon="lock-open-outline"
            color="black"
            mode="contained"
            onPress={() => navigation.navigate("Register")}
          >
            Register
          </AuthButton>
        </Spacer>
      </AccountContainer>
    </AccountBackground>
  );
};

export default AccountScreen;
