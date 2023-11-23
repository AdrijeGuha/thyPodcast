// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBb5gykSrryfWkkf02jBp1HryWKerU2t0k",
  authDomain: "thypodcast-1635b.firebaseapp.com",
  projectId: "thypodcast-1635b",
  storageBucket: "thypodcast-1635b.appspot.com",
  messagingSenderId: "948633648637",
  appId: "1:948633648637:web:6be6d4b5282e59e03b6d94",
  measurementId: "G-ZJYCQ4WVMC"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;