import { MenuCategory } from './menu-category.vm';

import * as apiModel from './api/menu-category.model';
import * as viewModel from './menu-category.vm';

export const mapCategoriesListApiModelToViewModel = (
  categories: Array<apiModel.MenuCategory>,
): Array<viewModel.MenuCategory> =>
  !!categories ? categories.map((c) => mapMenuCategoryApiModelToViewModel(c)) : [];

export const mapMenuCategoryApiModelToViewModel = (
  menuCategory: apiModel.MenuCategory,
): viewModel.MenuCategory => (!!menuCategory ? { ...menuCategory } : createEmptyMenuCategory());

export const createEmptyMenuCategory = (): MenuCategory => ({
  id: 0,
  name: '',
});
