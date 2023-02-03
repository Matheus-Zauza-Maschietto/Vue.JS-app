import * as firebase from "firebase/app";
import "firebase/firestore";
let firebaseConfig = {
    apiKey: "AIzaSyDKxvkMSaQ1KJ1l1Aqc7jDnODFi4KxJP-o",
    authDomain: "vueapp-c67fe.firebaseapp.com",
    projectId: "vueapp-c67fe",
    storageBucket: "vueapp-c67fe.appspot.com",
    messagingSenderId: "216675818186",
    appId: "1:216675818186:web:e49ed8b4d87abb089b7233",
    measurementId: "G-N3WT955V1H"
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Obtenha uma referência ao seu banco de dados
var db = firebase.firestore();

var item = { name: "item1", description: "item1 description" };

db.collection("items").add(item)
  .then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
  })
  .catch(function(error) {
    console.error("Error adding document: ", error);
  });
