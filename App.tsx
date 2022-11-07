import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Drawer from "./navigation/Drawer";
import "react-native-gesture-handler";
import { Button, View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

// add custom fonts
import { useFonts } from "expo-font";
import { PoorStory_400Regular } from "@expo-google-fonts/poor-story";
import { Alice_400Regular } from "@expo-google-fonts/alice";
import {
  TitilliumWeb_200ExtraLight,
  TitilliumWeb_200ExtraLight_Italic,
  TitilliumWeb_300Light,
  TitilliumWeb_300Light_Italic,
  TitilliumWeb_400Regular,
  TitilliumWeb_400Regular_Italic,
  TitilliumWeb_600SemiBold,
  TitilliumWeb_600SemiBold_Italic,
  TitilliumWeb_700Bold,
  TitilliumWeb_700Bold_Italic,
  TitilliumWeb_900Black,
} from "@expo-google-fonts/titillium-web";
import Login from "./components/Login";

export default function App() {
  // add custom font options here
  let [fontsLoaded, error] = useFonts({
    PoorStory_400Regular,
    TitilliumWeb_200ExtraLight,
    TitilliumWeb_200ExtraLight_Italic,
    TitilliumWeb_300Light,
    TitilliumWeb_300Light_Italic,
    TitilliumWeb_400Regular,
    TitilliumWeb_400Regular_Italic,
    TitilliumWeb_600SemiBold,
    TitilliumWeb_600SemiBold_Italic,
    TitilliumWeb_700Bold,
    TitilliumWeb_700Bold_Italic,
    TitilliumWeb_900Black,
    Alice_400Regular,
  });

  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <NavigationContainer>
        {/* user ? (<Drawer />) : (<Login />) */}
        <Drawer />
      </NavigationContainer>
    );
  }
}
