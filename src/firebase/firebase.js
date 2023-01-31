import firebase from "firebase-old";

var firebaseConfig = {
  apiKey: "AIzaSyABKGL3VysecXyTfLETFEFgECIY7YBOSvM",
  authDomain: "react-app-c665c.firebaseapp.com",
  databaseURL: "https://react-app-c665c.firebaseio.com",
  projectId: "react-app-c665c",
  storageBucket: "react-app-c665c.appspot.com",
  messagingSenderId: "194586263958",
  appId: "1:194586263958:web:000d005d86738514729db7",
  measurementId: "G-9YBF53SXLK",
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;
