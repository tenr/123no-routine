// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4nVnKJvgWGf9s0lmbxN9gVt_vlk7VEV8",
  authDomain: "no-routine.firebaseapp.com",
  projectId: "no-routine",
  storageBucket: "no-routine.appspot.com",
  messagingSenderId: "270374796200",
  appId: "1:270374796200:web:c597dd29c50e8d7fb57b9d",
  measurementId: "G-XYT2F9E2C4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
