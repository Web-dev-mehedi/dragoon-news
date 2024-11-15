
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAr1ANQ8Gpw9BP8tUq18U5iN5ILage6AxM",
  authDomain: "dragoon-news-7fa9b.firebaseapp.com",
  projectId: "dragoon-news-7fa9b",
  storageBucket: "dragoon-news-7fa9b.firebasestorage.app",
  messagingSenderId: "1061044029908",
  appId: "1:1061044029908:web:6af0014a9a4c67ef5aae41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth