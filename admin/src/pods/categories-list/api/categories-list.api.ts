import { mockedMenuCategories } from './categories-list.mock-data';
import { MenuCategory } from './menu-category.model';

export const getMenuCategories = (): Promise<Array<MenuCategory>> =>
  (async () => mockedMenuCategories)();
