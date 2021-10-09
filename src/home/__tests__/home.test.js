import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from '..';

test('renders home', () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );

  expect(screen.getByText(/React CRA Shell by Heitor/i)).toBeInTheDocument();
  expect(screen.getByText(/Abrir a EXFeature/i)).toBeInTheDocument();
});
