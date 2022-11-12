import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState, useEffect, useRef } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import About from "../components/About";
import Login from "../components/Login";
// import Register from "../components/Register";
import FooterTabs from "./FooterTabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { auth } from "../firebase/firebase-config";
import { useNavigation } from "@react-navigation/native";

const Drawer = createDrawerNavigator();

export default function NavDrawer() { 
  const navigation = useNavigation();

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        // replacing current screen with Login Screen
        navigation.navigate("Map");        
      })
      .catch((error) => { alert(error.message) });
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
                style={{ marginRight:80 }}
              />
              <View style={styles.logout}>               
                {auth.currentUser && (
                  <Text style={{ fontSize: 12, color: "#7DD181" }}>
                    Hi, {auth.currentUser?.email.split("@")[0]}
                  </Text>
                )}
                {auth.currentUser && (
                  <TouchableOpacity
                    onPress={handleSignOut}
                    style={styles.logoutBtn}
                  >
                    <Text style={styles.logoutText}>Logout</Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          ),
          headerStyle: { backgroundColor: "#031926" },
        }}
      />
      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen name="Login" component={Login} />
      {/* <Drawer.Screen name="Register" component={Register} /> */}
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  heading: {
    alignContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
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
  },
});
