import React from 'react';
import { render, screen } from '@testing-library/react';
import { SpanGroupComponent } from './span-group.component';

describe('list-cell.component specs', () => {
  it('should render SpanGroupComponent', () => {
    // Arrange
    const props = {
      numItems: 1,
      text: 'test',
      price: 20,
      currency: '$',
    };
    // Act
    render(<SpanGroupComponent {...props} />);

    const itemsText = screen.getByText('1 test');
    const price = screen.getByText('20');
    const currency = screen.getByText('$');
    // Assert
    expect(itemsText).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(currency).toBeInTheDocument();
  });
  it('should render SpanGroupComponent with class', () => {
    // Arrange
    const props = {
      numItems: 1,
      text: 'test',
      price: 20,
      currency: '$',
      classStyle: {
        itemsNumber: `testItem`,
        currencyStyle: `testCurrency`,
        itemsPrice: `testPrice`,
      },
    };
    // Act
    render(<SpanGroupComponent {...props} />);

    const itemText = screen.getByTestId('numTest');
    const itemPrice = screen.getByTestId('price');
    const itemCurrency = screen.getByTestId('currency');
    // Assert
    expect(itemText).toBeInTheDocument();
    expect(itemText).toHaveClass('testItem');
    expect(itemPrice).toBeInTheDocument();
    expect(itemPrice).toHaveClass('testPrice');
    expect(itemCurrency).toBeInTheDocument();
    expect(itemCurrency).toHaveClass('testCurrency');
  });
});
