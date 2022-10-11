import * as React from "react";
import { Button, View, Text, StyleSheet } from "react-native";
import Header from "./Header";
import Footer from "./Footer";
import LocationSearchHome from "./LocationSearchHome";

export default function Home() {
  return (
    <View style={styles.container}>
      {/* <Header /> */}
      <Text>This is the Home Page.</Text>
      <LocationSearchHome />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
