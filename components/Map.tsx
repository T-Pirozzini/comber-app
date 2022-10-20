import React, { useState, useRef, useEffect, useLayoutEffect } from "react";

import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

import {
  Button,
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
// import Header from "./Header";
import Footer from "./Footer";
import { StatusBar } from "expo-status-bar";
import { MaterialIcons } from "@expo/vector-icons";
// import Geolocation from "@react-native-community/geolocation"; // Not using

import * as Location from "expo-location";

export default function Map() {
  // expo location package
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [address, setAddress] = useState(null);
  const [getLocation, setGetLocation] = useState(false);

  // get current location/set current location on compass click
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      // if compass clicked do this
      let currentLocation = await Location.getCurrentPositionAsync({});
      if (currentLocation) {
        setLocation(currentLocation);
        console.log("LOCATION:", location);
      }

      // search form submitted do this
      let address = await Location.reverseGeocodeAsync(region.coords);
      console.log("ADDRESS", address);

      if (location) {
        let latitude = location.coords.latitude;
        let longitude = location.coords.longitude;

        let regionName = await Location.reverseGeocodeAsync({
          longitude,
          latitude,
        });
        setAddress(regionName[0]);
        console.log("REGIONNAME", address);
        console.log(regionName, "nothing");
      }
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  const [region, setRegion] = useState({
    coords: { latitude: 37.78825, longitude: -122.4324 },
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });
  // because of Typescript, need to set type to not null. Maybe use useEffect?
  const mapRef = useRef(null);
  const vancouverArea = {
    latitude: 49.2827,
    longitude: -123.1207,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };
  // this function below works even though shows error
  const goToVancouver = () => {
    // Animate user to Vancouver area, 2nd argument determines how many seconds to complete
    mapRef.current.animateToRegion(vancouverArea, 3 * 1000);
  };

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        showsCompass={true}
        ref={mapRef}
        style={styles.map}
        showsUserLocation={true}
        showsMyLocationButton={true}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onRegionChangeComplete={(region) => setRegion(region)}
      />
      <Text>EXPO LOCATION OUTPUT: {text}</Text>
      <Button
        // style={}
        onPress={() => goToVancouver()}
        title="Go to Vancouver"
      />

      <StatusBar style="auto" />
      {/* Display user's current region */}
      <Text style={styles.text}>Current latitude: {region.latitude}</Text>
      <Text style={styles.text}>Current longitude: {region.longitude}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "flex-end",
    ...StyleSheet.absoluteFillObject,
  },
  text: {
    fontSize: 18,
    backgroundColor: "lightblue",
  },
  map: {
    flex: 1,
    // height: "100%",
    // width: "100%",
    ...StyleSheet.absoluteFillObject,
  },
  button: {
    alignItems: "flex-end",
  },
});
