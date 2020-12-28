import { Product as ApiModel } from 'core/api/product.model';
import { mapProductApiModelToViewModel, mapProductViewModelToApiModel } from './product.mapper';
import { initPortionPrices, Product as ViewModel } from './product.vm';

describe('Product mapper tests', () => {
  it('should map to a view model when passing a valid api model', () => {
    //Arrange
    const apiModel: ApiModel = {
      id: 1,
      name: 'Test model',
      portionTypeId: 10,
      portions: [
        {
          id: 1,
          price: 15,
        },
      ],
      visible: true,
    };

    //Act
    const result = mapProductApiModelToViewModel(apiModel);

    //Assert
    const portionPrices = initPortionPrices();
    portionPrices[apiModel.portions[0].id] = apiModel.portions[0].price;
    const expectedResult: ViewModel = {
      id: 1,
      name: 'Test model',
      portionTypeId: 10,
      categoryId: 0,
      portionPrices: portionPrices,
      visible: true,
    };

    expect(result).toStrictEqual(expectedResult);
  });
  it('should map to a view model when passing an api model with empty portions', () => {
    //Arrange
    const apiModel: ApiModel = {
      id: 1,
      name: 'Test model',
      portionTypeId: 10,
      portions: [],
      visible: true,
    };

    //Act
    const result = mapProductApiModelToViewModel(apiModel);

    //Assert
    const expectedResult: ViewModel = {
      id: 1,
      name: 'Test model',
      portionTypeId: 10,
      categoryId: 0,
      portionPrices: initPortionPrices(),
      visible: true,
    };

    expect(result).toStrictEqual(expectedResult);
  });
  it('should map to a view model when passing an api model with null portions', () => {
    //Arrange
    const apiModel: ApiModel = {
      id: 1,
      name: 'Test model',
      portionTypeId: 10,
      portions: null,
      visible: true,
    };

    //Act
    const result = mapProductApiModelToViewModel(apiModel);

    //Assert
    const expectedResult: ViewModel = {
      id: 1,
      name: 'Test model',
      portionTypeId: 10,
      categoryId: 0,
      portionPrices: initPortionPrices(),
      visible: true,
    };

    expect(result).toStrictEqual(expectedResult);
  });
  it('should map to a view model when passing an api model with undefined portions', () => {
    //Arrange
    const apiModel: ApiModel = {
      id: 1,
      name: 'Test model',
      portionTypeId: 10,
      portions: undefined,
      visible: true,
    };

    //Act
    const result = mapProductApiModelToViewModel(apiModel);

    //Assert
    const expectedResult: ViewModel = {
      id: 1,
      name: 'Test model',
      portionTypeId: 10,
      categoryId: 0,
      portionPrices: initPortionPrices(),
      visible: true,
    };

    expect(result).toStrictEqual(expectedResult);
  });
  it('should map to an api model when passing a valid view model', () => {
    //Arrange
    const portionPrices = initPortionPrices();
    portionPrices[1] = 15;
    const viewModel: ViewModel = {
      id: 1,
      name: 'Test model',
      portionTypeId: 10,
      categoryId: 0,
      portionPrices: portionPrices,
      visible: true,
    };

    //Act
    const result = mapProductViewModelToApiModel(viewModel);

    //Assert
    const expectedResult: ApiModel = {
      id: 1,
      name: 'Test model',
      portionTypeId: 10,
      portions: [{ id: 1, price: 15 }],
      visible: true,
    };

    expect(result).toStrictEqual(expectedResult);
  });
  it('should map to an api model when passing a view model with empty portionPrices', () => {
    //Arrange
    const portionPrices = initPortionPrices();
    portionPrices[1] = 15;
    const viewModel: ViewModel = {
      id: 1,
      name: 'Test model',
      portionTypeId: 10,
      categoryId: 0,
      portionPrices: [],
      visible: true,
    };

    //Act
    const result = mapProductViewModelToApiModel(viewModel);

    //Assert
    const expectedResult: ApiModel = {
      id: 1,
      name: 'Test model',
      portionTypeId: 10,
      portions: [],
      visible: true,
    };

    expect(result).toStrictEqual(expectedResult);
  });  
});
