import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CategoryCardComponent } from './category-card.component';

describe('CategortyCardComponent tests', () => {
  it('should show the category name and the edit and delete buttons when not editing', () => {
    // Arrange
    const props = {
      id: 1,
      name: 'Entrantes',
      edit: false,
      onEdit: (id: number) => {
        return;
      },
      onDelete: (id: number) => {
        return;
      },
      onSave: (id: number, name: string) => {
        return;
      },
      onCancel: () => {
        return;
      },
    };

    // Act
    render(<CategoryCardComponent {...props} />);
    const categoryName = screen.getByText(props.name);
    const editButton = screen.getByLabelText(`Editar ${props.name}`);
    const deleteButton = screen.getByLabelText(`Borrar ${props.name}`);
    const saveButton = screen.queryByLabelText('Guardar categoría');
    const cancelButton = screen.queryByLabelText('Cancelar');

    // Assert
    expect(categoryName).toBeInTheDocument();
    expect(editButton).toBeInTheDocument();
    expect(deleteButton).toBeInTheDocument();
    expect(saveButton).toBeNull();
    expect(cancelButton).toBeNull();
  });
  it('should show the category name and the save and cancel buttons when editing', () => {
    // Arrange
    const props = {
      id: 1,
      name: 'Entrantes',
      edit: true,
      onEdit: (id: number) => {
        return;
      },
      onDelete: (id: number) => {
        return;
      },
      onSave: (id: number, name: string) => {
        return;
      },
      onCancel: () => {
        return;
      },
    };

    // Act
    render(<CategoryCardComponent {...props} />);
    const categoryName = screen.getByRole('textbox');
    const editButton = screen.queryByLabelText(`Editar ${props.name}`);
    const deleteButton = screen.queryByLabelText(`Borrar ${props.name}`);
    const saveButton = screen.getByLabelText('Guardar categoría');
    const cancelButton = screen.getByLabelText('Cancelar');

    // Assert
    expect(categoryName).toBeInTheDocument();
    expect(editButton).toBeNull();
    expect(deleteButton).toBeNull();
    expect(saveButton).toBeInTheDocument();
    expect(cancelButton).toBeInTheDocument();
  });
  it('should call onEdit when clicking on the edit button', () => {
    // Arrange
    const props = {
      id: 1,
      name: 'Entrantes',
      edit: false,
      onEdit: jest.fn(),
      onDelete: (id: number) => {
        return;
      },
      onSave: (id: number, name: string) => {
        return;
      },
      onCancel: () => {
        return;
      },
    };

    // Act
    render(<CategoryCardComponent {...props} />);
    const editButton = screen.getByLabelText(`Editar ${props.name}`);
    userEvent.click(editButton);

    // Assert
    expect(props.onEdit).toHaveBeenCalledWith(1);
  });
  it('should call onDelete when clicking on the delete button', () => {
    // Arrange
    const props = {
      id: 1,
      name: 'Entrantes',
      edit: false,
      onEdit: () => {
        return;
      },
      onDelete: jest.fn(),
      onSave: (id: number, name: string) => {
        return;
      },
      onCancel: () => {
        return;
      },
    };

    // Act
    render(<CategoryCardComponent {...props} />);
    const deleteButton = screen.getByLabelText(`Borrar ${props.name}`);
    userEvent.click(deleteButton);

    // Assert
    expect(props.onDelete).toHaveBeenCalledWith(1);
  });
  it('should call onSave when clicking on the save button', () => {
    // Arrange
    const props = {
      id: 1,
      name: '',
      edit: true,
      onEdit: () => {
        return;
      },
      onDelete: (id: number) => {
        return;
      },
      onSave: jest.fn(),
      onCancel: () => {
        return;
      },
    };

    // Act
    render(<CategoryCardComponent {...props} />);
    const categoryName = screen.getByRole('textbox');
    const saveButton = screen.getByLabelText('Guardar categoría');
    userEvent.type(categoryName, 'Test');
    userEvent.click(saveButton);

    // Assert
    expect(props.onSave).toHaveBeenCalledWith(1, 'Test');
  });
  it('should call onCancel when clicking on the cancel button', () => {
    // Arrange
    const props = {
      id: 1,
      name: 'Entrantes',
      edit: true,
      onEdit: () => {
        return;
      },
      onDelete: (id: number) => {
        return;
      },
      onSave: (id: number, name: string) => {
        return;
      },
      onCancel: jest.fn(),
    };

    // Act
    render(<CategoryCardComponent {...props} />);
    const cancelButton = screen.getByLabelText('Cancelar');
    userEvent.click(cancelButton);

    // Assert
    expect(props.onCancel).toHaveBeenCalledTimes(1);
  });
  it('should not render anything when passing a null id', () => {
    // Arrange
    const props = {
      id: null,
      name: 'Entrantes',
      edit: false,
      onEdit: () => {
        return;
      },
      onDelete: (id: number) => {
        return;
      },
      onSave: (id: number, name: string) => {
        return;
      },
      onCancel: () => {
        return;
      },
    };

    // Act
    render(<CategoryCardComponent {...props} />);
    const categoryName = screen.queryByText(props.name);
    const editButton = screen.queryByLabelText(`Editar ${props.name}`);
    const deleteButton = screen.queryByLabelText(`Borrar ${props.name}`);
    const saveButton = screen.queryByLabelText('Guardar categoría');
    const cancelButton = screen.queryByLabelText('Cancelar');

    // Assert
    expect(categoryName).toBeNull();
    expect(editButton).toBeNull();
    expect(deleteButton).toBeNull();
    expect(saveButton).toBeNull();
    expect(cancelButton).toBeNull();
  });

  it('should not render anything when passing a undefined id', () => {
    // Arrange
    const props = {
      id: undefined,
      name: 'Entrantes',
      edit: false,
      onEdit: () => {
        return;
      },
      onDelete: (id: number) => {
        return;
      },
      onSave: (id: number, name: string) => {
        return;
      },
      onCancel: () => {
        return;
      },
    };

    // Act
    render(<CategoryCardComponent {...props} />);
    const categoryName = screen.queryByText(props.name);
    const editButton = screen.queryByLabelText(`Editar ${props.name}`);
    const deleteButton = screen.queryByLabelText(`Borrar ${props.name}`);
    const saveButton = screen.queryByLabelText('Guardar categoría');
    const cancelButton = screen.queryByLabelText('Cancelar');

    // Assert
    expect(categoryName).toBeNull();
    expect(editButton).toBeNull();
    expect(deleteButton).toBeNull();
    expect(saveButton).toBeNull();
    expect(cancelButton).toBeNull();
  });
  it('should not render anything when passing a null name', () => {
    // Arrange
    const props = {
      id: 1,
      name: null,
      edit: false,
      onEdit: () => {
        return;
      },
      onDelete: (id: number) => {
        return;
      },
      onSave: (id: number, name: string) => {
        return;
      },
      onCancel: () => {
        return;
      },
    };

    // Act
    render(<CategoryCardComponent {...props} />);
    const editButton = screen.queryByLabelText(`Editar ${props.name}`);
    const deleteButton = screen.queryByLabelText(`Borrar ${props.name}`);
    const saveButton = screen.queryByLabelText('Guardar categoría');
    const cancelButton = screen.queryByLabelText('Cancelar');

    // Assert
    expect(editButton).toBeNull();
    expect(deleteButton).toBeNull();
    expect(saveButton).toBeNull();
    expect(cancelButton).toBeNull();
  });
  it('should not render anything when passing an undefined name', () => {
    // Arrange
    const props = {
      id: 1,
      name: undefined,
      edit: false,
      onEdit: () => {
        return;
      },
      onDelete: (id: number) => {
        return;
      },
      onSave: (id: number, name: string) => {
        return;
      },
      onCancel: () => {
        return;
      },
    };

    // Act
    render(<CategoryCardComponent {...props} />);
    const editButton = screen.queryByLabelText(`Editar ${props.name}`);
    const deleteButton = screen.queryByLabelText(`Borrar ${props.name}`);
    const saveButton = screen.queryByLabelText('Guardar categoría');
    const cancelButton = screen.queryByLabelText('Cancelar');

    // Assert
    expect(editButton).toBeNull();
    expect(deleteButton).toBeNull();
    expect(saveButton).toBeNull();
    expect(cancelButton).toBeNull();
  });
});
