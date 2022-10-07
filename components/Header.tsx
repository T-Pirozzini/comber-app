import { StyleSheet, TouchableOpacity, Text, View, Image, TextInput, Button, FlatList } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}> 
      <View style={styles.logo}>
        <Text style={styles.title}>Comb</Text>     
        <Image 
          source={require('../assets/images/comb_logo.png')}
          style={{width: 80, height: 100}} 
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
  },
  title: {
    color: '#B74F6F',
    fontSize: 40,
    padding: 10,
  },
  logo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  }

});