import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  main: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
    color: "black",
    height: "auto",
    width: "60%",
    margin: "0 auto",
    "& h2": {
      fontFamily: "Delicious Handrawn, cursive",
      fontSize: "2rem",
      color: "black",
    },
    "& h3": {
      fontFamily: "Raleway, sans-serif",
    },
    "& p": {
      fontFamily: "Raleway, sans-serif",
    },
  },
  body: {
    color: "black",
    "& h2": {
      fontFamily: "Delicious Handrawn, cursive",
      fontSize: "2rem",
      color: "black",
    },
    "& h3": {
      fontFamily: "Raleway, sans-serif",
    },
    "& p": {
      fontFamily: "Raleway, sans-serif",
    },
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "black",
    maxWidth: "600px",
    margin: "0 auto",
    padding: "1rem",
    "& h2": {
      fontFamily: "Delicious Handrawn, cursive",
      fontSize: "2rem",
    },
    "& label": {
      fontFamily: "Raleway, sans-serif",
    },
    "& h3": {
      fontFamily: "Raleway, sans-serif",
    },
  },
  titleimg: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "60%",
    "& img": {
      maxWidth: "70px",
      paddingLeft: "1rem",
    },
  },
  input: {
    color: "black",
    backgroundColor: "#f0f0f0",
    borderColor: "#666",
    borderRadius: "10px",
    width: "100%",
    padding: "0.5rem",
    margin: "0.5rem 0",
    border: "1px solid #ddd",
  },
  skillinput: {
    color: "black",
    backgroundColor: "#f0f0f0",
    borderColor: "#666",
    borderRadius: "10px",
    width: "60%",
    padding: "0.5rem",
    margin: "0.5rem 0",
    border: "1px solid #ddd",
  },
  submitButton: {
    border: "none",
    background: "none",
    cursor: "pointer",
    backgroundColor: "var(--primary-colour)",
    color: "white",
    borderRadius: "0.5rem",
    marginTop: "1rem",
    width: "100%",
    padding: "1rem",
    fontSize: "1.2rem",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "var(--secondary-colour)",
    },
  },
  namesdiv: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    "& input": {
      width: "48%",
    },
  },
  closebutton: {
    border: "none",
    background: "none",
    cursor: "pointer",
    transition: "0.5s all ease-in-out",
    "&:hover": {
      color: "red",
      transition: "0.5s all ease-in-out",
      transform: "scale(1.1)",
    },
  },
  checkboxLabel: {
    display: "flex",
    alignItems: "center",
    fontFamily: "Raleway, sans-serif",
    fontSize: "1rem",
    marginTop: "0.5rem",
    marginBottom: "0.5rem",
    marginLeft: "1rem",
    color: "black",

    "& input": {
      marginRight: "0.5rem",
    },
  },
  disableEndDate: {
    backgroundColor: "f0f0f0",
    color: "black",
    width: "50%",
    padding: "0.5rem",
    margin: "0.5rem 0",
    border: "1px solid #ddd",
    borderRadius: "10px",
  },
});

export default useStyles;
