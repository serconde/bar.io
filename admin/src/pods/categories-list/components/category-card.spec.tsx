import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CategoryCardComponent } from './category-card.component';

describe('CategortyCardComponent tests', () => {
  it('should show the category name and the edit and delete buttons when passed a valid props', () => {
    // Arrange
    const props = {
      id: 1,
      name: 'Entrantes',
      onEdit: (id: number) => console.log(`Editar ${id}`),
      onDelete: (id: number) => console.log(`Borrar ${id}`),
    };

    // Act
    render(<CategoryCardComponent {...props} />);
    const categoryName = screen.getByText(props.name);
    const editButton = screen.getByLabelText(`Editar ${props.name}`);
    const deleteButton = screen.getByLabelText(`Borrar ${props.name}`);

    // Assert
    expect(categoryName).toBeInTheDocument();
    expect(editButton).toBeInTheDocument();
    expect(deleteButton).toBeInTheDocument();
  });
  it('should call onEdit when clicking on the edit button', () => {
    // Arrange
    const props = {
      id: 1,
      name: 'Entrantes',
      onEdit: jest.fn(),
      onDelete: (id: number) => console.log(`Borrar ${id}`),
    };

    // Act
    render(<CategoryCardComponent {...props} />);
    const editButton = screen.getByLabelText(`Editar ${props.name}`);
    userEvent.click(editButton);

    // Assert
    expect(props.onEdit).toHaveBeenCalledTimes(1);
  });
  it('should call onDelete when clicking on the delete button', () => {
    // Arrange
    const props = {
      id: 1,
      name: 'Entrantes',
      onEdit: (id: number) => console.log(`Editar ${id}`),
      onDelete: jest.fn(),
    };

    // Act
    render(<CategoryCardComponent {...props} />);
    const deleteButton = screen.getByLabelText(`Borrar ${props.name}`);
    userEvent.click(deleteButton);

    // Assert
    expect(props.onDelete).toHaveBeenCalledTimes(1);
  });
  it('should not render anything when passed a null id', () => {
    // Arrange
    const props = {
      id: null,
      name: 'Entrantes',
      onEdit: (id: number) => console.log(`Editar ${id}`),
      onDelete: (id: number) => console.log(`Borrar ${id}`),
    };

    // Act
    render(<CategoryCardComponent {...props} />);
    const categoryName = screen.queryByText(props.name);
    const editButton = screen.queryByLabelText(`Editar ${props.name}`);
    const deleteButton = screen.queryByLabelText(`Borrar ${props.name}`);

    // Assert
    expect(categoryName).toBeNull();
    expect(editButton).toBeNull();
    expect(deleteButton).toBeNull();
  });

  it('should not render anything when passed an undefined id', () => {
    // Arrange
    const props = {
      id: undefined,
      name: 'Entrantes',
      onEdit: (id: number) => console.log(`Editar ${id}`),
      onDelete: (id: number) => console.log(`Borrar ${id}`),
    };

    // Act
    render(<CategoryCardComponent {...props} />);
    const categoryName = screen.queryByText(props.name);
    const editButton = screen.queryByLabelText(`Editar ${props.name}`);
    const deleteButton = screen.queryByLabelText(`Borrar ${props.name}`);

    // Assert
    expect(categoryName).toBeNull();
    expect(editButton).toBeNull();
    expect(deleteButton).toBeNull();
  });
  it('should not render anything when passed id = 0', () => {
    // Arrange
    const props = {
      id: 0,
      name: 'Entrantes',
      onEdit: (id: number) => console.log(`Editar ${id}`),
      onDelete: (id: number) => console.log(`Borrar ${id}`),
    };

    // Act
    render(<CategoryCardComponent {...props} />);
    const categoryName = screen.queryByText(props.name);
    const editButton = screen.queryByLabelText(`Editar ${props.name}`);
    const deleteButton = screen.queryByLabelText(`Borrar ${props.name}`);

    // Assert
    expect(categoryName).toBeNull();
    expect(editButton).toBeNull();
    expect(deleteButton).toBeNull();
  });
  it('should not render anything when passed a null name', () => {
    // Arrange
    const props = {
      id: 1,
      name: null,
      onEdit: (id: number) => console.log(`Editar ${id}`),
      onDelete: (id: number) => console.log(`Borrar ${id}`),
    };

    // Act
    render(<CategoryCardComponent {...props} />);
    const editButton = screen.queryByLabelText(`Editar ${props.name}`);
    const deleteButton = screen.queryByLabelText(`Borrar ${props.name}`);

    // Assert
    expect(editButton).toBeNull();
    expect(deleteButton).toBeNull();
  });
  it('should not render anything when passed an undefined name', () => {
    // Arrange
    const props = {
      id: 1,
      name: undefined,
      onEdit: (id: number) => console.log(`Editar ${id}`),
      onDelete: (id: number) => console.log(`Borrar ${id}`),
    };

    // Act
    render(<CategoryCardComponent {...props} />);
    const editButton = screen.queryByLabelText(`Editar ${props.name}`);
    const deleteButton = screen.queryByLabelText(`Borrar ${props.name}`);

    // Assert
    expect(editButton).toBeNull();
    expect(deleteButton).toBeNull();
  });
  it('should not render anything when passed an empty name', () => {
    // Arrange
    const props = {
      id: 1,
      name: '',
      onEdit: (id: number) => console.log(`Editar ${id}`),
      onDelete: (id: number) => console.log(`Borrar ${id}`),
    };

    // Act
    render(<CategoryCardComponent {...props} />);
    const editButton = screen.queryByLabelText(`Editar ${props.name}`);
    const deleteButton = screen.queryByLabelText(`Borrar ${props.name}`);

    // Assert
    expect(editButton).toBeNull();
    expect(deleteButton).toBeNull();
  });
});
