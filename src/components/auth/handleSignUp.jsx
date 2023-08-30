import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    updateProfile,
  } from "firebase/auth";

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