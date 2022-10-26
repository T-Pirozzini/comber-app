import React, { useState } from 'react'
import { Button, View, Text, StyleSheet } from "react-native";

export default function Tide() {

  const [locations, setLocations] = useState('')
  const [currentStationId, setCurrentStationId] = useState("5cebf1df3d0f4a073c4bbbf3")
  const [stationName, setStationName] = useState("none")
  const [stationLat, setStationLat] = useState("none")
  const [stationLng, setStationLng] = useState("none")
  const [waveHeight, setWaveHeight] = useState("none")

  const getTideStationInfo = async () => {
    try {
      const response = await fetch(
        'https://api-iwls.dfo-mpo.gc.ca/api/v1/stations?chs-region-code=PAC'
      );
      const json = await response.json();
      // console.log(json)
      for (let i = 0; i < json.length; i++) {
        if (json[i].officialName == 'Nanaimo Harbour') {          
          console.log("STATION NAME", json[i].officialName)
          console.log("STATION ID", json[i].id)
          console.log("LATITUDE",json[i].latitude)
          console.log("LONGITIDUE",json[i].longitude)
          
          setCurrentStationId(json[i].id)
          setStationName(json[i].officialName)
          setStationLat(json[i].latitude)
          setStationLng(json[i].longitude)
        }
      }    
      // return json;
    } catch (error) {
      console.error(error);
    }
  };

  const getWaveHeightInfo = async () => {
    try {
      const response = await fetch(
        'https://api-iwls.dfo-mpo.gc.ca/api/v1/stations/data/latest'
      );
      const tideData = await response.json();
      // console.log("CURRENT STATION JSON:", tideData)
      for (let i = 0; i < tideData.length; i++) {
        // console.log("STATION IDs", tideData[i].stationId)        
        // console.log("CURRENT STATION ID:", currentStationId)        
        if (tideData[i].stationId == currentStationId) {
          // console.log("MATCH!!!!")
          // console.log("stationids2", tideData[i].stationId)
          console.log("CURRENT WAVE HEIGHT", tideData[i].measurementPublicDTOs[i].value)
          setWaveHeight(tideData[i].measurementPublicDTOs[i].value)            
        }            
        // for (let j = 0; j < tideData[i].stationId.length; j++) {
        //   console.log("WAVE HEIGHT", tideData[i].measurementPublicDTOs[j].value) 
        // }                      
      }         
      return tideData;
    } catch (error) {
      console.error(error);
    }
  };
 

  return (
    <View>
      <Button
        title="tide-Station-Info"
        onPress={getTideStationInfo}
      />
      <Button
        title="Wave-Height-Info"
        onPress={getWaveHeightInfo}
      />
      <Text>
        {"STATION NAME: " + stationName}
        {"\n"}
        {"STATION LAT: " + stationLat}
        {"\n"}
        {"STATION LNG: " + stationLng}
        {"\n"}
        {"STATION CURRENT WAVE HEIGHT: " + waveHeight}
      </Text>
      
    </View>
    
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
