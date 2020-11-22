import React from 'react';
import { render, screen } from '@testing-library/react';
import { HeaderComponent } from '.';

describe('HeaderComponent tests', () => {
  it('should show the all the restaurant info when passed name, description and telephone as arguments', () => {
    // Arrange
    const props = {
      name: 'The Restaurant',
      description: 'A nice restaurant',
      telephone: '951123123',
    };

    // Act
    render(<HeaderComponent {...props} />);
    const headings = screen.getAllByRole('heading');
    const telephone = screen.getByLabelText(props.telephone.split('').join('.'));

    // Assert

    expect(headings.length).toBe(2);
    const [restaurantName, descriptionName] = headings;
    expect(restaurantName).toHaveTextContent(props.name);
    expect(descriptionName).toHaveTextContent(props.description);
    expect(telephone).toBeInTheDocument();
  });

  it('should show only the restaurant name when only the name is passed as argument', () => {
    // Arrange
    const props = {
      name: 'The Restaurant',
    };

    // Act
    render(<HeaderComponent {...props} />);
    const headings = screen.getAllByRole('heading');
    const telephone = screen.queryByText('Teléfono de reservas:');

    // Assert

    expect(headings.length).toBe(1);
    const [restaurantName] = headings;
    expect(restaurantName).toHaveTextContent(props.name);
    expect(telephone).not.toBeInTheDocument();
  });
});
