import React, { useState } from 'react';
import { View, Text, StyleSheet } from "react-native";
import { Card, ListItem, Button, Icon, SpeedDial } from "@rneui/themed";

// Open weather api
const weatherKey = process.env.REACT_APP_WEATHER_API_KEY


export default function Weather() {
  const [info, setInfo] = useState({
    city: "",
    temp: "",
    humidity: "",
    desc: "",    
  })
  const [open, setOpen] = useState(false)
  
  const getWeather = () => {
    // api endpoint for getting weather info by coords
    // fetch(`https://api.openweathermap.org/data/2.5/weather?lat=49.1628&lon=-123.9235&appid=${weatherKey}&units=metric`)
    // api endpoint for getting weather info by city name
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=london&appid=${weatherKey}&units=metric`)
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
      <Text>City: {info.city}</Text>
      <Text>Temperature: {info.temp}</Text>
      <Text>Humidity: {info.humidity}</Text>
      <Text>Description: {info.desc}</Text>
      <SpeedDial
        isOpen={open}
        icon={{ name: 'sun-o', type: "font-awesome", color: '#fff' }}
        openIcon={{ name: 'close', color: '#fff' }}
        onOpen={() => setOpen(!open)}
        onClose={() => setOpen(!open)}
      >
        <SpeedDial.Action
          icon={{ name: 'home-city', type: 'material-community', color: '#fff' }}
          title="City"
          onPress={() => console.log('Add Something')}
        />        
        <SpeedDial.Action
          icon={{name: 'thermometer', type: "font-awesome", color: '#fff' }}
          title="Temp"
          onPress={() => console.log('Delete Something')}
        />    
        <SpeedDial.Action
          icon={{name: 'drop', type: "entypo", color: '#fff' }}
          title="Humidity"
          onPress={() => console.log('Delete Something')}
        />   
        <SpeedDial.Action
          icon={{name: 'sun', type: "feather", color: '#fff' }}
          title="Description"
          onPress={() => console.log('Delete Something')}
        />     
      </SpeedDial>      
    </View>    
  )
}

