import React, { useState, useEffect } from 'react'
import {
  Button,
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity
} from "react-native";
import { createDrawerNavigator, DrawerItem } from "@react-navigation/drawer";
import About from "../components/About";
import Login from "../components/Login";
import Register from "../components/Register";
import FooterTabs from "../components/FooterTabs";

import CombLogo from "../assets/images/comb_logo.png";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { auth } from "../firebase/firebase-config";
import { signOut } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { withTheme } from '@rneui/themed';

const Drawer = createDrawerNavigator();

export default function NavDrawer() {

  const [currentUser, setCurrentUser] = useState("Billy")
  const navigation = useNavigation();
  const handleSignOut = () => {
    signOut
      .then(() => {
        // replacing current screen with Login Screen
        navigation.replace("Login");
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <Drawer.Navigator
      initialRouteName="DrawerHome"      
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#031926",
          width: "80%",
        },
        drawerLabelStyle: {
          color: "#B74F6F",
        },
        drawerActiveTintColor: "#EEEEFF",
        overlayColor: "#EEEEFF",
      }}
    >
      <Drawer.Screen
        name="Comb"
        component={FooterTabs}
        options={{                
          headerTintColor: "#B74F6F",
          headerTitleStyle: {
            fontFamily: "Alice_400Regular",
            fontSize: 40,          
          },        
          headerRight: () => (
            <View style={styles.heading}>              
              <MaterialCommunityIcons
                name={"jellyfish-outline"} // Change to Comb Logo
                title={"Comb"}
                color={"#B74F6F"}
                size={36}
                style={{ marginRight: 125 }}
              />
              <View style={styles.logout}>
                <Text style={{ fontSize: 12, color:"#7DD181" }}>Hi, {currentUser}</Text>               
                <TouchableOpacity onPress={handleSignOut} style={styles.logoutBtn}>
                  <Text style={styles.logoutText}>Logout</Text>
                </TouchableOpacity>                
              </View>
              
            </View> 
          ),          
          headerStyle: { backgroundColor: "#031926" },
        }}
      />

      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen name="Login" component={Login} />
      <Drawer.Screen name="Register" component={Register} />      
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  heading: {   
    alignContent: "space-between",
    flexDirection: "row",   
    alignItems: "center"
  },
  logout: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
    marginRight: 5,
  },
  logoutBtn: {
    color: "white",
    backgroundColor: "#B74F6F",
    padding: 4,
    borderRadius: 4,
  },
  logoutText: {
    color: "white",
    fontWeight: "700",
  }
});
