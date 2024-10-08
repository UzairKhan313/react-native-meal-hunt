import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { theme } from "./src/theme";
import Naivgation from "./src/navigation";
import { RestaurantsContextProvider } from "./src/services/restaurant/restaurant-context";
import { LocationContextProvider } from "./src/services/location/location-context";
import { AuthContextProvider } from "./src/services/auth/Auth-Context";
import FavouritesProvider from "./src/services/favourites/Favourites-Context";

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded) {
    return;
  }

  if (!latoLoaded) {
    return;
  }

  return (
    <>
      <ExpoStatusBar style="auto" />
      <AuthContextProvider>
        <ThemeProvider theme={theme}>
          <FavouritesProvider>
            <LocationContextProvider>
              <RestaurantsContextProvider>
                <Naivgation />
              </RestaurantsContextProvider>
            </LocationContextProvider>
          </FavouritesProvider>
        </ThemeProvider>
      </AuthContextProvider>
    </>
  );
}
