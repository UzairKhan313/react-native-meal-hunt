import { createStackNavigator } from "@react-navigation/stack";

import SettingsScreen from "../screens/Setting";
import FavoritesScreen from "../screens/Favorites";

const SettingsStack = createStackNavigator();

export const SettingsNavigator = () => {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Setting" component={SettingsScreen} />
      <SettingsStack.Screen name="Favourites" component={FavoritesScreen} />
    </SettingsStack.Navigator>
  );
};
