import React from 'react';
import { render, screen } from '@testing-library/react';
import { ItemListCustomComponent } from './item-list-custom.component';

describe('list-cell.component specs', () => {
  it('should render ItemListCustomComponent', () => {
    // Arrange
    const mock = 'test mock';
    // Act
    render(<ItemListCustomComponent>{mock}</ItemListCustomComponent>);
    const element = screen.getByText('test mock');
    const list = screen.getByRole('listitem');

    // Assert
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual('LI');
    expect(list.textContent).toContain('test mock');
  });
});
