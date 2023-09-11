import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn image', () => {
  render(<App />);
  const imgElem =  screen.getByRole('img');
  expect(imgElem).toBeInTheDocument();
});

test('clicks button', () => {
  render(<App />);
  const btnElem =  screen.getByText(/save me/i);
  expect(btnElem).toBeInTheDocument();
  btnElem.click();
});
