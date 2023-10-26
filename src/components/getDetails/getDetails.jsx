import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "../../utils/Firestore";
import { getAuth } from "firebase/auth";

export function useUserDetails() {
  const [details, setDetails] = useState(null);
    const auth = getAuth();

  useEffect(() => {
    const fetchDetails = async () => {
      const collectionPath = `users/${auth.currentUser.uid}/DetailsPersonal/${auth.currentUser.uid}`;
      const userRef = doc(firestore, ...collectionPath.split("/"));

      const docSnap = await getDoc(userRef);
      console.log("fetchDetails", docSnap.data());

      if (docSnap.exists()) {
        setDetails(docSnap.data());
      } else {
        console.log("No such document!");
        setDetails("");
      }
    };

    fetchDetails();
  }, []);

  return details;
}
