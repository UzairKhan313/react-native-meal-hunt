import React from "react";
import { View, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";

import styled from "styled-components/native";

import RestaurantCard from "../components/restaurants/Restaurant-Card";
import { Spacer } from "../components/spacer/space";
import { SafeArea } from "../components/utility/Safe-Area";

const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantsScreen = () => {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar placeholder="Search Restaurant" />
      </SearchContainer>
      <FlatList
        data={[{ name: 1 }, { name: 2 }, { name: 3 }]}
        renderItem={() => (
          <Spacer position="bottom" size="large">
            <RestaurantCard />
          </Spacer>
        )}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 16 }}
      />
    </SafeArea>
  );
};

export default RestaurantsScreen;
