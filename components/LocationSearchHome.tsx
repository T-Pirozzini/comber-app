import { StyleSheet, TouchableOpacity, TextInput, Button, FlatList } from 'react-native';
import { Text, View } from './Themed';

export default function LocationSearchHome() {
  return (
    <View>
      <View style={styles.locationContainer}>        
        <TextInput
          style={styles.input}
          placeholder='Enter your location'
        />
        <Text style={styles.currentLocation}>Get current location</Text>
        <View style={styles.buttonContainer} >
          <Button 
            title="FORAGE"
            color="#B74F6F"                       
          />
        </View>
      </View>      
    </View>
  );
}

const styles = StyleSheet.create({  
  locationContainer: {
    flexDirection: "column",    
    alignItems: "center",
    backgroundColor: "#031926",
    borderRadius: 6,
    margin: 10,
    marginTop: 150,
  },
  currentLocation: {
    color: '#7DD181' 
  },
  input: {    
    backgroundColor: '#FFFFFF',
    padding: 10,
    margin: 10,
    width: 272,
    height: 43,
    borderColor: '#7DD181',
    borderWidth: 2,
    fontFamily: "TitilliumWeb_400Regular"
  },
  buttonContainer: {
    width: 177,      
    borderWidth: 2,    
    borderColor: '#FFFFFF',    
    borderRadius: 4,
    margin: 10,
  }
});
