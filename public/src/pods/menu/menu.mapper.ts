import { formatToEuros } from 'common';
import * as apiModel from './api/menu.api.model';
import * as viewModel from './menu.vm';

export const mapMenuApiModelToViewModel = (menu: apiModel.Menu): viewModel.Menu => ({
  restaurantInfo: mapRestaurantInfoApiModelToViewModel(menu.restaurantInfo),
  categories: !!menu.categories ? mapMenuCategoryApiModelsToViewModels(menu.categories) : [],
});

export const mapRestaurantInfoApiModelToViewModel = (
  restaurantInfo: apiModel.RestaurantInfo,
): viewModel.RestaurantInfo => ({ ...restaurantInfo });

export const mapMenuCategoryApiModelsToViewModels = (
  menuCategories: Array<apiModel.MenuCategory>,
): Array<viewModel.MenuCategory> =>
  menuCategories.map((mc) => mapMenuCategoryApiModelToViewModel(mc));

export const mapMenuCategoryApiModelToViewModel = (
  menuCategory: apiModel.MenuCategory,
): viewModel.MenuCategory => ({
  name: menuCategory.name,
  dishes: !!menuCategory.dishes ? mapDishApiModelsToViewModels(menuCategory.dishes) : [],
});

export const mapDishApiModelsToViewModels = (dishes: Array<apiModel.Dish>): Array<viewModel.Dish> =>
  dishes.map((d) => mapDishApiModelToViewModel(d));

export const mapDishApiModelToViewModel = (dish: apiModel.Dish): viewModel.Dish => ({
  ...dish,
  price: formatToEuros(dish.price),
});
