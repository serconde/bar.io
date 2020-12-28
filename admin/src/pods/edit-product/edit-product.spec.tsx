import React from 'react';
import { screen, render, wait, waitFor } from '@testing-library/react';
import { Product } from './product.vm';
import { createEmptyProductVm } from './product.mapper';
import { EditProductComponent } from './edit-product.component';
import userEvent from '@testing-library/user-event';

describe('EditProductComponent tests', () => {
  it('should be in add mode when an empty product model is passed', () => {
    //Arrange
    const props = {
      categories: [
        {
          id: 1,
          name: 'Category I',
        },
        {
          id: 2,
          name: 'Category II',
        },
        {
          id: 3,
          name: 'Category III',
        },
      ],
      product: createEmptyProductVm(),
      portionTypes: [{ id: 1, name: 'Única' }],
      portions: [{ id: 1, name: 'Única' }],
      onSave: (product: Product) => {
        return;
      },
      onChangeCategory: (categoryId: number) => {
        return;
      },
      onChangeName: (name: string) => {
        return;
      },
      onChangePortionPrice: (id: number, price: number) => {
        return;
      },
      onChangePortionType: (id: number) => {
        return;
      },
      onCancel: () => {
        return;
      },
    };

    //Act
    render(<EditProductComponent {...props} />);

    //Assert
    const title = screen.getByRole('heading');
    expect(title).toHaveTextContent('Añadir producto');
    const name = screen.getByText('Nombre');
    expect(name).toBeInTheDocument();
    const category = screen.getByText('Categoría');
    expect(category).toBeInTheDocument();
    const portionType = screen.getByText('Ración');
    expect(portionType).toBeInTheDocument();
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBe(4);
    expect(buttons[2]).toHaveTextContent('Guardar');
    expect(buttons[3]).toHaveTextContent('Cancelar');
  });
  it('should be in edit mode when an existing product is passed', () => {
    //Arrange
    const props = {
      categories: [
        {
          id: 1,
          name: 'Category I',
        },
        {
          id: 2,
          name: 'Category II',
        },
        {
          id: 3,
          name: 'Category III',
        },
      ],
      product: {
        id: 12,
        name: 'Test product',
        visible: true,
        categoryId: 2,
        portionTypeId: 1,
        portionPrices: [0, 15],
      },
      portionTypes: [{ id: 1, name: 'Única' }],
      portions: [{ id: 1, name: 'Única' }],
      onSave: (product: Product) => {
        return;
      },
      onChangeCategory: (categoryId: number) => {
        return;
      },
      onChangeName: (name: string) => {
        return;
      },
      onChangePortionPrice: (id: number, price: number) => {
        return;
      },
      onChangePortionType: (id: number) => {
        return;
      },
      onCancel: () => {
        return;
      },
    };

    //Act
    render(<EditProductComponent {...props} />);

    //Assert
    const title = screen.getByRole('heading');
    expect(title).toHaveTextContent("Editar 'Test product'");
    const name = screen.getByText('Nombre');
    expect(name).toBeInTheDocument();
    const nameField = screen.getByRole('textbox');
    expect(nameField).toHaveValue('Test product');
    const category = screen.getByText('Categoría');
    expect(category).toBeInTheDocument();
    const portionType = screen.getByText('Ración');
    expect(portionType).toBeInTheDocument();
    const price = screen.getByText('Precio - Única');
    expect(price).toBeInTheDocument();
    const priceField = screen.getByDisplayValue('15');
    expect(priceField).toBeInTheDocument();
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBe(4);
    expect(buttons[0]).toHaveTextContent('Category II');
    expect(buttons[1]).toHaveTextContent('Única');
    expect(buttons[2]).toHaveTextContent('Guardar');
    expect(buttons[3]).toHaveTextContent('Cancelar');
  });
  it('should call onSave when the save button is clicked in', async () => {
    //Arrange
    const props = {
      categories: [
        {
          id: 1,
          name: 'Category I',
        },
        {
          id: 2,
          name: 'Category II',
        },
        {
          id: 3,
          name: 'Category III',
        },
      ],
      product: {
        id: 12,
        name: 'Test product',
        visible: true,
        categoryId: 2,
        portionTypeId: 1,
        portionPrices: [0, 15],
      },
      portionTypes: [{ id: 1, name: 'Única' }],
      portions: [{ id: 1, name: 'Única' }],
      onSave: jest.fn(),
      onChangeCategory: (categoryId: number) => {
        return;
      },
      onChangeName: (name: string) => {
        return;
      },
      onChangePortionPrice: (id: number, price: number) => {
        return;
      },
      onChangePortionType: (id: number) => {
        return;
      },
      onCancel: () => {
        return;
      },
    };

    //Act
    render(<EditProductComponent {...props} />);

    //Act
    render(<EditProductComponent {...props} />);
    const saveButton = screen.getAllByRole('button')[2];
    userEvent.click(saveButton);

    //Assert
    await waitFor(() => expect(props.onSave).toHaveBeenCalledTimes(1));
  });
  it('should call onCancel when the cancel button is clicked in', () => {
    //Arrange
    const props = {
      categories: [
        {
          id: 1,
          name: 'Category I',
        },
        {
          id: 2,
          name: 'Category II',
        },
        {
          id: 3,
          name: 'Category III',
        },
      ],
      product: {
        id: 12,
        name: 'Test product',
        visible: true,
        categoryId: 2,
        portionTypeId: 1,
        portionPrices: [0, 15],
      },
      portionTypes: [{ id: 1, name: 'Única' }],
      portions: [{ id: 1, name: 'Única' }],
      onSave: jest.fn(),
      onChangeCategory: (categoryId: number) => {
        return;
      },
      onChangeName: (name: string) => {
        return;
      },
      onChangePortionPrice: (id: number, price: number) => {
        return;
      },
      onChangePortionType: (id: number) => {
        return;
      },
      onCancel: jest.fn(),
    };

    //Act
    render(<EditProductComponent {...props} />);
    const cancelButton = screen.getAllByRole('button')[3];
    userEvent.click(cancelButton);

    //Assert
    expect(props.onCancel).toHaveBeenCalledTimes(1);
  });
});
