// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

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
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
const analytics = getAnalytics(app);
