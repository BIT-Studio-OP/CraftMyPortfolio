import { useState } from "react";
import emailjs from "emailjs-com";
import { createUseStyles } from "react-jss";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import "../fonts.css";

const useStyles = createUseStyles({
  body: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem",
    "& h1": {
        color: "#161925",
        fontFamily: "Raleway, sans-serif",
        fontSize: "3rem",
    },
    "& h2": {
        color: "#161925",
        fontFamily: "Raleway, sans-serif",
    },
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    maxWidth: "500px",
    padding: "2rem",
    border: "1px solid #ccc",
    borderRadius: "15px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.3)",
  },
  label: {
    fontWeight: "bold",
    marginBottom: "0.5rem",
    color: "#161925",
  },
  input: {
    width: "100%",
    padding: "0.5rem",
    marginBottom: "1rem",
    border: "1px solid #ccc",
    background: "#f5f5f5",
    borderRadius: "10px",
  },
  textarea: {
    width: "100%",
    padding: "0.5rem",
    marginBottom: "1rem",
    border: "1px solid #ccc",
    borderRadius: "10px",
    background: "#f5f5f5",
  },
  button: {
    padding: "0.5rem 1rem",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    "&:hover": {
      backgroundColor: "#0069d9",
    },
  },
});

const Contact = () => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

 const handleSubmit = (e) => {
  e.preventDefault();

  const messageBody = {
    name,
    email,
    message_html: `
      Name: ${name},
      Email: ${email},
      Message: ${message}
    `,
  };

  emailjs
    .send(
      "service_zwj4s46",
      "template_au6br5e",
      messageBody,
      "UX-Cw1EUvjb_NGAeQ"
    )
    .then(
      (result) => {
        console.log(result.text);
        alert("Your message has been sent successfully!");
      },
      (error) => {
        console.log(error.text);
        alert("Sorry, an error occurred. Please try again later.");
      }
    );

  setName("");
  setEmail("");
  setMessage("");
};

  return (
    <>
      <Header />
      <div className={classes.body}>
        <br />
        <h2>Having a technical issue?</h2>
        <h1>Contact Us Here</h1>
        <br />
      <form className={classes.form} onSubmit={handleSubmit}>
        <label className={classes.label} htmlFor="name">
          Name:
        </label>
        <input
          className={classes.input}
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label className={classes.label} htmlFor="email">
          Email:
        </label>
        <input
          className={classes.input}
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label className={classes.label} htmlFor="message">
          Message:
        </label>
        <textarea
          className={classes.textarea}
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <button className={classes.button} type="submit">
          Send
        </button>
      </form>
        </div>
      <Footer />
      </>
  );
};

export default Contact;