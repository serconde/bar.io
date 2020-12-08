import React from 'react';
import { render, screen } from '@testing-library/react';
import { formatToEuros } from 'common';
import { SubmenuCategoryComponent } from './submenu-category.component';

describe('SubmenuCategoryComponentTest', () => {
  it('should show the menu products products when passed a valid list', () => {
    // Arrange
    const props = {
      products: [
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
    const productItems = props.products.map((d) => screen.getByText(d.name));

    // Assert
    expect(productItems.length).toBe(props.products.length);
  });

  it('should not show anything when passing and empty list', () => {
    // Arrange
    const props = {
      products: [],
    };

    // Act
    const { container } = render(<SubmenuCategoryComponent {...props} />);
    // Assert

    expect(container).toHaveTextContent('');
  });

  it('should not show anything when passing a null list', () => {
    // Arrange
    const props = {
      products: null,
    };

    // Act
    const { container } = render(<SubmenuCategoryComponent {...props} />);
    // Assert

    expect(container).toHaveTextContent('');
  });

  it('should not show anything when passing an undefined list', () => {
    // Arrange
    const props = {
      products: undefined,
    };

    // Act
    const { container } = render(<SubmenuCategoryComponent {...props} />);
    // Assert

    expect(container).toHaveTextContent('');
  });
});
