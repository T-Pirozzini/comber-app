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

export default function MessageBoard() {
  return (
    <View>
      <Text style={styles.text}>TESTING</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    flexDirection: "row",
    color: "#FF5733",
    // justifyContent: "center",
  },
});
