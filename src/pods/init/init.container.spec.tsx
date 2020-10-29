import React from 'react';
import { render, screen } from '@testing-library/react';
import { InitContainer } from './init.container';

describe('init.container.spec specs', () => {
  it('should render InitContainer', () => {
    // Arrange
    // Act
    render(<InitContainer />);
    // Assert
    expect(screen.getByText(/Bar.io/)).toBeInTheDocument();
  });
});
