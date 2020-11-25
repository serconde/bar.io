import React from 'react';
import { render, screen } from '@testing-library/react';
import { MenuListComponent } from '.';
import { formatToEuros } from 'common';

describe('MenuListComponentTest', () => {
  it('should show the menu categories and their dishes when passed a valid menu', () => {
    // Arrange
    const props = {
      categories: [
        {
          name: 'Entrantes',
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
        },
        {
          name: 'Platos Principales',
          dishes: [
            {
              id: 12,
              name: 'Flamenquín cordobés',
              price: formatToEuros(7.5),
            },
            {
              id: 13,
              name: 'Carrillada ibérica al Predro Ximénez',
              price: formatToEuros(9.5),
            },
            {
              id: 14,
              name: 'Huevos rotos con chorizo y patatas fritas',
              price: formatToEuros(7.5),
            },
          ],
        },
        {
          name: 'Postres',
          dishes: [
            {
              id: 21,
              name: 'Torrijas',
              price: formatToEuros(7.0),
            },
            {
              id: 22,
              name: 'Coulant de chocolate negro con helado de vainilla',
              price: formatToEuros(8.5),
            },
          ],
        },
        {
          name: 'Bebidas',
          dishes: [
            {
              id: 24,
              name: 'Refrescos',
              price: formatToEuros(2.5),
            },
            {
              id: 25,
              name: 'Cerveza (caña)',
              price: formatToEuros(2),
            },
            {
              id: 26,
              name: 'Cerveza (Jarra)',
              price: formatToEuros(3.5),
            },
          ],
        },
      ],
    };

    // Act
    render(<MenuListComponent {...props} />);
    const categories = props.categories
      .map((c) => c.name)
      .map((name) => screen.getByLabelText(name));
    const dishes = new Array<string>();
    props.categories.map((c) => c.dishes.map((d) => dishes.push(`${d.name}`)));
    const dishItems = dishes.map((d) => screen.getByText(d));

    // Assert
    expect(categories.length).toBe(props.categories.length);
    expect(dishItems.length).toBe(dishes.length);
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
