import * as React from "react";
import { Button, View, Text, StyleSheet } from "react-native";
import Header from "./Header";
import Footer from "./Footer";
import LocationSearchHome from "./LocationSearchHome";
import Tide from "./Tide"
import Weather from "./Weather";

export default function Home() {
  return (
    <View style={styles.container}>
      {/* <Header /> */}
      <Text>This is the Home Page.</Text>
      <LocationSearchHome />
      {/* <Tide /> */}
      {/* <Weather />       */}
      {/* <Footer /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEFF'
  },
});
