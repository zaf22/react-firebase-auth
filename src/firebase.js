// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA28RHttp1bVctrcmEbgWsZChFk1Rp5jsw",
  authDomain: "react-auth-test-f5f83.firebaseapp.com",
  projectId: "react-auth-test-f5f83",
  storageBucket: "react-auth-test-f5f83.appspot.com",
  messagingSenderId: "754206825587",
  appId: "1:754206825587:web:ecf641b81464c2d7fb9e06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);