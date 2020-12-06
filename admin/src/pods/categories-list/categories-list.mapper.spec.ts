import * as apiModel from './api/menu-category.model';
import { mapCategoriesListApiModelToViewModel } from './categories-list.mapper';
import * as viewModel from 'common/components/sortable-list/list-item.vm';

describe('Categories List mapper tests', () => {
  it('should map to a valid view model when passing a valid api model', () => {
    // Arrange
    const apiModels: Array<apiModel.MenuCategory> = [
      { id: 1, name: 'Entrantes' },
      { id: 2, name: 'Primeros' },
      { id: 3, name: 'Segundos' },
      { id: 4, name: 'Postres' },
      { id: 5, name: 'Bebidas' },
    ];

    const expectedViewModels: Array<viewModel.ListItem> = [
      { id: 1, value: 'Entrantes' },
      { id: 2, value: 'Primeros' },
      { id: 3, value: 'Segundos' },
      { id: 4, value: 'Postres' },
      { id: 5, value: 'Bebidas' },
    ];

    // Act
    const result = mapCategoriesListApiModelToViewModel(apiModels);

    // Assert
    expect(result).toStrictEqual(expectedViewModels);
  });
  it('should map to a an empty view model when passing an undefined api model', () => {
    // Arrange
    const apiModels: Array<apiModel.MenuCategory> = undefined;

    const expectedViewModels: Array<viewModel.ListItem> = [];

    // Act
    const result = mapCategoriesListApiModelToViewModel(apiModels);

    // Assert
    expect(result).toStrictEqual(expectedViewModels);
  });
  it('should map to a an empty view model when passing a null api model', () => {
    // Arrange
    const apiModels: Array<apiModel.MenuCategory> = null;

    const expectedViewModels: Array<viewModel.ListItem> = [];

    // Act
    const result = mapCategoriesListApiModelToViewModel(apiModels);

    // Assert
    expect(result).toStrictEqual(expectedViewModels);
  });
  it('should map to a an empty view model when passing an empty list of categories', () => {
    // Arrange
    const apiModels: Array<apiModel.MenuCategory> = [];

    const expectedViewModels: Array<viewModel.ListItem> = [];

    // Act
    const result = mapCategoriesListApiModelToViewModel(apiModels);

    // Assert
    expect(result).toStrictEqual(expectedViewModels);
  });
});
