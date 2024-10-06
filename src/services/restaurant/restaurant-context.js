import React, { useState, createContext, useEffect, useContext } from "react";

import { restaurantsRequest, restaurantsTransform } from "./restaurant-service";
import { useLocationContext } from "../location/location-context";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { location } = useLocationContext();

  const retrieveRestaurants = (city) => {
    setIsLoading(true);
    setRestaurants([]);
    setTimeout(() => {
      restaurantsRequest(city)
        .then(restaurantsTransform)
        .then((results) => {
          setIsLoading(false);
          setRestaurants(results);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    }, 2000);
  };

  useEffect(() => {
    if (location) {
      const locationStr = `${location.lat},${location.lng}`;
      retrieveRestaurants(locationStr);
    }
  }, [location]);

  return (
    <RestaurantsContext.Provider
      value={{
        restaurants,
        isLoading,
        error,
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};

export const useRestaurantContext = () => {
  return useContext(RestaurantsContext);
};
