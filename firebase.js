// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_9ckq14fm_CEu1erT9IGP_xWsflEk9g0",
  authDomain: "loan-management-system-b2491.firebaseapp.com",
  projectId: "loan-management-system-b2491",
  storageBucket: "loan-management-system-b2491.firebasestorage.app",
  messagingSenderId: "650583968378",
  appId: "1:650583968378:web:d59cc8a866dee8a1a089c3",
  measurementId: "G-FC4Z9NH3XF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { auth, app, analytics, db};
