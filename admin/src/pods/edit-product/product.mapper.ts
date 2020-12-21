import * as apiModel from 'core/api/product.model';
import * as viewModel from './product.vm';

export const mapProductApiModelToViewModel = (product: apiModel.Product): viewModel.Product => ({
  id: product.id,
  categoryId: 0,
  name: product.name,
  price: product.price,
  visible: product.visible,
});

export const mapProductViewModelToApiModel = (product: viewModel.Product): apiModel.Product => ({
  id: product.id,
  name: product.name,
  price: product.price,
  visible: product.visible,
});

export const createEmptyProduct = (): viewModel.Product => ({
  id: 0,
  categoryId: 0,
  name: '',
  price: 0,
  visible: false,
});
