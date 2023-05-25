import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBlfWmSTRB8A4BcldCQbe1wfJbaV0cTB54",
  authDomain: "craftmyportfolio-studio.firebaseapp.com",
  projectId: "craftmyportfolio-studio",
  storageBucket: "craftmyportfolio-studio.appspot.com",
  messagingSenderId: "1088320995714",
  appId: "1:1088320995714:web:cac0666ced55e464f8cf9b",
  measurementId: "G-DQ4PJXYRR0"
};

const firebaseApp = initializeApp(firebaseConfig);
export const firestore = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp);

export default firestore;