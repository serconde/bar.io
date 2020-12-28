import * as apiModel from './api/product-portion.api-model';
import * as viewModel from './product-portion.vm';
import {
  mapProductPortionFromApiToVm,
  mapProductPortionListFromApiToVm,
} from './product-portion.mapper';

describe('pods/product-portion-list/product-portion-list.mapper specs', () => {
  it('should return empty productPortion when it feeds undefined', () => {
    // Arrange
    const productPortion: apiModel.ProductPortion = undefined;

    // Act
    const result: viewModel.ProductPortion = mapProductPortionFromApiToVm(productPortion);

    // Assert
    expect(result).toEqual({
      id: 0,
      value: '',
    });
  });

  it('should return empty productPortion when it feeds null', () => {
    // Arrange
    const productPortion: apiModel.ProductPortion = null;

    // Act
    const result: viewModel.ProductPortion = mapProductPortionFromApiToVm(productPortion);

    // Assert
    expect(result).toEqual({
      id: 0,
      value: '',
    });
  });

  it('should return empty productPortion when it feeds empty object', () => {
    // Arrange
    const productPortion: apiModel.ProductPortion = {
      id: 0,
      name: '',
    };

    // Act
    const result: viewModel.ProductPortion = mapProductPortionFromApiToVm(productPortion);

    // Assert
    expect(result).toEqual({
      id: 0,
      value: '',
    });
  });

  it('should return mapped productPortion when it feed productPortion with data', () => {
    // Arrange
    const productPortion: apiModel.ProductPortion = {
      id: 1,
      name: 'Product Portion test name',
    };

    // Act
    const result: viewModel.ProductPortion = mapProductPortionFromApiToVm(productPortion);

    // Assert
    expect(result).toEqual({
      id: 1,
      value: 'Product Portion test name',
    });
  });

  it('should return empty array when feeding undefined productPortion list', () => {
    // Arrange
    const productPortionList = undefined;

    // Act
    const result = mapProductPortionListFromApiToVm(productPortionList);

    // Assert
    expect(result).toEqual([]);
  });

  it('should return empty array when feeding null productPortion list', () => {
    // Arrange
    const productPortionList = null;

    // Act
    const result = mapProductPortionListFromApiToVm(productPortionList);

    // Assert
    expect(result).toEqual([]);
  });

  it('should return empty array when feeding empty array productPortion list', () => {
    // Arrange
    const productPortionList = [];

    // Act
    const result = mapProductPortionListFromApiToVm(productPortionList);

    // Assert
    expect(result).toEqual([]);
  });

  it('should return one item with values when passing one item with values', () => {
    // Arrange
    const productPortionList: apiModel.ProductPortion[] = [
      {
        id: 1,
        name: 'test name',
      },
    ];

    const expectedResult: viewModel.ProductPortion[] = [
      {
        id: 1,
        value: 'test name',
      },
    ];

    // Act
    const result = mapProductPortionListFromApiToVm(productPortionList);

    // Assert
    expect(result).toEqual(expectedResult);
  });

  it('should return two item with values when passing two item with values', () => {
    // Arrange
    const employeeList: apiModel.ProductPortion[] = [
      {
        id: 1,
        name: 'test name 1',
      },
      {
        id: 2,
        name: 'test name 2',
      },
    ];

    const expectedResult: viewModel.ProductPortion[] = [
      {
        id: 1,
        value: 'test name 1',
      },
      {
        id: 2,
        value: 'test name 2',
      },
    ];

    // Act
    const result = mapProductPortionListFromApiToVm(employeeList);

    // Assert
    expect(result).toEqual(expectedResult);
  });
});
