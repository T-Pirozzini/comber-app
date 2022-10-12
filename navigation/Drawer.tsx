import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import About from "../components/About";
import Home from "../components/Home";
import Header from "../components/Header";

const Drawer = createDrawerNavigator();
export default function NavDrawer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="About" component={About} />
      </Drawer.Navigator>
      <Header />
    </NavigationContainer>
  );
}
