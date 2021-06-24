import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCZ028BHWKLSQwVmlRER7cFcHG-Rw9WjLs",
    authDomain: "week11-a3dc2.firebaseapp.com",
    projectId: "week11-a3dc2",
    storageBucket: "week11-a3dc2.appspot.com",
    messagingSenderId: "388131762312",
    appId: "1:388131762312:web:d2bab1368958fafcfaaf3d"
  };

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;