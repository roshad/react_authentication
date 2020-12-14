import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCIPG_xmq2Tm-vwu5y2YjcBUbC-rXHxgxI",
  authDomain: "nn-cms-c7400.firebaseapp.com",
  databaseURL: "https://nn-cms-c7400.firebaseio.com",
  projectId: "nn-cms-c7400",
  storageBucket: "nn-cms-c7400.appspot.com",
  messagingSenderId: "928895076809",
  appId: "1:928895076809:web:559f887468f0438ab48018",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth()
export {firebase,auth}