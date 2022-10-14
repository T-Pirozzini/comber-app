import * as React from "react";

import MapView from 'react-native-maps';

import { Button, View, Text, StyleSheet, Dimensions } from "react-native";
// import Header from "./Header";
import Footer from "./Footer";
import { StatusBar } from "expo-status-bar";


{/* <LeafletView 
  
/> */}

export default function Map() {
  return (

    <View  style={styles.container}>
      <Text>MAP TESTING TESTING 123</Text>
      <MapView 
        style={{height: '80%', width: '100%'}} 
        initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421 }} 
      />
      <StatusBar style="auto" />
    </View>
    
           
    //   <View style={styles.container}>
    //     {/* <Header /> */}
    //     <Text>This is the Map Page.</Text>
      
    //     <Footer />
    //   </View>
      
    // </View>
   

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});