import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBT3q5WZWBNhi216WdZtvEP38Xvpcy4KqQ",
    authDomain: "final-project-fbp.firebaseapp.com",
    databaseURL: "https://final-project-fbp-default-rtdb.firebaseio.com",
    projectId: "final-project-fbp",
    storageBucket: "final-project-fbp.appspot.com",
    messagingSenderId: "1005563678038",
    appId: "1:1005563678038:web:0ab3383353ed8c936bdaf7",
    measurementId: "G-72PSPYT5EJ"
  };

  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const db = firebase.firestore();
  const storage = firebase.storage();

  export {auth, db, storage}