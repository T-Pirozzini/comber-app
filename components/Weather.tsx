import React, { useState } from 'react';
import { Button, View, Text, StyleSheet } from "react-native";

// Open weather api
const weatherKey = process.env.REACT_APP_WEATHER_API_KEY


export default function Weather() {
  const [info, setInfo] = useState({
    city: "",
    temp: "",
    humidity: "",
    desc: "",    
  })
  
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
    </View>    
  )
}

