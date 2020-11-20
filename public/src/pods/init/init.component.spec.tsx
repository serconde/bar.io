import React from 'react';
import { render, screen } from '@testing-library/react';
import { InitComponent } from './init.component';

describe('init.component.spec specs', () => {
  it('should render the component with name = "test"', () => {
    // Arrange
    const props = {
      name: 'test',
    };
    // Act
    render(<InitComponent {...props} />);
    const titleH3 = screen.getByRole('heading', { level: 3, name: /test/ });
    // Assert
    expect(titleH3).toBeInTheDocument();
    expect(titleH3.tagName).toEqual('H3');
    expect(titleH3.textContent).toContain('test');
  });
});
