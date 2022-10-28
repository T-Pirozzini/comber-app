import React, { useState } from 'react'
import { View, Text, StyleSheet } from "react-native";
import { Button, SpeedDial } from "@rneui/themed";

export default function Tide() {
  
  const [open, setOpen] = useState(false)
  
  const [currentStationId, setCurrentStationId] = useState("")
  const [stationName, setStationName] = useState("")
  const [stationLat, setStationLat] = useState("")
  const [stationLng, setStationLng] = useState("")
  const [waveHeight, setWaveHeight] = useState("") 

  
  // API CALL #1: Get Tide Station Information: ID, Name and Coords - Then set state
  const getTideStationInfo = async () => {
    try {
      const response = await fetch(
        'https://api-iwls.dfo-mpo.gc.ca/api/v1/stations?chs-region-code=PAC'
      );
      const stationData = await response.json();
      // console.log(json)
      for (let i = 0; i < stationData.length; i++) {
        // Currently set to Nanaimo Harbour - Set this to dynamic city variable based on search
        if (stationData[i].officialName == 'Nanaimo Harbour') {          
          // console.log("STATION NAME", stationData[i].officialName)
          // console.log("STATION ID", stationData[i].id)
          // console.log("LATITUDE",stationData[i].latitude)
          // console.log("LONGITIDUE",stationData[i].longitude)
          
          setCurrentStationId(stationData[i].id)
          setStationName(stationData[i].officialName)
          setStationLat(stationData[i].latitude)
          setStationLng(stationData[i].longitude)
        }
      }
      // return stationData   
    } catch (error) {
      console.error(error);
    }
  };

  // API CALL #2: Get Wave height information based on station id - If current station matches station id, return wave height
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
      }         
      // return tideData;
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
      {/* <Text>
        {"STATION NAME: " + stationName}
        {"\n"}
        {"STATION LAT: " + stationLat}
        {"\n"}
        {"STATION LNG: " + stationLng}        
      </Text> */}
      <Button
        title="Wave-Height-Info"
        onPress={getWaveHeightInfo}
      />
       {/* <Text>       
        {"STATION CURRENT WAVE HEIGHT: " + waveHeight}
      </Text> */}

      <SpeedDial
        isOpen={open}
        icon={{ name: 'waves', type: "material-community", color: '#B74F6F' }}
        openIcon={{ name: 'close', color: '#B74F6F' }}
        onOpen={() => setOpen(!open)}
        onClose={() => setOpen(!open)}
        overlayColor="rgba(235, 213, 211, 0.0)" // make overlay transparent
        color="#031926"  
      >
        <SpeedDial.Action
          icon={{ name: 'location', type: 'entypo', color: '#7DD181' }}
          title={"Station: " + stationName}
          onPress={() => console.log('Add Something')}
          color="#fff"
          containerStyle={{margin: 8}}           
        />        
        <SpeedDial.Action
          icon={{name: 'latitude', type: "material-community", color: '#7DD181' }}
          title={"Latitude: " + stationLat}
          onPress={() => console.log('Delete Something')}
          color="#fff"
          containerStyle={{margin: 8}}
        />    
        <SpeedDial.Action
          icon={{name: 'longitude', type: "material-community", color: '#7DD181' }}
          title={"Longitude: " + stationLng}
          onPress={() => console.log('Delete Something')}
          color="#fff"
          containerStyle={{margin: 8}}
        />   
        <SpeedDial.Action
          icon={{name: 'waves-arrow-up', type: "material-community", color: '#7DD181' }}
          title={"Wave Height: " + waveHeight}
          onPress={() => console.log('Delete Something')}
          color="#fff"
          containerStyle={{margin: 8}}
        />     
      </SpeedDial>            
    </View>    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});