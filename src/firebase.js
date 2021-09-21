import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp( {
    
    apiKey: "AIzaSyCmhHJ-0OhZh0U8XuiBSULqJGdjC_HME5A",
    authDomain: "unichat-37c4c.firebaseapp.com",
    projectId: "unichat-37c4c",
    storageBucket: "unichat-37c4c.appspot.com",
    messagingSenderId: "288866813472",
    appId: "1:288866813472:web:939e4b9e2fc56941961e45",
    measurementId: "G-Z5RLPWRTBK"

} ).auth();
