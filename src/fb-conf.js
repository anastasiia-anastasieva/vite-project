// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD_Zw1P08ccKY_6qIEL0uGGDWUQZEi2b1k",
    authDomain: "react-81fe3.firebaseapp.com",
    projectId: "react-81fe3",
    storageBucket: "react-81fe3.appspot.com",
    messagingSenderId: "617294049833",
    appId: "1:617294049833:web:cae567d80dbc1fe517e238",
    measurementId: "G-BFW1KNSPY5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// const analytics = getAnalytics(app);