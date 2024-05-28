import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAX75LUk6XkSHt_LzlnP4mqrViRR2HVCl4",
  authDomain: "proyectopruebareact2.firebaseapp.com",
  projectId: "proyectopruebareact2",
  storageBucket: "proyectopruebareact2.appspot.com",
  messagingSenderId: "644514599135",
  appId: "1:644514599135:web:65555d07c4ac299141596a",
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
