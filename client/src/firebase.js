// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-estate-d27ad.firebaseapp.com",
    projectId: "mern-estate-d27ad",
    storageBucket: "mern-estate-d27ad.appspot.com",
    messagingSenderId: "455741655595",
    appId: "1:455741655595:web:198b76accdb978e099b86e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);