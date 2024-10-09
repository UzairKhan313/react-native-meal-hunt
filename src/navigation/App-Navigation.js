import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { SafeArea } from "../components/utility/Safe-Area";

// Importing screens
import RestaurantNavigator from "./Restaurant-Navigation";
import MapScreen from "../screens/Map";
import FavouritesProvider from "../services/favourites/Favourites-Context";
import { LocationContextProvider } from "../services/location/location-context";
import { RestaurantsContextProvider } from "../services/restaurant/restaurant-context";
import { SettingsNavigator } from "./Setting-Navigtion";

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

const AppNavigator = () => {
  return (
    <FavouritesProvider>
      <LocationContextProvider>
        <RestaurantsContextProvider>
          <Tab.Navigator screenOptions={createScreenOption}>
            <Tab.Screen name="Resturant" component={RestaurantNavigator} />
            <Tab.Screen name="Map" component={MapScreen} />
            <Tab.Screen name="Settings" component={SettingsNavigator} />
          </Tab.Navigator>
        </RestaurantsContextProvider>
      </LocationContextProvider>
    </FavouritesProvider>
  );
};

export default AppNavigator;
