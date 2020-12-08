import { formatToEuros } from 'common';
import * as apiModel from './api/menu.api.model';
import * as viewModel from './menu.vm';

export const mapMenuApiModelToViewModel = (menu: apiModel.Menu): viewModel.Menu => {
  if (!!menu)
    return {
      restaurantInfo: mapRestaurantInfoApiModelToViewModel(menu.restaurantInfo),
      categories: !!menu.categories ? mapMenuCategoryApiModelsToViewModels(menu.categories) : [],
    };
  else return viewModel.createEmptyMenu();
};

export const mapRestaurantInfoApiModelToViewModel = (
  restaurantInfo: apiModel.RestaurantInfo,
): viewModel.RestaurantInfo =>
  restaurantInfo ? { ...restaurantInfo } : viewModel.createEmptyRestaurantInfo();

export const mapMenuCategoryApiModelsToViewModels = (
  menuCategories: Array<apiModel.MenuCategory>,
): Array<viewModel.MenuCategory> =>
  menuCategories.map((mc) => mapMenuCategoryApiModelToViewModel(mc));

export const mapMenuCategoryApiModelToViewModel = (
  menuCategory: apiModel.MenuCategory,
): viewModel.MenuCategory => ({
  name: menuCategory.name,
  products: !!menuCategory.products ? mapProductApiModelsToViewModels(menuCategory.products) : [],
});

export const mapProductApiModelsToViewModels = (products: Array<apiModel.Product>): Array<viewModel.Product> =>
  products.map((d) => mapProductApiModelToViewModel(d));

export const mapProductApiModelToViewModel = (product: apiModel.Product): viewModel.Product => ({
  ...product,
  price: formatToEuros(product.price),
});
