import React from "react";
import { SafeArea } from "../components/utility/Safe-Area";

import RestaurantCard from "../components/restaurants/Restaurant-Card";

const RestaurantDetailScreen = ({ route }) => {
  const { restaurant } = route.params;

  return (
    <SafeArea>
      <RestaurantCard restaurant={restaurant} />
    </SafeArea>
  );
};

export default RestaurantDetailScreen;
