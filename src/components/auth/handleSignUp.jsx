import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    updateProfile,
  } from "firebase/auth";
  
import { setDoc, doc } from "firebase/firestore";

import { firestore } from "../../utils/Firestore.jsx";

export default handleSignUp = async (email, password, auth ) => {
    const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(userCredential.user, { displayName: username });
      await setDoc(doc(firestore, "users", userCredential.user.uid), {
        email: userCredential.user.email,
        username,
      });
}