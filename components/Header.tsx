import { StyleSheet, TouchableOpacity, Text, View, Image, TextInput, Button, FlatList } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'

export default function Header() {
  return (
    <View style={styles.header}>       
        <FontAwesome name='navicon' color="#B74F6F" size={32} />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Comb</Text>             
          <Image 
            source={require('../assets/images/comb_logo.png')}            
            style={styles.image} 
          />          
        </View>      
    </View>
  )
}

const styles = StyleSheet.create ({
  header: {    
    flexDirection: 'row',        
    backgroundColor: '#031926',
    padding: 10,
    alignItems: 'center'    
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexGrow: 1,    
  },
  title: {
    color: '#B74F6F',
    fontSize: 40,
    padding: 10,
  },
  imageContainer: {
    // width: '100%',
  },
  image: {
    padding: 10,
    width: 50,    
    height: 70,
    borderColor: 'white',
    borderWidth: 3,  
  }, 

});