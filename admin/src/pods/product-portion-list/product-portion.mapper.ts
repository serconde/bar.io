//VM
import * as apiModel from './api/product-portion.api-model';
import * as viewModel from './product-portion.vm';

export const mapProductPortionListFromApiToVm = (
  productPortionList: apiModel.ProductPortion[],
): viewModel.ProductPortion[] => {
  return Array.isArray(productPortionList)
    ? productPortionList.map((e) => mapProductPortionFromApiToVm(e))
    : [];
};

export const mapProductPortionFromApiToVm = (
  productPortion: apiModel.ProductPortion,
): viewModel.ProductPortion => {
  return Boolean(productPortion)
    ? {
        id: productPortion.id,
        value: productPortion.name,
      }
    : viewModel.createEmptyProductPortion();
};
export const mapProductPortionFromVmToApi = (
  productPortion: viewModel.ProductPortion,
): apiModel.ProductPortion => ({
  id: productPortion.id,
  name: productPortion.value,
});
