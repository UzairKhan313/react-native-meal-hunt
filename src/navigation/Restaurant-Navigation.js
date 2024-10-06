import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import RestaurantsScreen from "../screens/Restaurants";
import RestaurantDetailsScreen from "../screens/Restaurant-Details";

const Stack = createStackNavigator();

function RestaurantNavigator() {
  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen
        name="Resturants"
        component={RestaurantsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ResturantDetails"
        component={RestaurantDetailsScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default RestaurantNavigator;
