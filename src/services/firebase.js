// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzTtoeYa6POBCWkHdVNEZov2ZdQ0rrbg4",
  authDomain: "project-3-e4020.firebaseapp.com",
  projectId: "project-3-e4020",
  storageBucket: "project-3-e4020.appspot.com",
  messagingSenderId: "498699891472",
  appId: "1:498699891472:web:261116761214877b5aeb95",
  measurementId: "G-V5NFDTR1HM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);
