import React from "react";

import { SvgXml } from "react-native-svg";

// Svgs
import star from "../../../assets/star";
import open from "../../../assets/open";

import { Spacer } from "../spacer/space";
import { Text } from "../typography/Text";

import {
  Icon,
  InFo,
  Rating,
  RestaurantCardCover,
  RestaurantInfoCard,
  Section,
  SectionEnd,
  Address,
} from "./Restaurant-Card-Style";

const RestaurantCard = ({ restaurant = {} }) => {
  const {
    name,
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    placeId,
    isClosedTemporarily,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <RestaurantInfoCard>
      <RestaurantCardCover source={{ uri: photos[0] }} />
      <InFo>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((_, index) => (
              <SvgXml
                key={`star-${placeId} = ${index}`}
                xml={star}
                width={20}
                height={20}
              />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            <Spacer position="left" size="medium">
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>

            <Spacer position="left" size="large">
              <Icon source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </InFo>
    </RestaurantInfoCard>
  );
};

export default RestaurantCard;
