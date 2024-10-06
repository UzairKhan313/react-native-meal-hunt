import React from "react";
import { View, FlatList } from "react-native";
import { Searchbar, ActivityIndicator, MD2Colors } from "react-native-paper";

import styled from "styled-components/native";

import RestaurantCard from "../components/restaurants/Restaurant-Card";
import { Spacer } from "../components/spacer/space";
import { SafeArea } from "../components/utility/Safe-Area";
import { useRestaurantContext } from "../services/restaurant/restaurant-context";
import { isLoaded } from "expo-font";

const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

const LoadingSpinner = styled(View)`
  position: absolute;
  top: 50%;
  left: 50%;
`;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const RestaurantsScreen = () => {
  const { restaurants } = useRestaurantContext();
  return (
    <SafeArea>
      {isLoaded && (
        <LoadingSpinner>
          <Loading size={50} animating={true} color={MD2Colors.red400} />
        </LoadingSpinner>
      )}
      <SearchContainer>
        <Searchbar placeholder="Search Restaurant" />
      </SearchContainer>
      <FlatList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <Spacer position="bottom" size="large">
              <RestaurantCard restaurant={item} />
            </Spacer>
          );
        }}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 16 }}
      />
    </SafeArea>
  );
};

export default RestaurantsScreen;
