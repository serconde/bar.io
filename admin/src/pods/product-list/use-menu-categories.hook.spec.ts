import { act, renderHook } from '@testing-library/react-hooks';
import { MenuCategory, Product } from 'core/api';
import { useMenuCategories } from './use-menu-categories.hook';

describe('useMenuCategories hook tests', () => {
  it('should return the categories, the selected category id and the products and functions to set them when it is called', () => {
    // Arrange
    const categories: Array<MenuCategory> = [
      {
        id: 1,
        name: 'Cat 1',
        products: [
          {
            id: 1,
            name: ' Prod 1.1',
            price: 10,
            visible: false,
          },
          {
            id: 2,
            name: ' Prod 1.2',
            price: 20,
            visible: true,
          },
        ],
      },
      {
        id: 2,
        name: 'Cat 2',
        products: [
          {
            id: 3,
            name: ' Prod 2.1',
            price: 10,
            visible: false,
          },
          {
            id: 4,
            name: ' Prod 2.2',
            price: 20,
            visible: true,
          },
        ],
      },
      {
        id: 3,
        name: 'Cat 3',
        products: [],
      },
    ];

    // Act
    const { result } = renderHook(() => useMenuCategories(categories, 2));

    // Assert
    expect(result.current.categories).toStrictEqual(categories);
    expect(result.current.changeCategory).toEqual(expect.any(Function));
    expect(result.current.selectedCategoryId).toBe(2);
    expect(result.current.changeCategory).toEqual(expect.any(Function));
    expect(result.current.products).toStrictEqual(categories[1].products);
    expect(result.current.updateSelectedCategoryProducts).toEqual(expect.any(Function));
  });
  it('should update the categories when it calls setCategories', () => {
    // Arrange
    const categories: Array<MenuCategory> = [
      {
        id: 1,
        name: 'Cat 1',
        products: [
          {
            id: 1,
            name: ' Prod 1.1',
            price: 10,
            visible: false,
          },
          {
            id: 2,
            name: ' Prod 1.2',
            price: 20,
            visible: true,
          },
        ],
      },
      {
        id: 2,
        name: 'Cat 2',
        products: [
          {
            id: 3,
            name: ' Prod 2.1',
            price: 10,
            visible: false,
          },
          {
            id: 4,
            name: ' Prod 2.2',
            price: 20,
            visible: true,
          },
        ],
      },
      {
        id: 3,
        name: 'Cat 3',
        products: [],
      },
    ];

    // Act
    const { result } = renderHook(() => useMenuCategories([], -1));
    act(() => {
      result.current.setCategories(categories);
    });

    // Assert
    expect(result.current.categories).toStrictEqual(categories);
  });
  it('should update the selectedCategory and the products when calling changeCategory', () => {
    // Arrange
    const categories: Array<MenuCategory> = [
      {
        id: 1,
        name: 'Cat 1',
        products: [
          {
            id: 1,
            name: ' Prod 1.1',
            price: 10,
            visible: false,
          },
          {
            id: 2,
            name: ' Prod 1.2',
            price: 20,
            visible: true,
          },
        ],
      },
      {
        id: 2,
        name: 'Cat 2',
        products: [
          {
            id: 3,
            name: ' Prod 2.1',
            price: 10,
            visible: false,
          },
          {
            id: 4,
            name: ' Prod 2.2',
            price: 20,
            visible: true,
          },
        ],
      },
      {
        id: 3,
        name: 'Cat 3',
        products: [],
      },
    ];

    // Act
    const { result } = renderHook(() => useMenuCategories(categories, 1));
    act(() => {
      result.current.changeCategory(2);
    });

    // Assert
    expect(result.current.selectedCategoryId).toStrictEqual(2);
    expect(result.current.products).toStrictEqual(categories[1].products);
  });
  it('should update the selected category products when calling updateSelectedCategoryProducts', () => {
    // Arrange
    const categories: Array<MenuCategory> = [
      {
        id: 1,
        name: 'Cat 1',
        products: [
          {
            id: 1,
            name: ' Prod 1.1',
            price: 10,
            visible: false,
          },
          {
            id: 2,
            name: ' Prod 1.2',
            price: 20,
            visible: true,
          },
        ],
      },
      {
        id: 2,
        name: 'Cat 2',
        products: [
          {
            id: 3,
            name: ' Prod 2.1',
            price: 10,
            visible: false,
          },
          {
            id: 4,
            name: ' Prod 2.2',
            price: 20,
            visible: true,
          },
        ],
      },
      {
        id: 3,
        name: 'Cat 3',
        products: [],
      },
    ];

    const products: Array<Product> = [
      {
        id: 3,
        name: ' Prod 2.1',
        price: 10,
        visible: false,
      },
      {
        id: 4,
        name: ' Prod 2.2',
        price: 20,
        visible: true,
      },
      {
        id: 5,
        name: ' Prod 2.3',
        price: 30,
        visible: false,
      },
    ];

    // Act
    const { result } = renderHook(() => useMenuCategories(categories, 1));
    act(() => {
      result.current.updateSelectedCategoryProducts(products);
    });

    // Assert
    expect(result.current.products).toStrictEqual(products);
  });
});
