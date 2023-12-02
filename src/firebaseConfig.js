// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANIye_MjNYSODbrtR8KTVzeeZaPJQdQ2g",
  authDomain: "chat-app-mtc.firebaseapp.com",
  databaseURL: "https://chat-app-mtc-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "chat-app-mtc",
  storageBucket: "chat-app-mtc.appspot.com",
  messagingSenderId: "425229577829",
  appId: "1:425229577829:web:527a2908f82adcdf36e08c",
  measurementId: "G-2P6ZG0PH08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//initialize firebase auth
const auth = getAuth();
//Initialize firestore database
const db = getFirestore(app);
//Initialize firebase storage
const storage = getStorage(app);

export { app, auth, db, storage }
