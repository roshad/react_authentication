import React from "react";
import ReactDOM from "react-dom";

import {App} from "./App";
import reportWebVitals from "./reportWebVitals";

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
ReactDOM.render(
  <React.StrictMode>
    
      <App />
    
  </React.StrictMode>,
  document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
