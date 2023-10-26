import { initializeApp } from "firebase/app";
import {
  getFirestore,
  connectFirestoreEmulator,
  enableIndexedDbPersistence,
} from "firebase/firestore";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import firebaseJson from "../../firebase.json";
import firebase from "@firebase/app"; 

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

const firebaseApp = initializeApp(firebaseConfig);
export const firestore = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp);

if (process.env.NODE_ENV != "production") {
  console.log("using emulator");
  connectFirestoreEmulator(
    firestore,
    "localhost",
    firebaseJson.emulators.firestore.port
  );
  connectAuthEmulator(
    auth,
    "http://localhost:" + firebaseJson.emulators.auth.port
  );
} else {
  enableIndexedDbPersistence(firestore);
}

export default firestore;
