import { useState, useEffect } from "react";
import { createUseStyles } from "react-jss";
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "../../../utils/Firestore";
import { getAuth } from "firebase/auth";

const auth = getAuth();

const useStyles = createUseStyles({
  userDetailsContainer: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    height: "100vh",
    padding: "20px",
    backgroundImage: `url("data:image/svg+xml,%3Csvg id='visual' viewBox='0 0 1080 100' width='1080' height='100' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1'%3E%3Cg stroke-width='1' stroke-linejoin='bevel'%3E%3Cpath d='M532 0L341 0L564 100Z' fill='%231b4965' stroke='%231b4965'%3E%3C/path%3E%3Cpath d='M341 0L269 100L564 100Z' fill='%2300101c' stroke='%2300101c'%3E%3C/path%3E%3Cpath d='M564 100L783 100L532 0Z' fill='%23236385' stroke='%23236385'%3E%3C/path%3E%3Cpath d='M783 100L837 0L532 0Z' fill='%23297ea6' stroke='%23297ea6'%3E%3C/path%3E%3Cpath d='M0 0L0 100L269 100Z' fill='%23173d55' stroke='%23173d55'%3E%3C/path%3E%3Cpath d='M341 0L0 0L269 100Z' fill='%23123146' stroke='%23123146'%3E%3C/path%3E%3Cpath d='M783 100L1080 100L837 0Z' fill='%230d2637' stroke='%230d2637'%3E%3C/path%3E%3Cpath d='M1080 100L1080 0L837 0Z' fill='%230d2637' stroke='%230d2637'%3E%3C/path%3E%3C/g%3E%3C/svg%3E")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    color: "white",
    fontFamily: "Arial, sans-serif",
  },
  userDetailItem: {
    width: "50%", // Two columns per row
    padding: "10px",
    boxSizing: "border-box",
  },
  label: {
    fontSize: "16px",
    fontWeight: "bold",
    marginBottom: "5px",
  },
  value: {
    fontSize: "16px",
  },
});

function TemplateBodyOne() {
  const classes = useStyles();
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    age: "",
    hometown: "",
    about: "",
    skills: [],
    linkedin: "",
    github: "",
    jobs: [],
  });

  const collectionType = "personal";

  useEffect(() => {
    const fetchUserDetails = async () => {
      if (auth.currentUser) {
        const userRef = doc(firestore, "users", auth.currentUser.uid);
        const detailsCollection =
          collectionType === "personal" ? "DetailsPersonal" : "DetailsWork";

        const userDetailsDocRef = doc(userRef, detailsCollection, auth.currentUser.uid);

        try {
          const userDetailsSnapshot = await getDoc(userDetailsDocRef);
          if (userDetailsSnapshot.exists()) {
            const data = userDetailsSnapshot.data();
            setUserDetails(data);
          }
        } catch (error) {
          console.error("Error fetching user details:", error);
        }
      }
    };

    fetchUserDetails();
  }, []);

  console.log(userDetails.name)

  return (
    <div className={classes.userDetailsContainer}>
      <div className={classes.userDetailItem}>
        <div className={classes.label}>Name:</div>
        <div className={classes.value}>
          {userDetails.firstName} {userDetails.lastName}
        </div>
      </div>
      <div className={classes.userDetailItem}>
        <div className={classes.label}>Email:</div>
        <div className={classes.value}>{userDetails.email}</div>
      </div>
      <div className={classes.userDetailItem}>
        <div className={classes.label}>Phone:</div>
        <div className={classes.value}>{userDetails.phone}</div>
      </div>
      <div className={classes.userDetailItem}>
        <div className={classes.label}>Age:</div>
        <div className={classes.value}>{userDetails.age}</div>
      </div>
      <div className={classes.userDetailItem}>
        <div className={classes.label}>Hometown:</div>
        <div className={classes.value}>{userDetails.hometown}</div>
      </div>
      <div className={classes.userDetailItem}>
        <div className={classes.label}>About:</div>
        <div className={classes.value}>{userDetails.about}</div>
      </div>
      <div className={classes.userDetailItem}>
        <div className={classes.label}>Skills:</div>
        <div className={classes.value}>{userDetails.skills.join(", ")}</div>
      </div>
      <div className={classes.userDetailItem}>
        <div className={classes.label}>LinkedIn:</div>
        <div className={classes.value}>{userDetails.linkedin}</div>
      </div>
      <div className={classes.userDetailItem}>
        <div className={classes.label}>GitHub:</div>
        <div className={classes.value}>{userDetails.github}</div>
      </div>
      <div className={classes.userDetailItem}>
        <div className={classes.label}>Jobs:</div>
        <div className={classes.value}>{userDetails.jobs.join(", ")}</div>
      </div>
    </div>
  );
}

export default TemplateBodyOne;
