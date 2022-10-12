import * as React from "react";
import { Button, View, Text, StyleSheet } from "react-native";
import Header from "./Header";
import Footer from "./Footer";

export default function Map() {
  return (
    <View style={styles.container}>
      {/* <Header /> */}
      <Text>This is the Map Page.</Text>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});