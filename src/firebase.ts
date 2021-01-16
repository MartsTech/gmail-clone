import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0IrMIypspP1UDYg6a5RCt7K2yPmGznNs",
  authDomain: "clone-a3b58.firebaseapp.com",
  projectId: "clone-a3b58",
  storageBucket: "clone-a3b58.appspot.com",
  messagingSenderId: "412971575323",
  appId: "1:412971575323:web:9e9d7b6d27792c352730be",
  measurementId: "G-JZTHS5L5PK",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
