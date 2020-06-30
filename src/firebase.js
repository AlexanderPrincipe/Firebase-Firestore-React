import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyAHOt_feCEOzlSBYUvjUDDvU0UfXfimPjw",
    authDomain: "practica-crud-react.firebaseapp.com",
    databaseURL: "https://practica-crud-react.firebaseio.com",
    projectId: "practica-crud-react",
    storageBucket: "practica-crud-react.appspot.com",
    messagingSenderId: "68061528596",
    appId: "1:68061528596:web:e044acbd4753f294541d01"
  };
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);

  export const db = fb.firestore();

