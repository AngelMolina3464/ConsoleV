// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB3uPUSAl3x61oJtnsU621pOyLePp3fGWg",
  authDomain: "firestoremvc.firebaseapp.com",
  projectId: "firestoremvc",
  storageBucket: "firestoremvc.appspot.com",
  messagingSenderId: "315148376147",
  appId: "1:315148376147:web:de13940e28c380db1f8ea6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
