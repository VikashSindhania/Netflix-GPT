// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnHM_ojl1gcf0hU0QeT-t5vsxfyG0lGcQ",
  authDomain: "netflixgpt-8a4cb.firebaseapp.com",
  projectId: "netflixgpt-8a4cb",
  storageBucket: "netflixgpt-8a4cb.appspot.com",
  messagingSenderId: "149530599589",
  appId: "1:149530599589:web:949bc6d6961654f25fad4c",
  measurementId: "G-H9JYNN23YT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//Import getAuth
export const auth = getAuth();
