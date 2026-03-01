import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renderiza StreamAI home', () => {
  render(<App />);
  expect(screen.getByText('StreamAI')).toBeInTheDocument();
  expect(screen.getByText('Leitura offline e Premium')).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /Assinar Premium/i })).toBeInTheDocument();
});