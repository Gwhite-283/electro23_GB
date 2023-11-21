import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "fb-43230-jose.firebaseapp.com",
  projectId: "fb-43230-jose",
  storageBucket: "fb-43230-jose.appspot.com",
  messagingSenderId: "856777779834",
  appId: "1:856777779834:web:26235c59a9ba48f2b129c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
