import React from 'react';
import { render, screen } from '@testing-library/react';
import { ItemListSpanComponent } from './item-list-span.component';

describe('list-cell.component specs', () => {
  it('should render the component', () => {
    // Arrange
    const props = {
      itemMap: [
        {
          price: 100,
          discount: 10,
          negDiscount: 0,
          total: 90,
          off: '',
        },
      ],
      className: 'test',
    };
    // Act
    render(<ItemListSpanComponent {...props} />);
    // Assert
    expect(screen.getByRole('listitem').tagName).toEqual('LI');
    expect(screen.getByRole('listitem')).toHaveClass('test');
  });
});
