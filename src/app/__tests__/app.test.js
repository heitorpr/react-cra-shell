import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '..';

it('renders app navigation', () => {
  render(<App />);

  // Is On Home
  expect(screen.getByText(/React CRA Shell by Heitor/i)).toBeInTheDocument();
  const exfeatureButton = screen.getByText(/Abrir a EXFeature/i);

  // Move to exfeature
  fireEvent.click(exfeatureButton);
  expect(screen.getByText(/Eu odeio CSS/i)).toBeInTheDocument();
  const backButton = screen.getByTestId('back-button');

  // Move back to home
  fireEvent.click(backButton);
  expect(screen.getByText(/React CRA Shell by Heitor/i)).toBeInTheDocument();
});
