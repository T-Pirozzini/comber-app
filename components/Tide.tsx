import React, { useState, useEffect } from 'react'
import { SpeedDial } from "@rneui/themed";
import moment from 'moment';

export default function Tide({city}) {
  
  const [open, setOpen] = useState(false)
  
  const [currentStationId, setCurrentStationId] = useState("")
  const [stationName, setStationName] = useState("")
  const [stationLat, setStationLat] = useState("")
  const [stationLng, setStationLng] = useState("")
  const [waveHeight, setWaveHeight] = useState("") 

  const [lowTide, setLowTide] = useState(2)
  const [highTide, setHighTide] = useState(2)
  const [lowTime, setLowTime] = useState("")
  const [highTime, setHighTime] = useState("")

  const currentDate = moment().format().split("T")[0];

  useEffect(() => {
    getTideStationInfo();
    getWaveHeightInfo();                 
  },[city])

  useEffect(() => {   
    getHighLowTide();
    // console.log("LOW", lowTide)
    // console.log("HIGH", highTide) 
  },[city, stationName])
  
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

  // API CALL #3: Get high and low tide
  const getHighLowTide = async () => {
    try {
      const response = await fetch(
        `https://api-iwls.dfo-mpo.gc.ca/api/v1/stations/${currentStationId}/data?time-series-code=wlp-hilo&from=${currentDate}T00%3A00%3A00Z&to=${currentDate}T24%3A00%3A00Z`
      );
      const highLowData = await response.json();
      // console.log("High and Low Tide Info", highLowData)
      setLowTide(highLowData[0].value)
      setHighTide(highLowData[0].value)
      for (let i = 0; i < highLowData.length; i++) {
        // console.log("VALUES:", highLowData[i].value)                  
        if (highLowData[i].value <= lowTide) {
          setLowTide(highLowData[i].value)
          setLowTime(highLowData[i].eventDate.split("T")[1].slice(0,5))                  
        }
        if (highLowData[i].value >= highTide) {
          setHighTide(highLowData[i].value)
          setHighTime(highLowData[i].eventDate.split("T")[1].slice(0,5))                    
        }
      }
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
        color="#031926"
        containerStyle={{margin: -15}}         
      />        
      <SpeedDial.Action
        icon={{name: 'earth', type: "material-community", color: '#7DD181' }}
        title={"Lat: " + Number(stationLat).toFixed(2) + "°" + "  Lng: " + Number(stationLng).toFixed(2) + "°"}
        titleStyle = {{backgroundColor: "rgba(3, 25, 38, 1)", color: "#7DD181" }}                 
        color="#031926"
        containerStyle={{margin: -15}}
      />   
      <SpeedDial.Action
        icon={{name: 'arrow-up', type: "material-community", color: '#7DD181' }}
        title={"High Tide: " + highTide + "m" + " @ " + highTime}
        titleStyle = {{backgroundColor: "rgba(3, 25, 38, 1)", color: "#7DD181" }}        
        color="#031926"
        containerStyle={{margin: -15}}
      />
      <SpeedDial.Action
        icon={{name: 'arrow-down', type: "material-community", color: '#7DD181'}}         
        title={"Low Tide: " + lowTide + "m" + " @ " + lowTime}
        titleStyle = {{backgroundColor: "rgba(3, 25, 38, 1)", color: "#7DD181" }}        
        color="#031926"
        containerStyle={{margin: -15}}
      />        
    </SpeedDial>            
  )
}
