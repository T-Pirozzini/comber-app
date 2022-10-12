import { Button, View, Text, StyleSheet, Image, SafeAreaView } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import About from "../components/About";
import Home from "../components/Home";
import Header from "../components/Header";

const Drawer = createDrawerNavigator();
export default function NavDrawer() {
  return (
    <NavigationContainer style={styles.heading}>
      {/* <Header /> */}
        <View>
          <Text>DO ANYTHING</Text>
        </View>
      <Drawer.Navigator 
        initialRouteName="Home"
        // drawerContent={<Image
        //   source={require("../assets/images/comb_logo.png")}
        //   style={{ width: 50, height: 50}}
        // />}
        // <Icon name="Comb logo" source={"../assets/images/comb_logo.png"} />
      >
        <Drawer.Screen 
                 
          name="Home" 
          component={Home} 
          options={{
            title: 'Comb',
            headerTitleAlign: 'center',
            headerTintColor: "#B74F6F",
            headerBackground: () => (
              <Image
              source={require("../assets/images/comb_logo.png")}
              style={{ width: 50, height: 50, backgroundColor: '#031926', }}
              // style={StyleSheet.absoluteFill}
              />          
              ),
              // headerStyle: {
              //   backgroundColor: '#031926',              
              // },
            }}             
            
           />
        <Drawer.Screen name="About" component={About} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  heading: {
    color: 'red',
  }


})