import React, { useState } from "react";
import { View, FlatList, TouchableOpacity } from "react-native";
import { ActivityIndicator, MD2Colors } from "react-native-paper";

import styled from "styled-components/native";

import RestaurantCard from "../components/restaurants/Restaurant-Card";
import { Spacer } from "../components/spacer/space";
import { SafeArea } from "../components/utility/Safe-Area";
import { useRestaurantContext } from "../services/restaurant/restaurant-context";

import Search from "../components/restaurants/Search";
import { useFavouritesContext } from "../services/favourites/Favourites-Context";
import FavouritesBar from "../components/favourite/Favourites-Bar";
import FadeInView from "../components/Animations/Fade-Animation";

const LoadingSpinner = styled(View)`
  position: absolute;
  top: 50%;
  left: 50%;
`;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const RestaurantsScreen = ({ navigation }) => {
  const { restaurants, isLoading } = useRestaurantContext();
  const [isToggle, setIsToggle] = useState(false);
  const { favourites } = useFavouritesContext();

  return (
    <SafeArea>
      {isLoading && (
        <LoadingSpinner>
          <Loading size={50} animating={true} color={MD2Colors.red400} />
        </LoadingSpinner>
      )}
      <Search
        isFavouritesToggle={isToggle}
        onFavouritesToggle={() => setIsToggle(!isToggle)}
      />
      {isToggle && (
        <FavouritesBar
          favourites={favourites}
          onNavigate={navigation.navigate}
        />
      )}
      <FlatList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("ResturantDetails", { restaurant: item })
              }
            >
              <Spacer position="bottom" size="large">
                <FadeInView>
                  <RestaurantCard restaurant={item} />
                </FadeInView>
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 16 }}
      />
    </SafeArea>
  );
};

export default RestaurantsScreen;
