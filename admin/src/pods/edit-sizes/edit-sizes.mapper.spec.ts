import { mapProductSizesToListItems } from './edit-sizes.mapper';
import { ListItem } from 'common/components/sortable-list/list-item.vm';
import { ProductSize } from 'core/api';

describe('Categories List mapper tests', () => {
  it('should map to the expected item list when passing valid product sizes', () => {
    // Arrange
    const productsSizes: Array<ProductSize> = [
      { id: 1, name: 'Tapa' },
      { id: 2, name: 'Media' },
      { id: 3, name: 'Ración' },
    ];

    const expectedListItems: Array<ListItem> = [
      { id: 1, value: 'Tapa' },
      { id: 2, value: 'Media' },
      { id: 3, value: 'Ración' },
    ];

    // Act
    const result = mapProductSizesToListItems(productsSizes);

    // Assert
    expect(result).toStrictEqual(expectedListItems);
  });
  it('should map to a an empty list of items when passing an undefined list of menu categories', () => {
    // Arrange
    const productsSizes: Array<ProductSize> = undefined;

    // Act
    const result = mapProductSizesToListItems(productsSizes);

    // Assert
    expect(result).toStrictEqual([]);
  });
  it('should map to a an empty list of items when passing an null list of menu categories', () => {
    // Arrange
    const productsSizes: Array<ProductSize> = null;

    // Act
    const result = mapProductSizesToListItems(productsSizes);

    // Assert
    expect(result).toStrictEqual([]);
  });
  it('should map to a an empty list of items when passing an empty list of menu categories', () => {
    // Arrange
    const productsSizes: Array<ProductSize> = [];

    // Act
    const result = mapProductSizesToListItems(productsSizes);

    // Assert
    expect(result).toStrictEqual([]);
  });
});
