import React from "react";
import { List, Avatar } from "react-native-paper";
import styled from "styled-components/native";

import { useAuthContext } from "../services/auth/Auth-Context";
import { SafeArea } from "../components/utility/Safe-Area";
import { View } from "react-native";
import { Spacer } from "../components/spacer/space";
import { Text } from "../components/typography/Text";

const SettingItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;

const AvatarContainer = styled(View)`
  align-items: center;
`;

const SettingScreenContainer = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useAuthContext();
  return (
    <SettingScreenContainer>
      <AvatarContainer>
        <Avatar.Icon size={160} icon="human" backgroundColor="#2182BD" />
        <Spacer position="top" size="large">
          <Text variant="label">{user.email}</Text>
        </Spacer>
      </AvatarContainer>
      <List.Section>
        <SettingItem
          title="Favourites"
          description="View your favourites"
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => navigation.navigate("Favourites")}
        />
        <SettingItem
          title="Logout"
          left={(props) => <List.Icon {...props} color="black" icon="door" />}
          onPress={onLogout}
        />
      </List.Section>
      {/* <Button title="logout" onPress={() => onLogout()} /> */}
    </SettingScreenContainer>
  );
};

export default SettingsScreen;
