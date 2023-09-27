// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwG_qS_GMUAdemH1cJ4TklQ4HS0P9Ew58",
  authDomain: "solacetracking-8b203.firebaseapp.com",
  projectId: "solacetracking-8b203",
  storageBucket: "solacetracking-8b203.appspot.com",
  messagingSenderId: "590070447507",
  appId: "1:590070447507:web:c18262c49c84f4fe3f7c66",
  measurementId: "G-D3TZ050JCB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
