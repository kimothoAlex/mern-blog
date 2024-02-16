// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-6422f.firebaseapp.com",
  projectId: "mern-blog-6422f",
  storageBucket: "mern-blog-6422f.appspot.com",
  messagingSenderId: "363710994667",
  appId: "1:363710994667:web:bd96d26983f45d63f106ae",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
