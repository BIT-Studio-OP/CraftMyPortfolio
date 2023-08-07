import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import AuthProvider from "../src/utils/context/AuthContext";
import "@testing-library/jest-dom/extend-expect";

import App from "../src/App";

describe("App component", () => {
  test("renders spinner while loading", async () => {
    render(
      <AuthProvider>
        <App />
      </AuthProvider>
    );

    const spinnerElement = screen.getByTestId("spinner");
    expect(spinnerElement).toBeInTheDocument();

    await waitFor(() => screen.queryByTestId("spinner"));
    expect(spinnerElement).not.toBeInTheDocument();
  });

  test("renders home page when authenticated", async () => {
    // Simulate authenticated state
    const AuthProviderMock = ({ children }) => (
      <AuthProvider value={{ isAuthenticated: true }}>
        {children}
      </AuthProvider>
    );

    render(
      <AuthProviderMock>
        <App />
      </AuthProviderMock>
    );

    await waitFor(() =>
      expect(screen.getByText("Welcome to Your App")).toBeInTheDocument()
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

    await waitFor(() => screen.queryByText("Sign In"));
    const signInButtons = screen.queryAllByText("Sign In");

    // Check that at least one element with "Sign In" text is present
    expect(signInButtons.length).toBeGreaterThan(0);

    // You can further narrow down your assertions based on the specific elements you want to test
    // For example, you can check that the button with "Sign In" text is present
    const signInButton = signInButtons.find(
      (button) => button.tagName === "BUTTON"
    );
    expect(signInButton).toBeInTheDocument();
  });
});
