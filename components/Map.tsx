import React, { useState, useRef, useEffect, useLayoutEffect } from "react";

import MapView, { Callout, Marker, Polygon, PROVIDER_GOOGLE } from "react-native-maps";

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
  const [getLocation, setGetLocation] = useState(null);

  // const [currentLocation, setCurrentLocation] = useState(null);
  const [targetClicked, setTargetClicked] = useState(false);

  const [coords, setCoords] = useState(null);


  useEffect(() => {
  if (targetClicked) {
    // if compass clicked do this
    const getCurrentLocation = async () => {
      let { coords } = await Location.getCurrentPositionAsync({});  
      console.log('PRE: LOCATION COORDS:', coords)
      setTargetClicked(false);             
      if (!coords){
        console.log('No Location')
      }
      if (coords) {          
        setLocation(coords)
        console.log("POST: LOCATION COORDS:", location)
        console.log(targetClicked)                   
      };
    };

    getCurrentLocation();
  };
}, [location]);



  // get current location/set current location on compass click
  useEffect(() => {
    const getLocationPermission = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        console.log(errorMsg)
        return;
      };
      if (status == "granted") {
        setTargetClicked(true);
      }      
    };  

    getLocationPermission();

      

      // search form submitted do this
      // let address = await Location.reverseGeocodeAsync(region.coords);
      // console.log("ADDRESS", address);

      // if (location) {
      //   let latitude = location.coords.latitude;
      //   let longitude = location.coords.longitude;

      //   let regionName = await Location.reverseGeocodeAsync({
      //     longitude,
      //     latitude,
      //   });
      //   setAddress(regionName[0]);
      //   console.log("REGIONNAME", address);
      //   console.log(regionName, "nothing");
      // }
    // })();
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
    setLocation()
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
      >
        <Marker 
          coordinate={{latitude: 37.78825, longitude: -122.4324}}
          pinColor="blue"
        >
          <Callout>
            <Text>I'm here!</Text>
          </Callout>
        </Marker>
        <Polygon coordinates={
          [
            {
              latitude: 37.78825,
              longitude: -122.4324
            },
            {
              latitude: 37.79825,
              longitude: -122.5324
            },
            {
              latitude: 37.88825,
              longitude: -122.4324
            },
            {
              latitude: 37.8825,
              longitude: -122.4324
            },
          ]
        }        
        fillColor="rgba(207, 47, 116, 0.5)"        
        >

        </Polygon>
      </MapView>

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
