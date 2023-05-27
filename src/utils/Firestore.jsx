import { initializeApp } from "firebase/app";
import {
  getFirestore,
  connectFirestoreEmulator,
  enableIndexedDbPersistence,
} from "firebase/firestore";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import firebaseJson from "../../firebase.json";

const firebaseConfig = {
  apiKey: "AIzaSyBlfWmSTRB8A4BcldCQbe1wfJbaV0cTB54",
  authDomain: "craftmyportfolio-studio.firebaseapp.com",
  projectId: "craftmyportfolio-studio",
  storageBucket: "craftmyportfolio-studio.appspot.com",
  messagingSenderId: "1088320995714",
  appId: "1:1088320995714:web:cac0666ced55e464f8cf9b",
  measurementId: "G-DQ4PJXYRR0",
};

const firebaseApp = initializeApp(firebaseConfig);
const firestore = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

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
