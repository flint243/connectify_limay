// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {getAuth} from  "firebase/auth";
import {getFirestore} from  "firebase/firestore";
import {getStorage} from 'firebase/storage';

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCozaqD5p-HIgvEsu6Un9P1WRPmKYBjDaw",
  authDomain: "connectifylimay.firebaseapp.com",
  projectId: "connectifylimay",
  storageBucket: "connectifylimay.appspot.com",
  messagingSenderId: "931529359854",
  appId: "1:931529359854:web:89d581712e37d8984bceff"

 /*
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
   */
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)
const storage = getStorage(app)

export { auth, db, storage, app as default };
