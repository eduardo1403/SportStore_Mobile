// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_X_PvTDkuywNj37AlLUZWjbrteIsxddc",
  authDomain: "encuesta-cfa39.firebaseapp.com",
  projectId: "encuesta-cfa39",
  storageBucket: "encuesta-cfa39.appspot.com",
  messagingSenderId: "761471181722",
  appId: "1:761471181722:web:fbfb4521d8ec68e6209023",
  measurementId: "G-FW6EJ35YB3"
};

// Initialize Firebaseee
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;