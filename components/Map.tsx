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
import Geolocation from "@react-native-community/geolocation";
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
  // because of Typescript, need to set type to not null. Maybe use useEffect?
  const mapRef = useRef(null);
  // useEffect(() => {
  //   // 👉️ ref could be null here
  //   if (mapRef.current !== null) {
  //     // 👉️ TypeScript knows that ref is not null here
  //     mapRef.current.focus();
  //   }
  // }, []);

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
  //testing if not null then execute goToVancouver function
  // useEffect(() => {
  //   if (mapRef.current !== null) {
  //     goToVancouver;
  //   }
  // }, []);
  // useLayoutEffect(() => {
  //   if (mapRef.current !== null) {
  //     goToVancouver;
  //   }
  // }, []);

  const goToMyLocation = () => {
    console.log("gotToMyLocation is called");
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        // console.log("curent location: ", coords);
        // console.log(this.map);
        if (region.Map) {
          console.log("curent location: ", coords);
          mapRef.current.animateToRegion({
            latitude: coords.latitude,
            longitude: coords.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          });
        }
      },
      (error) => alert("Error: Are location services on?"),
      { enableHighAccuracy: true }
    );
  };

  return (
    <View style={styles.container}>
      <Text>MAP TESTING TESTING 123</Text>
      <MapView
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        showsMyLocationButton={true}
        ref={mapRef}
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onRegionChangeComplete={(region) => setRegion(region)}
      />
      <Button
        // style={}
        onPress={() => goToVancouver()}
        title="Go to Vancouver"
      />
      {/* <MaterialIcons={styles.myLocationIcon} */}
      {/* <TouchableOpacity
        onPress={() => goToMyLocation()}
        style={[
          styles.button,
          {
            width: 60,
            height: 60,
            position: "absolute",
            bottom: 20,
            right: 20,
            borderRadius: 30,
            backgroundColor: "#d2d2d2",
          },
        ]}
      >
        <Image
          style={[
            styles.button,
            {
              width: 60,
              height: 60,
              position: "absolute",
              bottom: 20,
              borderRadius: 30,
              backgroundColor: "#d2d2d2",
            },
          ]}
          source={{
            uri: "https://www.pngitem.com/pimgs/m/9-98234_my-location-icon-vector-clipart-png-download-google.png",
          }}
        />
      </TouchableOpacity> */}
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
