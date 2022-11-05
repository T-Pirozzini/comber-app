import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Image,
  TextInput,
  Button,
  FlatList,
  KeyboardAvoidingView,
} from "react-native";

export default function Login() {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          // value= {}
          // onChangeText={text => }
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          // value= {}
          // onChangeText={text => }
          style={styles.input}
          secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => {}} style={styles.button}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#6D6D6D",
  },
  inputContainer: {
    width: "80%",
  },

  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },

  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },

  button: {
    backgroundColor: "#6495ED",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },

  // buttonOutline: {
  //   backgroundColor: "#FFFFF",
  //   borderColor: "#0782F9",
  //   marginTop: 5,
  //   borderWidth: 2,
  // },

  // buttonOutlineText: {},

  buttonText: {
    color: "#FFFFF",
    fontWeight: "700",
    fontSize: 18,
  },
});
