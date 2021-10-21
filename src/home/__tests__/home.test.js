import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { server, rest } from 'test/server';
import Home from '..';

it('renders home', async () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );

  expect(screen.getByText(/React CRA Shell by Heitor/i)).toBeInTheDocument();
  expect(screen.getByText(/Abrir a EXFeature/i)).toBeInTheDocument();

  await screen.findByText(/Awesome message/i);
});

it('renders home when not found awesome message', async () => {
  const testErrorMessage = 'THIS IS A TEST FAILURE';
  server.use(
    rest.get('https://api.github.com/zen', async (_, res, ctx) => {
      return res(ctx.status(404), ctx.json({ message: testErrorMessage }));
    })
  );

  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );

  expect(screen.getByText(/React CRA Shell by Heitor/i)).toBeInTheDocument();
  expect(screen.getByText(/Abrir a EXFeature/i)).toBeInTheDocument();

  await screen.findByText(testErrorMessage);
});

it('renders home when fetch error on awesome message', async () => {
  server.use(
    rest.get('https://api.github.com/zen', async (_, res, ctx) => {
      throw Error('network');
    })
  );

  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );

  expect(screen.getByText(/React CRA Shell by Heitor/i)).toBeInTheDocument();
  expect(screen.getByText(/Abrir a EXFeature/i)).toBeInTheDocument();

  await screen.findByText('Falha de rede');
});

it('renders home when unkown error on awesome message', async () => {
  server.use(
    rest.get('https://api.github.com/zen', async (_, res, ctx) => {
      return res(ctx.status(500), ctx.json('SERVER ERROR'));
    })
  );

  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );

  expect(screen.getByText(/React CRA Shell by Heitor/i)).toBeInTheDocument();
  expect(screen.getByText(/Abrir a EXFeature/i)).toBeInTheDocument();

  await screen.findByText(500);
});
