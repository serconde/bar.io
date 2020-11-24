import React from 'react';
import { render, screen } from '@testing-library/react';
import { ItemListComponent } from './item-list.component';
import { ItemListVm } from './item-list.vm';

describe('item-list.component specs', () => {
  it('should render ItemListComponent', async () => {
    // Arrange
    const itemMap: ItemListVm[] = [
      { name: 'test', className: 'test-class:test1' },
      { name: 'test 2', className: 'test-class:test2' },
    ];
    const props = { className: '', itemMap };
    // Act
    render(<ItemListComponent {...props} />);
    // Assert
    const element = screen.getByText('test');
    const element2 = screen.getByText('test 2');
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual('DIV');
    expect(element2).toBeInTheDocument();
    expect(element2.tagName).toEqual('DIV');
  });
  it('should not render the item when itemMap is []', async () => {
    // Arrange
    const itemMap: ItemListVm[] = [];
    const props = { className: 'test', itemMap };
    // Act
    render(<ItemListComponent {...props} />);
    // Assert
    const element1 = screen.getAllByRole('listitem');
    // const element2 = getByText('test 2');
    expect(element1[0]).toBeInTheDocument();
    expect(element1[0].tagName).toEqual('LI');
    expect(element1[1]).toBeUndefined();
  });
});
