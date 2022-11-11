import React, { useEffect, useState } from "react";
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

import { collection, addDoc, getDocs, query, orderBy } from "firebase/firestore";
import { db, auth } from "../firebase/firebase-config";
import moment from "moment";
import { setBackgroundColorAsync } from "expo-system-ui";
import { RecaptchaVerifier } from "firebase/auth";
import { Card } from "@rneui/themed";
import { ScrollView } from "react-native-gesture-handler";


const getTime = () => {
  return moment().format('LLL');
}
// const currentTime = moment().format('LLL');

export default function MessageBoard() {
  const [text, setText] = useState("");   
  const [data, setData] = useState(null)
     
  const addPost = async () => {
    try {
      const docRef = await addDoc(collection(db, "comments"), {
        currentUser: auth.currentUser?.email,
        timestamp: getTime(),
        postbox: text,
      });
      // console.log(currentTime);
      // console.log(auth.currentUser?.email);
      console.log("Document written with ID: ", docRef.id);
      getPosts();
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  
  const getPosts = async () => {
    const q = query(collection(db, "comments"), orderBy("timestamp", "desc"))
    try {
    const querySnapshot = await getDocs(q);
    let results = [];    
    querySnapshot.forEach((doc) => {  
      results.push({ id: doc.id, ...doc.data() })
    });
    setData(results)
    } catch (e) {
    console.error("Error adding document: ", e);
    }
  }

  useEffect(() => {
    getPosts();
  }, [])
  
  const renderItem = ({ item }) => (    
    <ScrollView>
      <Card>    
        <Text style={{textAlign: "center", fontWeight: "700"}}>{item.currentUser}</Text>
        <Card.Divider />
        <Text>{item.postbox}</Text>    
        <Card.Divider />
        <Text style={{fontSize: 12}}>{item.timestamp.toString()}</Text>
      </Card>
    </ScrollView>
  );

  return (
    <View style={styles.postContainer}>

       <View>
        <Text style={styles.text}>Add a Comment</Text>
        <TextInput
          placeholder="enter a comment here"
          value={text}
          onChangeText={(text) => setText(text)}
        ></TextInput>
        <TouchableOpacity onPress={addPost}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>   

      <View>
      {data && (
        <FlatList
          data={data}
          renderItem={renderItem}          
        />
      )}        
      </View>     

    </View>    
  );
}


const styles = StyleSheet.create({
  text: {
    flexDirection: "row",
    color: "#FF5733",
    // justifyContent: "center",
  },
  postContainer: {
    flex: 1,
  },  
});
