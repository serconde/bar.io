import React from 'react';
import { render, screen } from '@testing-library/react';
import { SubmenuCategoryComponent } from './submenu-category.component';

describe('SubmenuCategoryComponentTest', () => {
  it('should show the menu products products when passed a valid list', () => {
    // Arrange
    const props = {
      products: [
        {
          name: 'Chorizo criollo',
          portions: [{name: 'Única', price: '5,00 €'}]
        },
        {
          name: 'Queso provolone',
          portions: [{name: 'Única', price: '5,00 €'}]
        },
        {
          name: 'Jamón ibérico',
          portions: [{name: 'Única', price: '5,00 €'}]
        },
      ],
    };

    // Act
    render(<SubmenuCategoryComponent categoryIndex={0} {...props} />);
    const products = props.products.map((p) => screen.getByText(p.name));
    const prices = screen.getAllByText('5,00 €');

    // Assert
    expect(products.length).toBe(props.products.length);
    expect(prices.length).toBe(props.products.length);
  });

  it('should not show anything when passing and empty list', () => {
    // Arrange
    const props = {
      products: [],
    };

    // Act
    const { container } = render(<SubmenuCategoryComponent categoryIndex={0} {...props} />);
    // Assert

    expect(container).toHaveTextContent('');
  });

  it('should not show anything when passing a null list', () => {
    // Arrange
    const props = {
      products: null,
    };

    // Act
    const { container } = render(<SubmenuCategoryComponent categoryIndex={0} {...props} />);
    // Assert

    expect(container).toHaveTextContent('');
  });

  it('should not show anything when passing an undefined list', () => {
    // Arrange
    const props = {
      products: undefined,
    };

    // Act
    const { container } = render(<SubmenuCategoryComponent categoryIndex={0} {...props} />);
    // Assert

    expect(container).toHaveTextContent('');
  });
});
