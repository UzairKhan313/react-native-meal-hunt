import React from "react";
import { Callout } from "react-native-maps";

import CompactRestaurantinfo from "../restaurants/Compact-Restaurant-info";

const MapCallout = ({ restaurant, navigation }) => {
  return (
    <Callout
      onPress={() => navigation.navigate("ResturantDetails", { restaurant })}
    >
      <CompactRestaurantinfo restaurant={restaurant} isMap={true} />
    </Callout>
  );
};

export default MapCallout;
