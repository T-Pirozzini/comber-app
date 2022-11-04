import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Drawer from "./navigation/Drawer";
import "react-native-gesture-handler";
import { Button, View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

// add custom fonts
import { useFonts } from 'expo-font';
import { PoorStory_400Regular } from "@expo-google-fonts/poor-story";

export default function App() {

  // add custom font options here
  let [fontsLoaded, error] = useFonts({
    PoorStory_400Regular
  });  

  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <NavigationContainer>
        <Drawer />        
      </NavigationContainer>   
    ) 
  }
}

