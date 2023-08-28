import React from 'react';
import { render, fireEvent, getByTestId, getAllByAltText } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter
import { auth } from '../src/utils/Firestore'; // Import your auth object here
import SignUp from '../src/components/auth/SignUp'; // Import your SignUp component

jest.mock('../src/utils/Firestore', () => ({
  auth: {
    createUserWithEmailAndPassword: jest.fn(),
    updateProfile: jest.fn(),
  },
}));

describe('SignUp component', () => {
  it('submits sign-up form', async () => {
    auth.createUserWithEmailAndPassword.mockResolvedValueOnce({});
    auth.updateProfile.mockResolvedValueOnce({});
    
    const { getByPlaceholderText, getByText } = render(
      // Wrap SignUp component with MemoryRouter
      <MemoryRouter>
        <SignUp />
      </MemoryRouter>
    );
    
    const usernameInput = getByPlaceholderText('Username');
    const emailInput = getByPlaceholderText('Email');
    const passwordInput = getByPlaceholderText('Password');
    const submitButton = getByText('Sign Up Button');
    
    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'testpassword' } });
    fireEvent.click(submitButton);
    
    // Add assertions here to check the expected behavior after form submission
  });
});
