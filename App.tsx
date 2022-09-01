import React from "react";
import * as SplashScreen from "expo-splash-screen";

import {
  Inter_400Regular,
  Inter_700Bold,
  useFonts,
} from "@expo-google-fonts/inter";

import { MyApp } from "./src/index";

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
