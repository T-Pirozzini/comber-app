import React, { useState } from "react";
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

import { collection, addDoc, getDocs } from "firebase/firestore";
import { db, auth } from "../firebase/firebase-config";
import moment from "moment";

const currentTime = String(moment().fromNow());

export default function MessageBoard() {
  const [text, setText] = useState("");
  const [user, setUser] = useState("")
  const [time, setTime] = useState("")
  const [comment, setComment] = useState("")

  // const [userPost, setUserPost] = useState("");

  const posts: object[] = [];

  const addPost = async () => {
    try {
      const docRef = await addDoc(collection(db, "comments"), {
        currentUser: auth.currentUser?.email,
        timestamp: currentTime,
        postbox: text,
      });
      console.log(currentTime);
      console.log(auth.currentUser?.email);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const getPosts = async () => {
    const querySnapshot = await getDocs(collection(db, "comments"));
    let submittedPosts = {};
    querySnapshot.forEach((doc) => {      
        setUser(`${doc.id} => ${doc.data().currentUser}`)
        setTime(`${doc.id} => ${doc.data().timestamp}`)
        setComment(`${doc.id} => ${doc.data().text}`)
        console.log(`${doc.id} => ${doc.data().timestamp}`);
        // console.log(`${doc.id} => ${doc.data().timestamp}`);
        // console.log(`${doc.id} => ${doc.data().postbox}`);
        submittedPosts = {user: `${doc.data().currentUser.email}`, timestamp: `${doc.data().currentTime}`, postbox: `${doc.data().text}`}
        posts.push(submittedPosts)
    })         
  };

  // getPosts();

  return (
    <View style={styles.postContainer}>
      <Text style={styles.text}>Add a Comment</Text>

      <TextInput
        placeholder="enter a comment here"
        value={text}
        onChangeText={(text) => setText(text)}
      ></TextInput>
      <TouchableOpacity onPress={addPost}>
        <Text>Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={getPosts}>
        <Text>Get Docs</Text>
      </TouchableOpacity>
      <Text>{user}</Text>
      <Text>{time}</Text>
      <Text>{comment}</Text>
      {/* <FlatList
        data={posts}
      />        */}
          
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    flexDirection: "row",
    color: "#FF5733",
    // justifyContent: "center",
  },
  postContainer: {},
});
