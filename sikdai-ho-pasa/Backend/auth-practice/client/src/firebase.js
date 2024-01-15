// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-e4580.firebaseapp.com",
  projectId: "mern-auth-e4580",
  storageBucket: "mern-auth-e4580.appspot.com",
  messagingSenderId: "1155197445",
  appId: "1:1155197445:web:e783d2acc1e45b71af4a6c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);