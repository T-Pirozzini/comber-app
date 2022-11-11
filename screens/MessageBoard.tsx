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

export default function MessageBoard(props) {
  const [text, setText] = useState("");   
  const [data, setData] = useState(null)  

  console.log("CITY:", props)
     
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
        <Text style={styles.commentTitle}>{item.currentUser.split('@')[0]}</Text>
        <Card.Divider />
        <Text style={styles.comment}>{item.postbox}</Text>    
        <Card.Divider />
        <Text style={{fontSize: 12, textAlign: "center"}}>{item.timestamp.toString()}</Text>
      </Card>
    </ScrollView>
  );

  return (
   <View style={styles.mainContainer}>
    <View style={styles.commentContainer}>
      <Text style={styles.postTitle}>Post an update:</Text>
      <TextInput
        placeholder="Enter a comment..."
        value={text}
        onChangeText={(text) => setText(text)}
        style={styles.input}
      ></TextInput>
      <TouchableOpacity 
        onPress={addPost}
        style={styles.btn}>
        <Text style={styles.btnText}>SUBMIT COMMENT</Text>
      </TouchableOpacity>
    </View>   
    <View style={styles.postContainer}>      
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
  mainContainer: {
    flex: 1,
    alignItems: "center",    
  },
  postTitle: {
    flexDirection: "row",
    color: "black",
    fontSize: 16,
    fontFamily: "TitilliumWeb_400Regular"
  },
  postContainer: {    
    width: "100%",   
  },
  commentContainer: {    
    alignItems: "center",
    backgroundColor: "#7DD181",
    margin: 5,
    padding: 5,    
    borderRadius: 10,
  },
  input: {
    backgroundColor: "white",    
    margin: 5,
    padding: 5,
    width: 250,
    fontFamily: "TitilliumWeb_400Regular"
  },
  btn: {   
    backgroundColor: "#031926",
    width: "60%",
    borderRadius: 4,
    padding: 10,
    marginTop: 5,

  },
  btnText: {
    color: "#B74F6F",
    fontFamily: "TitilliumWeb_400Regular"    
  },
  commentTitle: {
    textAlign: "center",
    fontSize: 16,
    fontFamily: "TitilliumWeb_700Bold"
  },
  comment: {
    fontFamily: "TitilliumWeb_400Regular",   
  }  
});
