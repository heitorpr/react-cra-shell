import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import ExFeature from '..';

it('when rendered should display initial state', () => {
  render(
    <MemoryRouter>
      <ExFeature />
    </MemoryRouter>
  );

  expect(screen.getByText(/Eu odeio CSS/i)).toBeInTheDocument();
  expect(
    screen.getByText(/Não há mensagens a serem exibidas/i)
  ).toBeInTheDocument();
  expect(screen.getByLabelText(/Mensagem/i)).toBeInTheDocument();
  expect(screen.getByTestId('back-button')).toBeInTheDocument();
  expect(screen.getByTestId('send-button')).toBeInTheDocument();
});

it('when user adds message and submit it, should be displayed', async () => {
  render(
    <MemoryRouter>
      <ExFeature />
    </MemoryRouter>
  );

  const textInput = screen.getByLabelText(/Mensagem/i);
  const sendButton = screen.getByTestId('send-button');

  userEvent.type(textInput, 'Teste de mensagem');
  fireEvent.click(sendButton);

  await screen.findByText('Teste de mensagem');
});
