import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const API_KEY = process.env.REACT_APP_API_KEY 

var firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "refactored-organize-db.firebaseapp.com",
  projectId: "refactored-organize-db",
  storageBucket: "refactored-organize-db.appspot.com",
  messagingSenderId: "880993233123",
  appId: "1:880993233123:web:13ee9d18a782cf05eefdd6",
  measurementId: "G-SVWC8GX5D9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots: true})

  export default firebase