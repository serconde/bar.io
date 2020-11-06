import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App spec', () => {
  test('renders learn react link', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/Bar.io/i);
    expect(linkElement).toBeInTheDocument();
  });
});
