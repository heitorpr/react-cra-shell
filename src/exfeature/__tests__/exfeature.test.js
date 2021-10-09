import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ExFeature from '..';

test('renders home', () => {
  render(
    <MemoryRouter>
      <ExFeature />
    </MemoryRouter>
  );

  expect(screen.getByText(/ExFeature/i)).toBeInTheDocument();
  expect(screen.getByText(/Voltar/i)).toBeInTheDocument();
});
