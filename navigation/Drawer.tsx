import { Button, View, Text, StyleSheet, Image, SafeAreaView } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import About from "../components/About";
import Home from "../components/Home";
import Map from "../components/Map";
import Header from "../components/Header";
import { greaterThan } from "react-native-reanimated";

const Drawer = createDrawerNavigator();

export default function NavDrawer() {
  return (
    <NavigationContainer>              
      <Drawer.Navigator 
        initialRouteName="Home"
        screenOptions={{
          drawerStyle: {
          backgroundColor: '#031926',
          width: "80%", 
          },          
          drawerLabelStyle: {
            color: '#B74F6F'
          },
          drawerActiveTintColor: '#EEEEFF',          
          overlayColor: '#EEEEFF',       
        }}
      >
        <Drawer.Screen                  
          name="Home" 
          component={Home} 
          options={{
            title: 'Comb',
            headerTitleAlign: 'center',
            headerTintColor: "#B74F6F",
            headerStyle: {backgroundColor: '#031926'},                         
            }}            
        />
        <Drawer.Screen name="About" component={About} />
        <Drawer.Screen name="Map" component={Map} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  heading: {
    color: 'red',
  }


})