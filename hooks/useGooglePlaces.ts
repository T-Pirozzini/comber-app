import { useState, useEffect } from "react";
import * as Location from "expo-location";

const useGooglePlaces = () => {
  const [location, setLocation] = useState({
    destination: "",
  });
  const [targetClicked, setTargetClicked] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

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

  return { location }
}

export default useGooglePlaces



  // 3. The original useEffect before I messed around with it
  // get current location/set current location on compass click
  // useEffect(() => {
  //   (async () => {
  //     let { status } = await Location.requestForegroundPermissionsAsync();
  //     if (status !== "granted") {
  //       setErrorMsg("Permission to access location was denied");
  //       return;
  //     }
  //     // if compass clicked do this
  //     let currentLocation = await Location.getCurrentPositionAsync({});
  //     if (currentLocation) {
  //       setLocation(currentLocation);
  //       // console.log("LOCATION:", location);
  //     }

  //     // search form submitted do this
  //     let address = await Location.reverseGeocodeAsync(region.coords);
  //     // console.log("ADDRESS", address);

  //     if (location) {
  //       let latitude = location.coords.latitude;
  //       let longitude = location.coords.longitude;

  //       let regionName = await Location.reverseGeocodeAsync({
  //         longitude,
  //         latitude,
  //       });
  //       setAddress(regionName[0]);
  //       // console.log("REGIONNAME", address);
  //       // console.log(regionName, "nothing");
  //     }
  //   })();
  // }, []);