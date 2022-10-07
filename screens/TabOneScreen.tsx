import { StyleSheet, TextInput } from 'react-native';
import Header from '../components/Header';
import LocationSearchHome from '../components/LocationSearchHome';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
      <Header />   
      <LocationSearchHome />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,    
  },
    
});
