/**
 * This file contains all the setup, that is necesary to connect our Vue app to Firebase.
 */

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADwSyl17PC0i8V-df89575wkUfrBFvXsM",
  authDomain: "noteballs-d4f49.firebaseapp.com",
  projectId: "noteballs-d4f49",
  storageBucket: "noteballs-d4f49.appspot.com",
  messagingSenderId: "629027062280",
  appId: "1:629027062280:web:7471395ce76a5c895287bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firestore db. This will give us CRUD access to our db.
const db = getFirestore(app);

export { db };//Exporting db, so we can import it in the components where we need it. And that is our storage.