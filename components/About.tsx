import * as React from "react";
import { Button, View, Text, StyleSheet } from "react-native";
import FooterTabs from "../navigation/FooterTabs";

export default function About() {
  return (
    <View style={styles.container}>
      {/* <Header /> */}
      <Text>This is the About Page.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
