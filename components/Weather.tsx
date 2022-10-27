import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from "react-native";
import { Button, SpeedDial } from "@rneui/themed";

// Open weather api
const weatherKey = process.env.REACT_APP_WEATHER_API_KEY


export default function Weather() {
  const [open, setOpen] = useState(false)
  const [info, setInfo] = useState({
    city: "",
    temp: "",
    humidity: "",
    desc: "",    
  })  
  
  useEffect(() => {    
    getWeather()  
  }, [])
  

  const getWeather = () => {
    // api endpoint for getting weather info by coords
    // fetch(`https://api.openweathermap.org/data/2.5/weather?lat=49.1628&lon=-123.9235&appid=${weatherKey}&units=metric`)
    // api endpoint for getting weather info by city name
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=vancouver&appid=${weatherKey}&units=metric`)
    .then(data => data.json())
    .then(results => {    
    setInfo({
      city: results.name,
      temp: results.main.temp,
      humidity: results.main.humidity,
      desc: results.weather[0].description,      
    })
    })
  }

  return (
    <View>      
      <Button title="Get-Weather" onPress={getWeather}></Button>
      {/* <Text>City: {info.city}</Text> */}
      {/* <Text>Temperature: {info.temp}</Text> */}
      {/* <Text>Humidity: {info.humidity}</Text> */}
      {/* <Text>Description: {info.desc}</Text> */}
      <SpeedDial
        isOpen={open}
        icon={{ name: 'sun-o', type: "font-awesome", color: '#B74F6F' }}
        openIcon={{ name: 'close', color: '#B74F6F' }}
        onOpen={() => setOpen(!open)}
        onClose={() => setOpen(!open)}
        overlayColor="rgba(235, 213, 211, 0.0)" // make overlay transparent
        color="#031926"  
      >
        <SpeedDial.Action
          icon={{ name: 'home-city', type: 'material-community', color: '#7DD181' }}
          title={"City: " + info.city}
          onPress={() => console.log('Add Something')}
          color="#fff"
          containerStyle={{margin: 8}}           
        />        
        <SpeedDial.Action
          icon={{name: 'thermometer', type: "font-awesome", color: '#7DD181' }}
          title={"Temperature: " + info.temp}
          onPress={() => console.log('Delete Something')}
          color="#fff"
          containerStyle={{margin: 8}}
        />    
        <SpeedDial.Action
          icon={{name: 'drop', type: "entypo", color: '#7DD181' }}
          title={"Humidity: " + info.humidity}
          onPress={() => console.log('Delete Something')}
          color="#fff"
          containerStyle={{margin: 8}}
        />   
        <SpeedDial.Action
          icon={{name: 'sun', type: "feather", color: '#7DD181' }}
          title={"Details: " + info.desc}
          onPress={() => console.log('Delete Something')}
          color="#fff"
          containerStyle={{margin: 8}}
        />     
      </SpeedDial>      
    </View>    
  )
}

