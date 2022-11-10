// Commented top code here is example from youtube guide
// Import the functions you need from the SDKs you need
// import {} from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBC_X3WvK79RTqB2-TmKhoh9kDt_8wJSa8",
//   authDomain: "comber-app-365823.firebaseapp.com",
//   projectId: "comber-app-365823",
//   storageBucket: "comber-app-365823.appspot.com",
//   messagingSenderId: "638495977944",
//   appId: "1:638495977944:web:8a4d82d7b5df86a65442ad",
// };

// // Initialize Firebase
// let app;
// if (firebase.apps.length === 0) {
//   app = firebase.initializeApp(firebaseConfig);
// } else {
//   app = firebase.app();
// }
// const auth = firebase.auth();

// export { auth };

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyBC_X3WvK79RTqB2-TmKhoh9kDt_8wJSa8",
  authDomain: "comber-app-365823.firebaseapp.com",
  projectId: "comber-app-365823",
  storageBucket: "comber-app-365823.appspot.com",
  messagingSenderId: "638495977944",
  appId: "1:638495977944:web:8a4d82d7b5df86a65442ad",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { auth, db };
