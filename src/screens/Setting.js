import React, { useState, useCallback } from "react";
import { TouchableOpacity } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { List, Avatar } from "react-native-paper";
import styled from "styled-components/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { useAuthContext } from "../services/auth/Auth-Context";
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
  const [photo, setPhoto] = useState(null);

  useCallback(
    (getProfileImage = async (currUser) => {
      try {
        const profileImage = await AsyncStorage.getItem(
          `${currUser.uid}-photo`
        );
        setPhoto(profileImage);
      } catch (error) {
        console.log(error);
      }
    }),
    [user]
  );

  useFocusEffect(() => {
    getProfileImage(user);
  });

  return (
    <SettingScreenContainer>
      <AvatarContainer>
        <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
          {photo ? (
            <Avatar.Image
              size={160}
              source={{ uri: photo }}
              backgroundColor="#2182BD"
            />
          ) : (
            <Avatar.Icon size={160} icon="human" backgroundColor="#2182BD" />
          )}
        </TouchableOpacity>
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
