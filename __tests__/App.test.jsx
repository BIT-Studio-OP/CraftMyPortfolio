/* eslint-disable no-undef */
import React from "react";
import { render, screen, waitFor, debug } from "@testing-library/react";
import AuthProvider from "../src/utils/context/AuthContext";
import "@testing-library/jest-dom/extend-expect";

import App from "../src/App";

describe("App component", () => {
  test("renders spinner while loading", async () => {
    render(
        <App />
    );

    const spinnerElement = screen.getByTestId("spinner");
    expect(spinnerElement).toBeInTheDocument();
  });

  // test("renders sign-in page when not authenticated", async () => {
  //   render(
  //       <App />
  //   );

  //   await Promise.resolve();

  //   // await waitFor(() => screen.getByTestId("signin"));
  //   const signIn = screen.getByTestId("signin");

  //   expect(signIn).toBeInTheDocument();
  // });

});

//https://www.mailslurp.com/examples/test-email-in-jest-puppeteer/