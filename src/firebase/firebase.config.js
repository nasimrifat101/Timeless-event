// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHItdn8dyGfYxM82f-iXc7cIZUcwzS6v8",
  authDomain: "timeless-event.firebaseapp.com",
  projectId: "timeless-event",
  storageBucket: "timeless-event.appspot.com",
  messagingSenderId: "153790394768",
  appId: "1:153790394768:web:48c15f71fdf15029028315"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);