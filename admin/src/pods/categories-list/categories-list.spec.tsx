import React from 'react';
import { render, screen } from '@testing-library/react';
import { CategoriesListComponent } from './categories-list.component';

describe('CategoriesListComponent test', () => {
  it('should show the add button and a list of category cards when passed a valid list', () => {
    // Arrange
    const props = {
      categories: [
        { id: 1, name: 'Entrantes' },
        { id: 2, name: 'Primeros' },
        { id: 3, name: 'Segundos' },
        { id: 4, name: 'Postres' },
        { id: 5, name: 'Bebidas' },
      ],
      editCategoryId: false,
      onAdd: () => {
        return;
      },
      onCancel: () => {
        return;
      },
      onEdit: (id: number) => {
        return;
      },
      onDelete: (id: number) => {
        return;
      },
      onSave: (id: number, name: string) => {
        return;
      },
      onReorder: (startIndex: number, endIndex: number) => {
        return;
      },
    };

    // Act
    render(<CategoriesListComponent {...props} />);
    const addButton = screen.getByLabelText('Añadir categoría');
    let cardAmount = 0;
    props.categories.map((c) => (cardAmount += screen.queryAllByText(c.name).length));

    // Assert
    expect(addButton).toBeInTheDocument();
    expect(cardAmount).toBe(props.categories.length);
  });
  it('should show the add button and a disclaimer message when passing an undefined categories list', () => {
    // Arrange
    const props = {
      categories: undefined,
      editCategoryId: false,
      onAdd: () => {
        return;
      },
      onCancel: () => {
        return;
      },
      onEdit: (id: number) => {
        return;
      },
      onDelete: (id: number) => {
        return;
      },
      onSave: (id: number, name: string) => {
        return;
      },
      onReorder: (startIndex: number, endIndex: number) => {
        return;
      },
    };

    // Act
    render(<CategoriesListComponent {...props} />);
    const disclaimer = screen.getByText('No existen categorías');
    const buttonAmount = screen.queryAllByRole('button').length;

    // Assert
    expect(disclaimer).toBeInTheDocument();
    expect(buttonAmount).toBe(1);
  });
  it('should show "No existen categorías" when passing a null categories list', () => {
    // Arrange
    const props = {
      categories: undefined,
      editCategoryId: false,
      onAdd: () => {
        return;
      },
      onCancel: () => {
        return;
      },
      onEdit: (id: number) => {
        return;
      },
      onDelete: (id: number) => {
        return;
      },
      onSave: (id: number, name: string) => {
        return;
      },
      onReorder: (startIndex: number, endIndex: number) => {
        return;
      },
    };

    // Act
    render(<CategoriesListComponent {...props} />);
    const disclaimer = screen.getByText('No existen categorías');
    const addButton = screen.getByLabelText('Añadir categoría');

    // Assert
    expect(disclaimer).toBeInTheDocument();
    expect(addButton).toBeInTheDocument();
  });
  it('should show the add button and a disclaimer when passing a null categories list', () => {
    // Arrange
    const props = {
      categories: undefined,
      editCategoryId: false,
      onAdd: () => {
        return;
      },
      onCancel: () => {
        return;
      },
      onEdit: (id: number) => {
        return;
      },
      onDelete: (id: number) => {
        return;
      },
      onSave: (id: number, name: string) => {
        return;
      },
      onReorder: (startIndex: number, endIndex: number) => {
        return;
      },
    };

    // Act
    render(<CategoriesListComponent {...props} />);
    const disclaimer = screen.getByText('No existen categorías');
    const addButton = screen.getByLabelText('Añadir categoría');

    // Assert
    expect(disclaimer).toBeInTheDocument();
    expect(addButton).toBeInTheDocument();
  });
});
