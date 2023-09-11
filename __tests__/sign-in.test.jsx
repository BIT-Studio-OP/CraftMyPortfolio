import React from "react";
import "jest";
import { render, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"; // Import MemoryRouter
import SignUp from "../src/components/auth/SignUp"; // Import your SignUp component
import { updateDoc, doc } from "firebase/firestore";
import firestore from "../src/utils/Firestore";


describe("SignUp component", () => {
  test("submits sign-up form", async () => {
    const { getByPlaceholderText, getByTestId } = render(
      // Wrap SignUp component with MemoryRouter
      <MemoryRouter>
        <SignUp />
      </MemoryRouter>
    );

    await updateDoc(doc(firestore, "users", "1232"),
    {"filed": "data"}
    );

    const emailInput = getByPlaceholderText("Email");
    const passwordInput = getByPlaceholderText("Password");
    const submitButton = getByTestId("signup");

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "testpassword" } });
    fireEvent.click(submitButton);

    // Add assertions here to check the expected behavior after form submission
  }, 10000);
});
