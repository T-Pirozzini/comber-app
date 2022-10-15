import React, { useState, useRef } from "react";

import MapView from "react-native-maps";

import { Button, View, Text, StyleSheet, Dimensions } from "react-native";
// import Header from "./Header";
import Footer from "./Footer";
import { StatusBar } from "expo-status-bar";

{
  /* <LeafletView 
  
/> */
}

export default function Map() {
  const [region, setRegion] = useState({
    latitude: 51.5079145,
    longitude: -0.0899163,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });

  // Testing button to take you to specific coordinates
  const mapRef = useRef(null);
  <MapView ref={mapRef} />;
  const vancouverArea = {
    latitude: 49.2827,
    longitude: 123.1207,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };
  const goToVancouver = () => {
    // Animate user to Vancouver area, 2nd argument determines how many seconds to complete
    mapRef.current.animateToRegion(vancouverArea, 3 * 1000);
  };
  return (
    <View style={styles.container}>
      <Text>MAP TESTING TESTING 123</Text>
      <MapView
        style={{ height: "80%", width: "100%" }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onRegionChangeComplete={(region) => setRegion(region)}
      />
      <Button onPress={() => goToVancouver()} title="Go to Vancouver" />
      <StatusBar style="auto" />
      {/* Display user's current region */}
      <Text style={styles.text}>Current latitude: {region.latitude}</Text>
      <Text style={styles.text}>Current longitude: {region.longitude}</Text>
    </View>

    //   <View style={styles.container}>
    //     {/* <Header /> */}
    //     <Text>This is the Map Page.</Text>

    //     <Footer />
    //   </View>

    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    backgroundColor: "lightblue",
  },
});
