import React from 'react';
import { render, screen } from '@testing-library/react';
import { TitleComponent } from './title.component';

describe('title.component specs', () => {
  it('should render the TitleComponent', () => {
    // Arrange
    const variant = 'h1';
    const className = 'test';
    const body = 'Este es mi body Test';
    // Act
    render(
      <TitleComponent variant={variant} className={className}>
        {body}
      </TitleComponent>,
    );
    // Assert
    expect(screen.getByRole('heading').tagName).toEqual('H1');
    expect(screen.getByText(/Test/)).toBeInTheDocument();
    expect(screen.getByRole('heading')).toHaveClass('test');
  });
});
