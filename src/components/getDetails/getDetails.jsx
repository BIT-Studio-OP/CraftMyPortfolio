import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "../../utils/Firestore";
import { getAuth } from "firebase/auth";

export function useUserDetails(collectionType) {
  const [details, setDetails] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    console.log(" auth.currentUser.uid", auth.currentUser.uid);
    const fetchDetails = async () => {
      const userRef = doc(firestore, "users", auth.currentUser.uid);

      // Determine the collection to use based on the collectionType parameter
      const detailsCollection =
        collectionType === "private" ? "DetailsPersonal" : "DetailsWork";

      const userDetailsDocRef = doc(
        userRef,
        detailsCollection,
        auth.currentUser.uid
      );

      const docSnap = await getDoc(userDetailsDocRef);

      if (docSnap.exists()) {
        setDetails(docSnap.data());
      } else {
        console.log("No such document!");
      }
    };

    fetchDetails();
  }, [collectionType]);

  return details;
}
