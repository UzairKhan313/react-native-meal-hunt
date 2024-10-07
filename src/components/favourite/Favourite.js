import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

import styled from "styled-components/native";
import { useFavouritesContext } from "../../services/favourites/Favourites-Context";

const FavouriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 25px;
  right: 25px;
  z-index: 9;
`;

const Favourite = ({ restaurant }) => {
  const { favourites, removeFromFavourite, addToFavourites } =
    useFavouritesContext();
  const isFavourite = favourites.find((r) => r.placeId === restaurant.placeId);
  return (
    <FavouriteButton
      onPress={() => {
        !isFavourite
          ? addToFavourites(restaurant)
          : removeFromFavourite(restaurant);
      }}
    >
      <AntDesign
        name={isFavourite ? "heart" : "hearto"}
        size={24}
        color={isFavourite ? "tomato" : "white"}
      />
    </FavouriteButton>
  );
};

export default Favourite;
