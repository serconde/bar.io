import * as apiModel from 'core/api/product.model';
import * as viewModel from './product.vm';
import { initPortionPrices } from './product.vm';

export const mapProductApiModelToViewModel = (product: apiModel.Product): viewModel.Product => ({
  id: product.id,
  categoryId: 0,
  name: product.name,
  portionTypeId: product.portionTypeId,
  portionPrices: mapApiModelPortionsToPortionPrices(product.portions),
  visible: product.visible,
});

export const mapProductViewModelToApiModel = (product: viewModel.Product): apiModel.Product => ({
  id: product.id,
  name: product.name,
  portionTypeId: product.portionTypeId,
  portions: mapPortionPricesToPortionApiModels(product.portionPrices),
  visible: product.visible,
});

export const createEmptyProductVm = (): viewModel.Product => ({
  id: 0,
  categoryId: 0,
  name: '',
  portionTypeId: 0,
  portionPrices: new Array<number>(10).fill(0),
  visible: false,
});

const mapPortionPricesToPortionApiModels = (
  portionPrices: Array<number>,
): Array<apiModel.Portion> => {
  const portions: Array<apiModel.Portion> = [];
  !!portionPrices && portionPrices.forEach((price, id) => !!price && portions.push({ id, price }));
  return portions;
};

const mapApiModelPortionsToPortionPrices = (
  portions: Array<apiModel.Portion>,
): Array<number> => {
  const portionPrices = initPortionPrices();
  !!portions && portions.map((p) => portionPrices[p.id] = p.price);
  return portionPrices;
};
