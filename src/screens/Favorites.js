import React from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { Spacer } from "../components/spacer/space";
import RestaurantCard from "../components/restaurants/Restaurant-Card";
import styled from "styled-components/native";
import { useFavouritesContext } from "../services/favourites/Favourites-Context";
import { Text } from "../components/typography/Text";

const FavouritesNotFound = styled.View`
  margin-top: ${(props) => props.theme.space[3]};
  align-items: center;
`;

const FavoritesScreen = ({ navigation }) => {
  const { favourites } = useFavouritesContext();

  if (!favourites.length) {
    return (
      <FavouritesNotFound>
        <Text variant="label">No Restaurant Favourite yet.</Text>
      </FavouritesNotFound>
    );
  }
  return (
    <>
      <FlatList
        data={favourites}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("ResturantDetails", { restaurant: item })
              }
            >
              <Spacer position="bottom" size="large">
                <RestaurantCard restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 16 }}
      />
    </>
  );
};

export default FavoritesScreen;
