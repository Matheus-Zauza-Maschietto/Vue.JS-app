import firebase from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyDKxvkMSaQ1KJ1l1Aqc7jDnODFi4KxJP-o",
    authDomain: "vueapp-c67fe.firebaseapp.com",
    projectId: "vueapp-c67fe",
    storageBucket: "vueapp-c67fe.appspot.com",
    messagingSenderId: "216675818186",
    appId: "1:216675818186:web:e49ed8b4d87abb089b7233",
    measurementId: "G-N3WT955V1H"
  };

if(!firebase.getApps.length){
    initializeApp(firebaseConfig);
}

export default firebase
