import firebase from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCzcS9OJvSbS2xJCm0sxJZxi--iln5Xl4Y",
  authDomain: "newfirebase-748fd.firebaseapp.com",
  projectId: "newfirebase-748fd",
  storageBucket: "newfirebase-748fd.appspot.com",
  messagingSenderId: "978396762568",
  appId: "1:978396762568:web:e105561973ff0bbda1f0fd"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init firestore
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export {projectFirestore, timestamp}