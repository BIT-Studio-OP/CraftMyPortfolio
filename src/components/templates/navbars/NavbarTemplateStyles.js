import { createUseStyles } from "react-jss";
export const useStyles = createUseStyles({
  navParent: {
    backgroundColor: "gray",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem",
  },
  h1: {
    fontSize: "48px !important",
    fontWeight: 600,
    color: "white",
    fontFamily: "Delicious Handrawn, cursive",
  },
  menu: {
    display: "flex",
    justifyContent: "space-between",
    gap: "1rem",
    listStyle: "none",
    alignItems: "center",
    "& li": {
      "& a": {
        fontFamily: "Delicious Handrawn, cursive !important",
      },
    },
  },
  MenuItem: {
    // Add your menu item styles here
  },
  a: {
    textDecoration: "none",
    color: "white",
    fontSize: "1.2rem",
    fontWeight: 600,
    transition: "all 0.1s ease-in-out",
    borderRadius: "0.5rem",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "var(--white)",
      color: "var(--accent-colour)",
    },
  },
  bars: {
    display: "none",
  },
  resMenuParent: {
    display: "none",
  },
  resMenu: {
    display: "none",
  },
  resMenuHide: {
    display: "none",
  },
  // Add responsive styles here
});
