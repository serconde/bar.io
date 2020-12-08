import React from 'react';
import { render, screen } from '@testing-library/react';
import { MenuComponent } from './menu.component';
import { formatToEuros } from 'common';

describe('MenuComponent tests', () => {
  it('should render the expected subcomponents', () => {
    // Arrange
    const props = {
      restaurantInfo: {
        name: 'The Restaurant',
        description: 'A nice restaurant',
        telephone: '951123123',
      },
      categories: [
        {
          name: 'Entrantes',
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
        },
      ],
    };

    // Act
    render(<MenuComponent {...props} />);
    const headerTelephone = screen.getByLabelText(
      props.restaurantInfo.telephone.split('').join('.'),
    );
    const menuCategories = props.categories
      .map((c) => c.name)
      .map((name) => screen.getByLabelText(name));

    // Assert
    expect(headerTelephone).toBeInTheDocument();
    menuCategories.map((c) => expect(c).toBeInTheDocument());
  });
});
