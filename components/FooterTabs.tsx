import { StyleSheet, TouchableOpacity, Text, View, Image, TextInput, Button, FlatList } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import Home from "./Home";
import Map from "./Map";
import Recipes from './Recipes';
import Info from './Info';
import { MaterialCommunityIcons } from '@expo/vector-icons';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Tab = createBottomTabNavigator();

export default function FooterTabs() {
  return (    
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
      tabBarActiveTintColor: '#e91e63',
    }}
    >
      <Tab.Screen         
        name="Home"
        component={Home} 
        options= {{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen 
        name="Map" 
        component={Map}
        options= {{
          tabBarLabel: 'Map',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="map" color={color} size={size} />
          ),
        }}        
      />
      <Tab.Screen 
        name="Recipes" 
        component={Recipes}
        options= {{
          tabBarLabel: 'Recipes',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="food" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen 
        name="Info" 
        component={Info}
        options= {{
          tabBarLabel: 'Info',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="info" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>    
  )
}


