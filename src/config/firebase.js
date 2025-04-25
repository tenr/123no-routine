// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD4nVnKJvgWGf9s0lmbxN9gVt_vlk7VEV8",
  authDomain: "no-routine.firebaseapp.com",
  projectId: "no-routine",
  storageBucket: "no-routine.appspot.com",
  messagingSenderId: "270374796200",
  appId: "1:270374796200:web:c597dd29c50e8d7fb57b9d",
  measurementId: "G-XYT2F9E2C4",
  storageBucket: "gs://no-routine.appspot.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Initialize Auth
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

//Initialize Analytics
export const analytics = getAnalytics(app);

//Initialize Database and Storage
export const db = getFirestore(app);
export const storage = getStorage(app);
