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
  menuCategories?.map((mc) => mapMenuCategoryApiModelToViewModel(mc)) ?? [];

export const mapMenuCategoryApiModelToViewModel = (
  menuCategory: apiModel.MenuCategory,
): viewModel.MenuCategory => ({
  name: menuCategory.name,
  products: !!menuCategory.products ? mapProductApiModelsToViewModels(menuCategory.products) : [],
});

export const mapProductApiModelsToViewModels = (
  products: Array<apiModel.Product>,
): Array<viewModel.Product> => products?.map((p) => mapProductApiModelToViewModel(p)).filter(p => p.portions.length > 0) ?? [];

export const mapProductApiModelToViewModel = (product: apiModel.Product): viewModel.Product => ({
  ...product,
  portions: mapPortionApiModelsToPortionViewModels(product.portions),
});

const mapPortionApiModelsToPortionViewModels = (
  portions: Array<apiModel.Portion>,
): Array<viewModel.Portion> =>
  portions?.filter((p) => !!p.price).map((p) => mapPortionApiModelToPortionViewModel(p)) ?? [];

const mapPortionApiModelToPortionViewModel = (portion: apiModel.Portion): viewModel.Portion => ({
  name: portion.name,
  price: formatToEuros(portion.price),
});
