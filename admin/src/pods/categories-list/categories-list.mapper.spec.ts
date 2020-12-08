import { MenuCategory } from 'common/api/menu-category.model';
import {
  mapMenuCategoriesToListItems,
  mapProductsToListItems,
  mapProductToListItem,
} from './categories-list.mapper';
import { ListItem } from 'common/components/sortable-list/list-item.vm';
import { Product } from 'common/api/product.model';
import { formatToEuro } from 'common/utils';

describe('Categories List mapper tests', () => {
  it('should map to the expected item list when passing valid menu categories', () => {
    // Arrange
    const menuCategories: Array<MenuCategory> = [
      { id: 1, name: 'Entrantes', products: [] },
      { id: 2, name: 'Primeros', products: [] },
      { id: 3, name: 'Segundos', products: [] },
      { id: 4, name: 'Postres', products: [] },
      { id: 5, name: 'Bebidas', products: [] },
    ];

    const expectedListItems: Array<ListItem> = [
      { id: 1, value: 'Entrantes' },
      { id: 2, value: 'Primeros' },
      { id: 3, value: 'Segundos' },
      { id: 4, value: 'Postres' },
      { id: 5, value: 'Bebidas' },
    ];

    // Act
    const result = mapMenuCategoriesToListItems(menuCategories);

    // Assert
    expect(result).toStrictEqual(expectedListItems);
  });
  it('should map to a an empty list of items when passing an undefined list of menu categories', () => {
    // Arrange
    const menuCategories: Array<MenuCategory> = undefined;

    const expectedListItems: Array<ListItem> = [];

    // Act
    const result = mapMenuCategoriesToListItems(menuCategories);

    // Assert
    expect(result).toStrictEqual(expectedListItems);
  });
  it('should map to a an empty list of items when passing an null list of menu categories', () => {
    // Arrange
    const menuCategories: Array<MenuCategory> = null;

    const expectedListItems: Array<ListItem> = [];

    // Act
    const result = mapMenuCategoriesToListItems(menuCategories);

    // Assert
    expect(result).toStrictEqual(expectedListItems);
  });
  it('should map to a an empty list of items when passing an empty list of menu categories', () => {
    // Arrange
    const menuCategories: Array<MenuCategory> = [];

    const expectedListItems: Array<ListItem> = [];

    // Act
    const result = mapMenuCategoriesToListItems(menuCategories);

    // Assert
    expect(result).toStrictEqual(expectedListItems);
  });
  it('should map to the expected item list when passing valid products', () => {
    // Arrange
    const products: Array<Product> = [
      { id: 1, name: 'Flamenquín', visible: true, price: 3 },
      { id: 2, name: 'Salmorejo', visible: false, price: 5 },
      { id: 3, name: 'Tortilla de patata', visible: true, price: 6 },
    ];

    const expectedListItems: Array<ListItem> = [
      { id: 1, value: `Flamenquín\n(${formatToEuro(3)})`, visible: true },
      { id: 2, value: `Salmorejo\n(${formatToEuro(5)})`, visible: false },
      { id: 3, value: `Tortilla de patata\n(${formatToEuro(6)})`, visible: true },
    ];

    // Act
    const result = mapProductsToListItems(products);

    // Assert
    expect(result).toStrictEqual(expectedListItems);
  });
  it('should map to an empty item list when passing an undefined product list', () => {
    // Arrange
    const products: Array<Product> = undefined;
    const expectedListItems: Array<ListItem> = [];

    // Act
    const result = mapProductsToListItems(products);

    // Assert
    expect(result).toStrictEqual(expectedListItems);
  });
  it('should map to an empty item list when passing an null product list', () => {
    // Arrange
    const products: Array<Product> = null;
    const expectedListItems: Array<ListItem> = [];

    // Act
    const result = mapProductsToListItems(products);

    // Assert
    expect(result).toStrictEqual(expectedListItems);
  });
  it('should map to an empty item list when passing an empty product list', () => {
    // Arrange
    const products: Array<Product> = [];
    const expectedListItems: Array<ListItem> = [];

    // Act
    const result = mapProductsToListItems(products);

    // Assert
    expect(result).toStrictEqual(expectedListItems);
  });
});
