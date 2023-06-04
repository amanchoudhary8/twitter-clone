import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAMAldJvahc48flotliHmV7nEC9FB5qDgI",
  authDomain: "twitter-clone-4e3eb.firebaseapp.com",
  projectId: "twitter-clone-4e3eb",
  storageBucket: "twitter-clone-4e3eb.appspot.com",
  messagingSenderId: "656864828832",
  appId: "1:656864828832:web:c1566132cef8636bf918c5",
  measurementId: "G-D62HY00WVJ",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export default db;
