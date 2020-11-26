import React from 'react';
import { render, screen } from '@testing-library/react';
import { formatToEuros } from 'common';
import { SubmenuCategoryComponent } from './submenu-category.component';

describe('SubmenuCategoryComponentTest', () => {
  it('should show the menu dishes dishes when passed a valid list', () => {
    // Arrange
    const props = {
      dishes: [
        {
          id: 1,
          name: 'Chorizo criollo',
          price: formatToEuros(5),
        },
        {
          id: 2,
          name: 'Queso provolone',
          price: formatToEuros(4),
        },
        {
          id: 3,
          name: 'Jamón ibérico',
          price: formatToEuros(18),
        },
      ],
    };

    // Act
    render(<SubmenuCategoryComponent {...props} />);
    const dishItems = props.dishes.map((d) => screen.getByText(d.name));

    // Assert
    expect(dishItems.length).toBe(props.dishes.length);
  });

  it('should not show anything when passing and empty list', () => {
    // Arrange
    const props = {
      dishes: [],
    };

    // Act
    const { container } = render(<SubmenuCategoryComponent {...props} />);
    // Assert

    expect(container).toHaveTextContent('');
  });

  it('should not show anything when passing a null list', () => {
    // Arrange
    const props = {
      dishes: null,
    };

    // Act
    const { container } = render(<SubmenuCategoryComponent {...props} />);
    // Assert

    expect(container).toHaveTextContent('');
  });

  it('should not show anything when passing an undefined list', () => {
    // Arrange
    const props = {
      dishes: undefined,
    };

    // Act
    const { container } = render(<SubmenuCategoryComponent {...props} />);
    // Assert

    expect(container).toHaveTextContent('');
  });
});
