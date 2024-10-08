import React, { useContext, createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuthContext } from "../auth/Auth-Context";

const FavouritesContext = createContext({});

const FavouritesProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);
  const { user } = useAuthContext();

  const saveFavourites = async (value, uid) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(`@Meal-hunt-favourites-${uid}`, jsonValue);
    } catch (e) {
      console.log("Error while save fovourites : ", e);

      // saving error
    }
  };

  const loadFavourites = async (uid) => {
    try {
      const jsonValue = await AsyncStorage.getItem(
        `@Meal-hunt-favourites-${uid}`
      );
      return jsonValue != null ? setFavourites(JSON.parse(jsonValue)) : null;
    } catch (e) {
      console.log("Error while getting favourites : ", e);

      // error reading value
    }
  };

  const addToFavourites = (restaurant) => {
    setFavourites([...favourites, restaurant]);
  };

  const removeFromFavourite = (restaurant) => {
    const newFavourites = favourites.filter(
      (item) => item.placeId !== restaurant.placeId
    );

    setFavourites(newFavourites);
  };

  useEffect(() => {
    if (user) {
      loadFavourites(user.uid);
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      saveFavourites(favourites, user.uid);
    }
  }, [favourites, user]);

  return (
    <FavouritesContext.Provider
      value={{ favourites, addToFavourites, removeFromFavourite }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};

export const useFavouritesContext = () => {
  return useContext(FavouritesContext);
};

export default FavouritesProvider;
