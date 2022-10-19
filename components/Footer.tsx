import { StyleSheet, TouchableOpacity, Text, View, Image, TextInput, Button, FlatList } from 'react-native';


export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.quote}>Your foraging companion.</Text>
    </View>   
  )
}

const styles = StyleSheet.create ({
 footer: { 
  alignItems: 'center',
  backgroundColor: '#031926',
  position: 'absolute',
  bottom: 0,
  width: '100%',  
 },
 quote: {
  color: '#B74F6F',
  fontSize: 24,
 }
})