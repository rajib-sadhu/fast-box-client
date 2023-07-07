// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0xsKaj_CB6RWziLiqY5IuCdDfqyZT1Qo",
  authDomain: "rs-courier-management.firebaseapp.com",
  projectId: "rs-courier-management",
  storageBucket: "rs-courier-management.appspot.com",
  messagingSenderId: "950956490589",
  appId: "1:950956490589:web:40aed0ed47b698439672b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;