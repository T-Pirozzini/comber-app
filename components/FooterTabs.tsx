import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Image,
  TextInput,
  Button,
  FlatList,
} from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./Home";
import Map from "./Map";
import MessageBoard from "./MessageBoard";
import Info from "./Info";
import {
  MaterialCommunityIcons,
  Ionicons,
  FontAwesome,
} from "@expo/vector-icons";
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export default function FooterTabs() {
  return (
    <Tab.Navigator
      initialRouteName="FooterHome"
      screenOptions={{
        tabBarActiveTintColor: "#7DD181",
        tabBarActiveBackgroundColor: "#031926",
        tabBarInactiveBackgroundColor: "white",
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Map"
        component={Map}
        options={{
          tabBarLabel: "Harvest Locations",

          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="map" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Chat"
        component={MessageBoard}
        options={{
          tabBarLabel: "Message Board",

          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="chat" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Info"
        component={Info}
        options={{
          tabBarLabel: "Species Info",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="information-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
