import React from 'react';
import { render, screen } from '@testing-library/react';
import { AddCategoryComponent } from '.';
import userEvent from '@testing-library/user-event';

describe('AddCategoryComponent tests', () => {
  it('should show the edition component when adding', () => {
    // Arrange
    const props = {
      onCancel: () => {
        return;
      },
      onSave: (id: number, name: string) => {
        return;
      },
      onAdd: () => {
        return;
      },
      isAdding: true,
    };

    // Act
    render(<AddCategoryComponent {...props} />);
    const addButton = screen.getByLabelText('Añadir categoría');
    const textField = screen.getByRole('textbox');
    const saveButton = screen.getByLabelText('Guardar categoría');
    const cancelButton = screen.getByLabelText('Cancelar');

    // Assert
    expect(addButton).toBeInTheDocument();
    expect(textField).toBeInTheDocument();
    expect(saveButton).toBeInTheDocument();
    expect(cancelButton).toBeInTheDocument();
  });
  it('should not show the edition component when not adding', () => {
    // Arrange
    const props = {
      onCancel: () => {
        return;
      },
      onSave: (id: number, name: string) => {
        return;
      },
      onAdd: () => {
        return;
      },
      isAdding: false,
    };

    // Act
    render(<AddCategoryComponent {...props} />);
    const addButton = screen.getByLabelText('Añadir categoría');
    const textField = screen.queryByRole('textbox');
    const saveButton = screen.queryByLabelText('Guardar categoría');
    const cancelButton = screen.queryByLabelText('Cancelar');

    // Assert
    expect(addButton).toBeInTheDocument();
    expect(textField).toBeNull();
    expect(saveButton).toBeNull();
    expect(cancelButton).toBeNull();
  });
  it('should enable the add button when not adding', () => {
    // Arrange
    const props = {
      onCancel: () => {
        return;
      },
      onSave: (id: number, name: string) => {
        return;
      },
      onAdd: () => {
        return;
      },
      isAdding: false,
    };

    // Act
    render(<AddCategoryComponent {...props} />);
    const addButton = screen.getByLabelText('Añadir categoría');

    // Assert
    expect(addButton).not.toBeDisabled();
  });
  it('should disable the add button when adding', () => {
    // Arrange
    const props = {
      onCancel: () => {
        return;
      },
      onSave: (id: number, name: string) => {
        return;
      },
      onAdd: () => {
        return;
      },
      isAdding: true,
    };

    // Act
    render(<AddCategoryComponent {...props} />);
    const addButton = screen.getByLabelText('Añadir categoría');

    // Assert
    expect(addButton).toBeDisabled();
  });
  it('should call onAdd when clicking the add button', () => {
    // Arrange
    const props = {
      onCancel: () => {
        return;
      },
      onSave: (id: number, name: string) => {
        return;
      },
      onAdd: jest.fn(),
      isAdding: false,
    };

    // Act
    render(<AddCategoryComponent {...props} />);
    const addButton = screen.getByLabelText('Añadir categoría');
    userEvent.click(addButton);

    // Assert
    expect(props.onAdd).toHaveBeenCalledTimes(1);
  });
  it('should call onSave when clicking the save button', () => {
    // Arrange
    const props = {
      onCancel: () => {
        return;
      },
      onSave: jest.fn(),
      onAdd: () => {
        return;
      },
      isAdding: true,
    };

    // Act
    render(<AddCategoryComponent {...props} />);
    const textField = screen.getByRole('textbox');
    const saveButton = screen.getByLabelText('Guardar categoría');
    userEvent.type(textField, 'Test');
    userEvent.click(saveButton);

    // Assert
    expect(props.onSave).toHaveBeenCalledWith(0, 'Test');
  });
  it('should call onCancel when clicking the cancel button', () => {
    // Arrange
    const props = {
      onCancel: jest.fn(),
      onSave: () => {
        return;
      },
      onAdd: () => {
        return;
      },
      isAdding: true,
    };

    // Act
    render(<AddCategoryComponent {...props} />);
    const cancelButton = screen.queryByLabelText('Cancelar');
    userEvent.click(cancelButton);

    // Assert
    expect(props.onCancel).toHaveBeenCalledTimes(1);
  });
});
