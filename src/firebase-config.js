// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD-TNBfbXengkHCEFW4JmPx-2_AKDnAv6A",
    authDomain: "katrina-ae74f.firebaseapp.com",
    projectId: "katrina-ae74f",
    storageBucket: "katrina-ae74f.appspot.com",
    messagingSenderId: "387599304541",
    appId: "1:387599304541:web:8a0d77fa6fff7fcac5cab4",
    measurementId: "G-3DE6Y0GF0L"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)

