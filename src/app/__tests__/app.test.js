import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '..';

test('renders app', () => {
  render(<App />);

  const textElement = screen.getByText(/Create React App v5-beta example/i);
  expect(textElement).toBeInTheDocument();
});
