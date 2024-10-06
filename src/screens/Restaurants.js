import React from "react";
import { View, FlatList, TouchableOpacity } from "react-native";
import { ActivityIndicator, MD2Colors } from "react-native-paper";

import styled from "styled-components/native";

import RestaurantCard from "../components/restaurants/Restaurant-Card";
import { Spacer } from "../components/spacer/space";
import { SafeArea } from "../components/utility/Safe-Area";
import { useRestaurantContext } from "../services/restaurant/restaurant-context";

import Search from "../components/restaurants/Search";

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

  return (
    <SafeArea>
      {isLoading && (
        <LoadingSpinner>
          <Loading size={50} animating={true} color={MD2Colors.red400} />
        </LoadingSpinner>
      )}
      <Search />
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
                <RestaurantCard restaurant={item} />
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
