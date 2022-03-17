import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
//import {...} from "firebase/database";
//import {...} from "firebase/functions";
//import {...} from "firebase/storage";

// Initialize Firebase

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)