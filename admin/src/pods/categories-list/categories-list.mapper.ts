import * as apiModel from './api/menu-category.model';
import * as viewModel from 'common/components/sortable-list/list-item.vm';
import { createEmptyListItem } from 'common/components/sortable-list/list-item.vm';

export const mapCategoriesListApiModelToViewModel = (
  categories: Array<apiModel.MenuCategory>,
): Array<viewModel.ListItem> =>
  !!categories ? categories.map((c) => mapMenuCategoryApiModelToViewModel(c)) : [];

export const mapMenuCategoryApiModelToViewModel = (
  menuCategory: apiModel.MenuCategory,
): viewModel.ListItem =>
  !!menuCategory ? { id: menuCategory.id, value: menuCategory.name } : createEmptyListItem();
