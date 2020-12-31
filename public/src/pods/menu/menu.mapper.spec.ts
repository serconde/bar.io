import { formatToEuros } from 'common';
import { mapMenuApiModelToViewModel } from './menu.mapper';
import { createEmptyMenu } from './menu.vm';

describe('Menu mapper tests', () => {
  it('should return a valid view model when passing a complete api model', () => {
    // Arrange
    const menuApiModel = {
      restaurantInfo: {
        name: 'The Restaurant',
        description: 'A nice restaurant',
        telephone: '951123123',
      },
      categories: [
        {
          name: 'Entrantes',
          products: [
            {
              name: 'Chorizo criollo',
              portions: [{ name: 'Única', price: 5.5 }],
            },
            {
              name: 'Queso provolone',
              portions: [{ name: 'Única', price: 5.5 }],
            },
            {
              name: 'Jamón ibérico',
              portions: [{ name: 'Única', price: 0 }],
            },
          ],
        },
      ],
    };

    const expectedMenuViewModel = {
      restaurantInfo: {
        name: 'The Restaurant',
        description: 'A nice restaurant',
        telephone: '951123123',
      },
      categories: [
        {
          name: 'Entrantes',
          products: [
            {
              name: 'Chorizo criollo',
              portions: [{ name: 'Única', price: formatToEuros(5.5) }],
            },
            {
              name: 'Queso provolone',
              portions: [{ name: 'Única', price: formatToEuros(5.5) }],
            },
          ],
        },
      ],
    };

    // Act    
    const menuViewModel = mapMenuApiModelToViewModel(menuApiModel);

    // Assert
    expect(menuViewModel).toEqual(expectedMenuViewModel);
  });

  it('should return a valid view model when passing a null category list', () => {
    // Arrange
    const menuApiModel = {
      restaurantInfo: {
        name: 'The Restaurant',
        description: 'A nice restaurant',
        telephone: '951123123',
      },
      categories: null,
    };

    const expectedMenuViewModel = {
      restaurantInfo: {
        name: 'The Restaurant',
        description: 'A nice restaurant',
        telephone: '951123123',
      },
      categories: [],
    };

    // Act
    const menuViewModel = mapMenuApiModelToViewModel(menuApiModel);

    // Assert
    expect(menuViewModel).toEqual(expectedMenuViewModel);
  });
  it('should return a valid view model when passing an undefined category list', () => {
    // Arrange
    const menuApiModel = {
      restaurantInfo: {
        name: 'The Restaurant',
      },
      categories: undefined,
    };

    const expectedMenuViewModel = {
      restaurantInfo: {
        name: 'The Restaurant',
      },
      categories: [],
    };

    // Act
    const menuViewModel = mapMenuApiModelToViewModel(menuApiModel);

    // Assert
    expect(menuViewModel).toEqual(expectedMenuViewModel);
  });
  it('should an empty view model when passing an undefined api model', () => {
    // Arrange
    const menuApiModel = undefined;

    const expectedMenuViewModel = createEmptyMenu();

    // Act
    const menuViewModel = mapMenuApiModelToViewModel(menuApiModel);

    // Assert
    expect(menuViewModel).toEqual(expectedMenuViewModel);
  });

  it('should an empty view model when passing an null api model', () => {
    // Arrange
    const menuApiModel = null;

    const expectedMenuViewModel = createEmptyMenu();

    // Act
    const menuViewModel = mapMenuApiModelToViewModel(menuApiModel);

    // Assert
    expect(menuViewModel).toEqual(expectedMenuViewModel);
  });
});
