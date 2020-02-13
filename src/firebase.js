import firebase from "firebase/app"
import "firebase/firestore"

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBIPw_Tb5KPOwnHnVrC6oXUqmu2_NuIdRU",
    authDomain: "frontend-og-databaser.firebaseapp.com",
    databaseURL: "https://frontend-og-databaser.firebaseio.com",
    projectId: "frontend-og-databaser",
    storageBucket: "frontend-og-databaser.appspot.com",
    messagingSenderId: "38294432980",
    appId: "1:38294432980:web:130ca1c7440ec63645df41"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore()