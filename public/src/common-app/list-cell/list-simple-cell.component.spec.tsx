import React from 'react';
import { render, screen } from '@testing-library/react';
import { ListSimpleCell } from './list-simple-cell.component';

describe('list-cell.component specs', () => {
  it('should render ListSimpleCell ', () => {
    // Arrange
    const props = {
      num: 1,
      letter: 'test',
      className: {
        colProduct: 'test-class1',
        unitPrice: 'test-class2',
        unitCurrency: 'test-class3',
        currency: 'test-class4',
      },
    };

    // Act
    render(<ListSimpleCell {...props} />);
    const spanNumber = screen.getByText('1');
    const spanLetter = screen.getByText('test');
    // Assert

    expect(spanNumber).toBeInTheDocument();
    expect(spanLetter).toBeInTheDocument();
    expect(spanNumber).toHaveClass('test-class2');
    expect(spanLetter).toHaveClass('test-class3 test-class4');
  });
});
