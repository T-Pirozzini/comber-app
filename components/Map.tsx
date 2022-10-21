import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import MapView, { Callout, Marker, Polygon, PROVIDER_GOOGLE } from "react-native-maps";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Button, View, Text, StyleSheet, Dimensions, TouchableOpacity, Image} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import * as Location from "expo-location";

// Google places api
const googleKey = process.env.REACT_APP_GOOGLE_API_KEY

export default function Map() {
  // expo location package
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [address, setAddress] = useState(null);
  const [getLocation, setGetLocation] = useState(null);

  // const [currentLocation, setCurrentLocation] = useState(null);
  const [targetClicked, setTargetClicked] = useState(false);

  const [coords, setCoords] = useState(null);

  const [pin, setPin] = useState({latitude: 37.78825, longitude: -122.4324});
  const [regionGoogleMap, setRegionGoogleMap] = useState({latitude: 37.78825, longitude: -122.4324, latitudeDelta: 0.0922, longitudeDelta: 0.0421,});


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
  };

  return (
    <View style={styles.container}>

      <GooglePlacesAutocomplete
        placeholder='Search'
        fetchDetails={true}
        GooglePlacesSearchQuery={{
          rankby: "distance",
        }}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details)
          console.log("REGION", regionGoogleMap)
          setRegionGoogleMap({
            latitude: details.geometry.location.lat,
            longitude: details.geometry.location.lng,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          })          
        }}
        query={{
          key: googleKey,
          language: 'en',
          components: "country:us",
          types: "establishment",
          radius: 30000,
          location: `${regionGoogleMap.latitude}, ${regionGoogleMap.longitude}`
        }}
        styles={{
          container: { flex: 1, position: "absolute", top:10, width: "80%", zIndex: 1},
          listView: {backgroundColor: "white" }
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
          coordinate={{latitude: regionGoogleMap.latitudeDelta, longitude: regionGoogleMap.longitude}}
        />
        <Marker 
          coordinate={pin}
          pinColor="blue"
          draggable={true}
          onDragStart={(e) => {console.log("Drag Start", e.nativeEvent.coordinate)}}
          onDragEnd={(e) => {
            setPin({
              latitude: e.nativeEvent.coordinate.latitude,
              longitude: e.nativeEvent.coordinate.longitude
            })
          }}          
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

      <View style={styles.data}>
        <Text>EXPO LOCATION OUTPUT: {text}</Text>
        <Button
          // style={}
          onPress={() => goToVancouver()}
          title="Go to Vancouver"
        />        
        {/* Display user's current region */}
        <Text style={styles.text}>Current latitude: {region.latitude}</Text>
        <Text style={styles.text}>Current longitude: {region.longitude}</Text>
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
    backgroundColor: "rgba(12,45,34,.07)"    
  },
  map: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    ...StyleSheet.absoluteFillObject 
  },
  button: {
    alignItems: "flex-end"    
  },
  data: {
    flex: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',    
    ...StyleSheet.absoluteFillObject    
  }
});
