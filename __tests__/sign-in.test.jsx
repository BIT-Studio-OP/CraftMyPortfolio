import React from 'react';
import { render, fireEvent, getByTestId, getAllByAltText } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter
import SignUp from '../src/components/auth/SignUp'; // Import your SignUp component
//import handleSignUp from '../src/components/auth/handleSignUp';

describe('SignUp component', () => {
  it('submits sign-up form', async () => {
    
    const { getByPlaceholderText, getByTestId } = render(
      // Wrap SignUp component with MemoryRouter
      <MemoryRouter>
        <SignUp />
      </MemoryRouter>
    );
    
    const emailInput = getByPlaceholderText('Email');
    const passwordInput = getByPlaceholderText('Password');
    const submitButton = getByTestId('signup');
    
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'testpassword' } });
    fireEvent.click(submitButton);
    
    // Add assertions here to check the expected behavior after form submission
  });
});
