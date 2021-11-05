import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCEkR9vpAStttFtjNjqKvGH0B8Z1Ase9oE",
  authDomain: "bewclone.firebaseapp.com",
  databaseURL: "https://bewclone.firebaseio.com",
  projectId: "bewclone",
  storageBucket: "bewclone.appspot.com",
  messagingSenderId: "94265914093",
  appId: "1:94265914093:web:3643bee449659cbc8fd2e4",
  measurementId: "G-ZVPVMKXNXF",
});

//const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
