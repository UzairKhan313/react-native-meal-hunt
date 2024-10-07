import { ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import styled from "styled-components/native";

import { Spacer } from "../spacer/space";
import CompactRestaurantinfo from "../restaurants/Compact-Restaurant-info";
import { Text } from "../typography/Text";

const FavouritesWrapper = styled.View`
  padding: 10px;
`;

const FavouritesBar = ({ favourites, onNavigate }) => {
  if (!favourites.length) {
    return null;
  }
  return (
    <FavouritesWrapper>
      <Spacer variant="left.large">
        <Text variant="body">Favourites</Text>
      </Spacer>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurant) => {
          const key = restaurant.name;
          return (
            <Spacer key={key} position="left" size="medium">
              <TouchableOpacity
                onPress={() =>
                  onNavigate("ResturantDetails", {
                    restaurant,
                  })
                }
              >
                <CompactRestaurantinfo restaurant={restaurant} />
              </TouchableOpacity>
            </Spacer>
          );
        })}
      </ScrollView>
    </FavouritesWrapper>
  );
};

export default FavouritesBar;
