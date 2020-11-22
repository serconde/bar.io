import { formatToEuros } from 'common';
import { mapMenuApiModelToViewModel } from './menu.mapper';

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
          dishes: [
            {
              id: 1,
              name: 'Chorizo criollo',
              price: 5,
            },
            {
              id: 2,
              name: 'Queso provolone',
              price: 4,
            },
            {
              id: 3,
              name: 'Jamón ibérico',
              price: 18,
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
          dishes: [
            {
              id: 1,
              name: 'Chorizo criollo',
              price: formatToEuros(5),
            },
            {
              id: 2,
              name: 'Queso provolone',
              price: formatToEuros(4),
            },
            {
              id: 3,
              name: 'Jamón ibérico',
              price: formatToEuros(18),
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
});
