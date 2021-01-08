import React from 'react';
import { render, screen } from '@testing-library/react';
import { MenuListComponent } from '.';
import { formatToEuros } from 'common';

describe('MenuListComponentTest', () => {
  it('should show the menu categories and their products when passed a valid menu', () => {
    // Arrange
    const props = {
      categories: [
        {
          name: 'Entrantes',
          products: [
            {
              id: 1,
              name: 'Chorizo criollo',
              portions: [{name: 'Única', price: '5,00 €'}],
            },
            {
              id: 2,
              name: 'Queso provolone',
              portions: [{name: 'Única', price: '5,00 €'}],
            },
            {
              id: 3,
              name: 'Jamón ibérico',
              portions: [{name: 'Única', price: '5,00 €'}],
            },
          ],
        },
        {
          name: 'Platos Principales',
          products: [
            {
              id: 12,
              name: 'Flamenquín cordobés',
              portions: [{name: 'Única', price: '5,00 €'}],
            },
            {
              id: 13,
              name: 'Carrillada ibérica al Predro Ximénez',
              portions: [{name: 'Única', price: '5,00 €'}],
            },
            {
              id: 14,
              name: 'Huevos rotos con chorizo y patatas fritas',
              portions: [{name: 'Única', price: '5,00 €'}],
            },
          ],
        },
        {
          name: 'Postres',
          products: [
            {
              id: 21,
              name: 'Torrijas',
              portions: [{name: 'Única', price: '5,00 €'}],
            },
            {
              id: 22,
              name: 'Coulant de chocolate negro con helado de vainilla',
              portions: [{name: 'Única', price: '5,00 €'}],
            },
          ],
        },
        {
          name: 'Bebidas',
          products: [
            {
              id: 24,
              name: 'Refrescos',
              portions: [{name: 'Única', price: '5,00 €'}],
            },
            {
              id: 25,
              name: 'Cerveza (caña)',
              portions: [{name: 'Única', price: '5,00 €'}],
            },
            {
              id: 26,
              name: 'Cerveza (Jarra)',
              portions: [{name: 'Única', price: '5,00 €'}],
            },
          ],
        },
      ],
    };

    // Act
    render(<MenuListComponent {...props} />);
    const categories = props.categories
      .map((c) => c.name)
      .map((name) => screen.getByText(name));
    const products = new Array<string>();
    props.categories.map((c) => c.products.map((d) => products.push(`${d.name}`)));
    const productItems = products.map((d) => screen.getByText(d));

    // Assert
    expect(categories.length).toBe(props.categories.length);
    expect(productItems.length).toBe(products.length);
  });

  it('should not show anything when passing and empty list', () => {
    // Arrange
    const props = {
      categories: [],
    };

    // Act
    const { container } = render(<MenuListComponent {...props} />);
    // Assert

    expect(container.innerHTML).toBe('<div></div>');
  });

  it('should not show anything when passing a null list', () => {
    // Arrange
    const props = {
      categories: null,
    };

    // Act
    const { container } = render(<MenuListComponent {...props} />);
    // Assert

    expect(container.innerHTML).toBe('<div></div>');
  });

  it('should not show anything when passing an undefined list', () => {
    // Arrange
    const props = {
      categories: undefined,
    };

    // Act
    const { container } = render(<MenuListComponent {...props} />);
    // Assert

    expect(container.innerHTML).toBe('<div></div>');
  });
});
