import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import * as firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDtJrkcvQZMBsPdoZTWUK_ga17u9XVRB90",
  authDomain: "cart-ff6b2.firebaseapp.com",
  projectId: "cart-ff6b2",
  storageBucket: "cart-ff6b2.appspot.com",
  messagingSenderId: "564178581842",
  appId: "1:564178581842:web:b32475e7237485372d228b",
  measurementId: "${config.measurementId}"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById("root"));

