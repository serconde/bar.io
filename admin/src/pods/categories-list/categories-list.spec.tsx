import React from 'react';
import { render, screen } from '@testing-library/react';
import { CategoriesListComponent } from './categories-list.component';

describe('CategoriesListComponent test', () => {
  it('should show a list of category cards when passed a valid list', () => {
    // Arrange
    const props = {
      categories: [
        { id: 1, name: 'Entrantes' },
        { id: 2, name: 'Primeros' },
        { id: 3, name: 'Segundos' },
        { id: 4, name: 'Postres' },
        { id: 5, name: 'Bebidas' },
      ],
      onEdit: (id: number) => console.log(`Edit ${id}`),
      onDelete: (id: number) => console.log(`Edit ${id}`),
      onReorder: (startIndex: number, endIndex: number) => console.log('Reordering...'),
    };

    // Act
    render(<CategoriesListComponent {...props} />);
    let cardAmount = 0;
    props.categories.map((c) => (cardAmount += screen.queryAllByText(c.name).length));

    // Assert
    expect(cardAmount).toBe(props.categories.length);
  });
  it('should not show anything when passing an undefined categories list', () => {
    // Arrange
    const props = {
      categories: undefined,
      onEdit: (id: number) => console.log(`Edit ${id}`),
      onDelete: (id: number) => console.log(`Edit ${id}`),
      onReorder: (startIndex: number, endIndex: number) => console.log('Reordering...'),
    };

    // Act
    render(<CategoriesListComponent {...props} />);
    const buttonAmount = screen.queryAllByRole('button').length;

    // Assert
    expect(buttonAmount).toBe(0);
  });
  it('should not show anything when passing a null categories list', () => {
    // Arrange
    const props = {
      categories: null,
      onEdit: (id: number) => console.log(`Edit ${id}`),
      onDelete: (id: number) => console.log(`Edit ${id}`),
      onReorder: (startIndex: number, endIndex: number) => console.log('Reordering...'),
    };

    // Act
    render(<CategoriesListComponent {...props} />);
    const buttonAmount = screen.queryAllByRole('button').length;

    // Assert
    expect(buttonAmount).toBe(0);
  });
  it('should not show anything when passing an empty categories list', () => {
    // Arrange
    const props = {
      categories: [],
      onEdit: (id: number) => console.log(`Edit ${id}`),
      onDelete: (id: number) => console.log(`Edit ${id}`),
      onReorder: (startIndex: number, endIndex: number) => console.log('Reordering...'),
    };

    // Act
    render(<CategoriesListComponent {...props} />);
    const buttonAmount = screen.queryAllByRole('button').length;

    // Assert
    expect(buttonAmount).toBe(0);
  });
});
