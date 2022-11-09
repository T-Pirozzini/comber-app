import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import MapView, {
  Callout,
  Marker,
  Polygon,
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

  // expo location package
  const [location, setLocation] = useState({
    destination: "",
  });
  const [errorMsg, setErrorMsg] = useState(null);
  const [address, setAddress] = useState(null);
  const [getLocation, setGetLocation] = useState(null);

  // const [currentLocation, setCurrentLocation] = useState(null);
  const [targetClicked, setTargetClicked] = useState(false);

  const [coords, setCoords] = useState(null);

  const [pin, setPin] = useState({ latitude: 37.78825, longitude: -122.4324 });
  const [regionGoogleMap, setRegionGoogleMap] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  // Attempting to split up useEffects for location data retrieval //

  // 1 . Current location Data
  useEffect(() => {
    if (targetClicked) {
      // if compass clicked do this
      const getCurrentLocation = async () => {
        let { coords } = await Location.getCurrentPositionAsync({});
        console.log("PRE: LOCATION COORDS:", coords);
        setTargetClicked(false);
        if (!coords) {
          console.log("No Location");
        }
        if (coords) {
          setLocation(coords);
          console.log("POST: LOCATION COORDS:", location);
          console.log(targetClicked);
        }
      };

      getCurrentLocation();
    }
  }, [location]);

  // 2. Location permission status data
  useEffect(() => {
    const getLocationPermission = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        console.log(errorMsg);
        return;
      }
      if (status == "granted") {
        setTargetClicked(true);
      }
    };

    getLocationPermission();

    // 3. Get specific city data by using coordinates data

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

  // 3. The original useEffect before I messed around with it
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
        // console.log("LOCATION:", location);
      }

      // search form submitted do this
      let address = await Location.reverseGeocodeAsync(region.coords);
      // console.log("ADDRESS", address);

      if (location) {
        let latitude = location.coords.latitude;
        let longitude = location.coords.longitude;

        let regionName = await Location.reverseGeocodeAsync({
          longitude,
          latitude,
        });
        setAddress(regionName[0]);
        // console.log("REGIONNAME", address);
        // console.log(regionName, "nothing");
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

  // because of Typescript, need to set type to not null.
  const mapRef = useRef(null);
  const googlePlacesAutoCompleteRef = useRef(null);
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

  // Nanoose Bay
  const firstClamArea = {
    latitude: 49.254,
    longitude: -124.173,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  // const secondClamArea = {
  //   latitude: ,
  //   longitude: ,
  //   latitudeDelta: ,
  //   longitudeDelta: ,
  // }

  // const thirdClamArea = {
  //   latitude: ,
  //   longitude: ,
  //   latitudeDelta: ,
  //   longitudeDelta: ,
  // }

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
          // Trying to test animating to clicked on location
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
              // style={styles.clearButton}

              onPress={() => {
                // Clear button always shows after initial input
                googlePlacesAutoCompleteRef.current?.clear();
                // setEx(false);
                // Clear button disappears after clicking clear and clicking input field again
                // googlePlacesAutoCompleteRef.current?.setAddressText("");
              }}
            >
              <AntDesign
                //white background, white circle X
                // gonna Search how to implement how to add button inside Search Bar (not sure if possible)
                // name={"closecircleo"}
                // black background, black circle X
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
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onRegionChangeComplete={(region) => setRegion(region)}
      >
        <Marker
          coordinate={{
            latitude: regionGoogleMap.latitude,
            longitude: regionGoogleMap.longitude,
          }}
        >
          <Callout>
            <Text>I'm Here!!</Text>
          </Callout>
        </Marker>
        <Marker
          coordinate={{
            latitude: 49.254,
            longitude: -124.173,
          }}
        >
          {/* <Image
            source={require("../assets/images/clam-marker.jpg")}
            style={{ width: 50, height: 50 }}
            resizeMode="contain"
          /> */}
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
        {/* <Marker
          pinColor="green"
          icon={require("../assets/images/icon.png")}
          coordinate={{
            latitude: 49.254,
            longitude: -124.173,
          }}
          style={{ width: 26, height: 28 }}
          // resizeMode="contain"
        >
          
        </Marker> */}
        <Marker
          coordinate={pin}
          pinColor="blue"
          draggable={true}
          onDragStart={(e) => {
            console.log("Drag Start", e.nativeEvent.coordinate);
          }}
          onDragEnd={(e) => {
            setPin({
              latitude: e.nativeEvent.coordinate.latitude,
              longitude: e.nativeEvent.coordinate.longitude,
            });
          }}
        >
          <Callout>
            <Text>I'm here!!!!!!</Text>
          </Callout>
        </Marker>
        <Polygon
          coordinates={[
            {
              latitude: 37.78825,
              longitude: -122.4324,
            },
            {
              latitude: 37.79825,
              longitude: -122.5324,
            },
            {
              latitude: 37.88825,
              longitude: -122.4324,
            },
            {
              latitude: 37.8825,
              longitude: -122.4324,
            },
          ]}
          fillColor="rgba(207, 47, 116, 0.5)"
        ></Polygon>
        <Polygon
          coordinates={[
            {
              latitude: 49.1527,
              longitude: -124.0712,
            },
            {
              latitude: 49.1525,
              longitude: -124.0554,
            },
            // {
            //   latitude: 50.25,
            //   longitude: -124.65,
            // },
            // {
            //   latitude: 49.15,
            //   longitude: -124.07,
            // },
          ]}
          fillColor="rgba(207, 47, 116, 0.5)"
        ></Polygon>
      </MapView>
      <View style={styles.speedDial}>
        <Weather city={searchInput.locality} />
        <Tide city={searchInput.locality} />
        {/* <Text>EXPO LOCATION OUTPUT: {text}</Text> */}
        {/* <Button
          // style={}
          onPress={() => goToVancouver()}
          title="Go to Vancouver"
        />
        {/* Display user's current region */}
        {/* <Text style={styles.text}>Current latitude: {region.latitude}</Text>
        <Text style={styles.text}>Current longitude: {region.longitude}</Text>         */}
      </View>
    </View>
  );
}

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