// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDv0tvRzYCDgchS509XeQpG3is9CLFBRHE",
  authDomain: "netflix-gpt-84c00.firebaseapp.com",
  projectId: "netflix-gpt-84c00",
  storageBucket: "netflix-gpt-84c00.firebasestorage.app",
  messagingSenderId: "375940996668",
  appId: "1:375940996668:web:fb5227b3bc2c8ef9926d39",
  measurementId: "G-S54LNG7R6Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(); // for every api call we need this . so we are keeping here so that we can make call whenever we need 