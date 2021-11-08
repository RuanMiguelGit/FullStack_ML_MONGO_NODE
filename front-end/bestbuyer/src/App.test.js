import React from 'react'
import { render, screen } from '@testing-library/react';
import Login from './Pages/Login';
import Register from './Pages/Register'

test('Testa a página de login', () => {
  render(<Login />);
  const loginButton = screen.getByText(/login/i);
  const registerButton = screen.getByText(/Cadastre-se/i)
  const email = screen.getByPlaceholderText(/email/i)
  const password = screen.getByPlaceholderText(/senha/i)
  expect(loginButton).toBeInTheDocument();
  expect(registerButton).toBeInTheDocument();
  expect(email).toBeInTheDocument();
  expect(password).toBeInTheDocument();

});


test('Testa a página de Registro', () => {
  render(<Register />);
  const registerButton = screen.getByText(/Registrar/i);
  const nome = screen.getByPlaceholderText(/nome/i)
  const email = screen.getByPlaceholderText(/email/i)
  const password = screen.getByPlaceholderText(/senha/i)
  expect(nome).toBeInTheDocument();
  expect(registerButton).toBeInTheDocument();
  expect(email).toBeInTheDocument();
  expect(password).toBeInTheDocument();

});
