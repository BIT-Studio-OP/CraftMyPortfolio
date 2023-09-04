/* eslint-disable no-undef */
import React from "react";
import { render, screen, waitFor, debug } from "@testing-library/react";
import AuthProvider from "../src/utils/context/AuthContext";
import firebase from "firebase/app";
import SignUp from "../src/components/auth/SignUp";
import {
  getAuth,
  connectAuthEmulator,
} from "firebase/auth";
import {
  getFirestore,
  connectFirestoreEmulator,
} from "firebase/firestore";
import "@testing-library/jest-dom/extend-expect";

import App from "../src/App";

// Mock Firebase authentication methods and Firestore
jest.mock("firebase/app", () => {
  return {
    auth: jest.fn(),
    initializeApp: jest.fn(),
  };
});

jest.mock("firebase/auth", () => {
  return {
    getAuth: jest.fn(() => ({
      onAuthStateChanged: jest.fn(),
    })),
    connectAuthEmulator: jest.fn(),
  };
});

jest.mock("firebase/firestore", () => {
  return {
    getFirestore: jest.fn(),
    connectFirestoreEmulator: jest.fn(),
  };
});

describe("App component", () => {
  beforeAll(() => {
    // Mock Firebase Emulators
    const auth = getAuth();
    connectAuthEmulator(auth, "http://localhost:9099");

    const firestore = getFirestore();
    connectFirestoreEmulator(firestore, "localhost", 5086);
  });

  test("renders spinner while loading", async () => {
    render(
      <AuthProvider>
        <App />
      </AuthProvider>
    );

    const spinnerElement = screen.getByTestId("spinner");
    expect(spinnerElement).toBeInTheDocument();

    await waitFor(() => screen.queryByTestId("spinner"));
    expect(spinnerElement).toBeInTheDocument();
  });

  test("renders home page when authenticated", async () => {
    // Mock authenticated state
    firebase.auth.mockReturnValue({ currentUser: { uid: "fakeUserId" } });

    render(
      <AuthProvider>
        <App />
      </AuthProvider>
    );

    await waitFor(() =>
      expect(screen.getByText("Welcome Back")).toBeInTheDocument()
    );
  });

  test("renders sign-in page when not authenticated", async () => {
    // Simulate unauthenticated state
    const AuthProviderMock = ({ children }) => (
      <AuthProvider value={{ isAuthenticated: false }}>{children}</AuthProvider>
    );

    render(
      <AuthProviderMock>
        <App />
      </AuthProviderMock>
    );

    // await waitFor(() => screen.getByTestId("signin"));
    const signIn = screen.getByTestId("signin");

    expect(signIn).toBeInTheDocument();
  });

  // test("Create User", async () => {
  //   const credentials = {
  //     username: "testuser",
  //     email: "testuser@gmail.com",
  //     password: "testpass"
  //   };

  //   expect(SignUp.find("username").length).toBe(1);


  // })
});

//https://www.mailslurp.com/examples/test-email-in-jest-puppeteer/