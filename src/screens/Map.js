import React, { useState, useEffect } from "react";
import MapView, { Marker, Callout } from "react-native-maps";
import styled from "styled-components/native";

import MapSearch from "../components/map/Map-Search";
import { useLocationContext } from "../services/location/location-context";
import { useRestaurantContext } from "../services/restaurant/restaurant-context";
import MapCallout from "../components/map/Map-Callout";

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

const MapScreen = ({ navigation }) => {
  const { location } = useLocationContext();
  const { restaurants = [] } = useRestaurantContext();
  const [latDelta, setLatDelta] = useState(0);
  const { viewport, lat, lng } = location;

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestlLat = viewport.southwest.lat;

    setLatDelta(northeastLat - southwestlLat);
  }, [viewport]);

  return (
    <>
      <MapSearch />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02, // Default zoom level.
        }}
      >
        {restaurants.map((item) => (
          <Marker
            key={item.name}
            title={item.name}
            coordinate={{
              latitude: item.geometry.location.lat,
              longitude: item.geometry.location.lng,
            }}
          >
            <MapCallout restaurant={item} navigation={navigation} />
          </Marker>
        ))}
      </Map>
    </>
  );
};

export default MapScreen;
