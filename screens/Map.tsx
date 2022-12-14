import React, { useState, useRef, useEffect } from "react";
import MapView, {
  Callout,
  Marker,
  PROVIDER_GOOGLE,
} from "react-native-maps";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import {
  MaterialIcons,
  AntDesign,
  Entypo,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import * as Location from "expo-location";
import Tide from "../components/Tide";
import Weather from "../components/Weather";

// Google places api
const googleKey = process.env.REACT_APP_GOOGLE_API_KEY;

export default function Map() {
  // sets the current city and coords to what is submitted in the search bar
  const [searchInput, setSearchInput] = useState({
    locality: "nanaimo",
    lat: 0,
    lng: 0,
  }); 
  const [location, setLocation] = useState({
    destination: "",
  });
  const [errorMsg, setErrorMsg] = useState(null);  
  const [pin, setPin] = useState({ latitude: 37.78825, longitude: -122.4324 });
  const [regionGoogleMap, setRegionGoogleMap] = useState({
    latitude: 49.2827,
    longitude: -123.1207,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  // Attempting to split up useEffects for location data retrieval // 
  const getLocationPermission = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        console.log(errorMsg);
        return;
      }
      if (status == "granted") {
        getCurrentLocation()
      }
    } catch (error) {console.log("ERROR", error)}
  }; 

  const getCurrentLocation = async () => {
    try {
      let { coords } = await Location.getCurrentPositionAsync({});
      if (!coords) {
        console.log("No Location");
      }
      if (coords) {        
        setLocation(coords);       
      }
    } catch (error) {console.log("ERROR", error)}
  };

  useEffect(() => {
    getLocationPermission()
  },[regionGoogleMap])     


  const [region, setRegion] = useState({
    coords: { latitude: 47.78825, longitude: -122.4324 },
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });

  // because of Typescript, need to set type to not null.
  const mapRef = useRef(null);
  const googlePlacesAutoCompleteRef = useRef(null); 

  return (
    <View style={styles.container}>
      {/* Google Places Autocomplete Component       */}
      <GooglePlacesAutocomplete
        ref={googlePlacesAutoCompleteRef}
        placeholder="Enter a City"
        fetchDetails={true}
        GooglePlacesSearchQuery={{
          rankby: "distance",
        }}
        onPress={(data, details = null) => {
          // Animating to clicked on location
          setRegionGoogleMap({
            latitude: details.geometry.location.lat,
            longitude: details.geometry.location.lng,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          });
          // set city and coords for search submitted
          setSearchInput({
            locality: data.description.split(",")[0].toLowerCase(),
            lat: details.geometry.location.lat,
            lng: details.geometry.location.lng,
          });
          // coordinates for selected location
          const searchDestination = {
            latitude: details.geometry.location.lat,
            longitude: details.geometry.location.lng,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          };
          // Animating to selected location
          mapRef.current.animateToRegion(searchDestination, 3 * 1000);
        }}
        query={{
          key: googleKey,
          language: "en",
          components: "country:ca",
          types: "locality",
          radius: 30000,
          location: `${regionGoogleMap.latitude}, ${regionGoogleMap.longitude}`,
        }}
        //Clearing Text Input, will only show up when typing
        renderRightButton={() =>
          googlePlacesAutoCompleteRef.current?.getAddressText() ? (
            <TouchableOpacity
              onPress={() => {
                googlePlacesAutoCompleteRef.current?.clear();
              }}
            >
            {/* Clear Button */}
            <AntDesign
              name={"closecircle"}
              color={"#7DD181"}
              size={20}
              style={styles.clearButton}
            />
            </TouchableOpacity>
          ) : null
        }
        // Search icon
        renderLeftButton={() => (
          <MaterialIcons
            name={"search"}
            size={32}
            color={"white"}
            style={styles.searchIcon}
          />
        )}
        styles={{
          container: {
            flex: 1,
            position: "absolute",
            top: 10,
            width: "80%",
            zIndex: 1,
            backgroundColor: "rgba(3, 25, 38, .8)",
            margin: 5,
            marginTop: 0,
            borderRadius: 10,
          },
          textInputContainer: {
            padding: 5,
            paddingBottom: 1,
          },
          textInput: {
            height: 38,
            color: "#5d5d5d",
            fontSize: 20,
          },
          description: {
            color: "white",
            fontSize: 16,
          },
          row: {
            backgroundColor: "rgba(3, 25, 38, .1)",
          },
        }}
      />

      <MapView
        provider={PROVIDER_GOOGLE}
        showsCompass={true}
        ref={mapRef}
        style={styles.map}
        showsUserLocation={true}
        showsMyLocationButton={true}
        initialRegion={{
          latitude: 49.2827,
          longitude: -123.1207,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onRegionChangeComplete={(region) => setRegion(region)}
      >
        {/* Starting marker location */}
        <Marker
          coordinate={{
            latitude: regionGoogleMap.latitude,
            longitude: regionGoogleMap.longitude,
          }}
        >
        </Marker>
        {/* Nanoose Bay Harvest Location */}
        <Marker
          coordinate={{
            latitude: 49.254,
            longitude: -124.173,
          }}
        >
          <MaterialCommunityIcons name="shovel" size={24} color="black" />
          <Entypo name="bucket" size={24} color="black" />
          <Callout>
            <View style={styles.callout}>
              <Text>
                Harvest Species: Horse, Littleneck and Manila clams. Geoduck.
                Mussels. Oysters.
              </Text>
            </View>
          </Callout>
        </Marker>
      </MapView>
      <View style={styles.speedDial}>
        <Weather city={searchInput.locality} />
        <Tide city={searchInput.locality} />
      </View>
    </View>
  );} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    ...StyleSheet.absoluteFillObject,
  },
  text: {
    fontSize: 18,
    backgroundColor: "rgba(12,45,34,.07)",
  },
  map: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    ...StyleSheet.absoluteFillObject,
  },
  button: {
    alignItems: "flex-end",
  },
  speedDial: {
    flex: 1,
  },
  clearButton: {
    paddingLeft: 5,
    paddingTop: 10,
  },
  tinylogo: {
    width: 40,
    height: 20,
  },
  searchIcon: {
    marginTop: 3,
  },
  callout: {
    width: 300,
  },
});

