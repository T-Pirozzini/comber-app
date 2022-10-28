import React, { useState, useEffect } from 'react'
import { SpeedDial } from "@rneui/themed";

export default function Tide({city}) {
  
  const [open, setOpen] = useState(false)
  
  const [currentStationId, setCurrentStationId] = useState("")
  const [stationName, setStationName] = useState("")
  const [stationLat, setStationLat] = useState("")
  const [stationLng, setStationLng] = useState("")
  const [waveHeight, setWaveHeight] = useState("") 

  useEffect(() => {
    getTideStationInfo();
    getWaveHeightInfo();
  },[city])
  
  // API CALL #1: Get Tide Station Information: ID, Name and Coords - Then set state
  const getTideStationInfo = async () => {
    try {
      const response = await fetch(
        'https://api-iwls.dfo-mpo.gc.ca/api/v1/stations?chs-region-code=PAC'
      );
      const stationData = await response.json();     
      // loop through all stationData
      for (let i = 0; i < stationData.length; i++) {        
        // if city is is longer than one word, city equals only the first word
        if (city.split(" ").length > 1) {
          city = city.split(' ')[0]          
        }
        // Set state if current city matches station Name
        if (stationData[i].officialName.split(" ")[0].toLowerCase() == `${city}`) {         
          setCurrentStationId(stationData[i].id)
          setStationName(stationData[i].officialName)
          setStationLat(stationData[i].latitude)
          setStationLng(stationData[i].longitude)
        } 
      }
      // return stationData  -- need an error message for the user if the city station does not exist  
    } catch (error) {console.log("ERROR", error)}    
  };

  // API CALL #2: Get Wave height information based on station id - If current station matches station id, return wave height
  const getWaveHeightInfo = async () => {
    try {
      const response = await fetch(
        'https://api-iwls.dfo-mpo.gc.ca/api/v1/stations/data/latest'
      );
      const tideData = await response.json();      
      // loop through all canadian tide station data
      for (let i = 0; i < tideData.length; i++) {        
        // if a tide station matches the current stations ID, return wave height        
        if (tideData[i].stationId == currentStationId) {        
          setWaveHeight(tideData[i].measurementPublicDTOs[i].value)            
        }                           
      }         
      // Display an error if no tide data or match -- set up a notification for the user
    } catch (error) {
      console.error(error);
    }
  }; 

  return (  
    <SpeedDial
      isOpen={open}
      icon={{ name: 'waves', type: "material-community", color: '#B74F6F' }}
      openIcon={{ name: 'close', color: '#B74F6F' }}
      onOpen={() => setOpen(!open)}
      onClose={() => setOpen(!open)}
      overlayColor="rgba(235, 213, 211, 0.0)" // make overlay transparent
      color="#031926"
      placement="right"
      size="small" 
    >
      <SpeedDial.Action
        icon={{ name: 'location', type: 'entypo', color: '#7DD181' }}
        title={"Station: " + stationName}
        titleStyle = {{backgroundColor: "rgba(3, 25, 38, 1)", color: "#7DD181" }}
        onPress={() => console.log('Add Something')}
        color="#031926"
        containerStyle={{margin: -15}}         
      />        
      <SpeedDial.Action
        icon={{name: 'latitude', type: "material-community", color: '#7DD181' }}
        title={"Latitude: " + stationLat}
        titleStyle = {{backgroundColor: "rgba(3, 25, 38, 1)", color: "#7DD181" }}
        onPress={() => console.log('Delete Something')}          
        color="#031926"
        containerStyle={{margin: -15}}
      />    
      <SpeedDial.Action
        icon={{name: 'longitude', type: "material-community", color: '#7DD181' }}
        title={"Longitude: " + stationLng}
        titleStyle = {{backgroundColor: "rgba(3, 25, 38, 1)", color: "#7DD181" }}
        onPress={() => console.log('Delete Something')}
        color="#031926"
        containerStyle={{margin: -15}}
      />   
      <SpeedDial.Action
        icon={{name: 'waves-arrow-up', type: "material-community", color: '#7DD181' }}
        title={"Wave Height: " + waveHeight}
        titleStyle = {{backgroundColor: "rgba(3, 25, 38, 1)", color: "#7DD181" }}
        onPress={() => console.log('Delete Something')}
        color="#031926"
        containerStyle={{margin: -15}}
      />     
    </SpeedDial>            
  )
}
