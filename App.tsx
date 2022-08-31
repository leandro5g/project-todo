import React from "react";
import * as SplashScreen from "expo-splash-screen";

import {
  Inter_400Regular,
  Inter_700Bold,
  useFonts,
} from "@expo-google-fonts/inter";

import { MyApp } from "./src/index";
import { GestureHandlerRootView } from "react-native-gesture-handler";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  if (fontsLoaded) {
    SplashScreen.hideAsync();
    return <MyApp />;
  }
}
