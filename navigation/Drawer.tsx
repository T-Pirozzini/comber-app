import {
  Button,
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
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

const Drawer = createDrawerNavigator();

export default function NavDrawer() {
  const navigation = useNavigation();
  const handleSignOut = () => {
    signOut
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <Drawer.Navigator
      initialRouteName="Home"
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
        name="Home"
        component={FooterTabs}
        options={{
          title: "Comb",
          headerTitleAlign: "center",
          headerTintColor: "#B74F6F",
          headerTitleStyle: {
            fontFamily: "Alice_400Regular",
            fontSize: 40,
          },

          headerRight: () => (
            <MaterialCommunityIcons
              name={"jellyfish-outline"} // Change to Comb Logo
              title={"Comb"}
              color={"#B74F6F"}
              size={36}
              style={{ marginRight: 95 }}
            />
          ),
          headerStyle: { backgroundColor: "#031926" },
        }}
      />

      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen name="Login" component={Login} />
      <Drawer.Screen name="Register" component={Register} />
      {/* <Button title="Logout" onPress={handleSignOut} /> */}
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  heading: {
    color: "red",
  },
  // logo,
});
