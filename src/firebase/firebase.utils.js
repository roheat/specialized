import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCG-MEumJlBfge--nr0GdVdLqzjOFP4M7A",
  authDomain: "specialized-ed2ff.firebaseapp.com",
  databaseURL: "https://specialized-ed2ff.firebaseio.com",
  projectId: "specialized-ed2ff",
  storageBucket: "specialized-ed2ff.appspot.com",
  messagingSenderId: "181021433541",
  appId: "1:181021433541:web:f00a68d5c4e0bf01a65aac",
  measurementId: "G-8YF2SLCHPN"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: " select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
