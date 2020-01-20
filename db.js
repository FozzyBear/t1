import firebase from "firebase/app";
import "firebase/firestore";

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: "AIzaSyCogQ4j3kk7tnySh-YJQ5V0PLI0rSTRdlQ",
  authDomain: "messages-dca2f.firebaseapp.com",
  databaseURL: "https://messages-dca2f.firebaseio.com",
  projectId: "messages-dca2f",
  storageBucket: "messages-dca2f.appspot.com",
  messagingSenderId: "609697054461",
  appId: "1:609697054461:web:2ef4e4a818c7a5759c8894",
  measurementId: "G-6BYFPC7DT7"
});

export default firebase.firestore()
