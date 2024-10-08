import React from "react";
import { Button, Text } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { SafeArea } from "../components/utility/Safe-Area";

// Importing screens
import RestaurantNavigator from "./Restaurant-Navigation";
import MapScreen from "../screens/Map";
import { useAuthContext } from "../services/auth/Auth-Context";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  // Route name : icon name,
  Resturant: "restaurant",
  Settings: "settings",
  Map: "map",
};

const createScreenOption = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    tabBarActiveTintColor: "tomato",
    tabBarInactiveTintColor: "gray",
    headerShown: false,
  };
};

const SettingsScreen = () => {
  const { onLogout } = useAuthContext();
  return (
    <SafeArea>
      <Text>Setting Screen</Text>
      <Button title="logout" onPress={() => onLogout()} />
    </SafeArea>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={createScreenOption}>
        <Tab.Screen name="Resturant" component={RestaurantNavigator} />
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
