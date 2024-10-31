// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: "smarttrainer-e3e9a.firebaseapp.com",
  projectId: "smarttrainer-e3e9a",
  storageBucket: "smarttrainer-e3e9a.appspot.com",
  messagingSenderId: "77716023729",
  appId: "1:77716023729:web:5ef229fd948b9fb390f590"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)