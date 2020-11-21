import { Menu } from './menu.api.model';
import { mockedMenus } from './menu.mock-data';

export const loadMenu = (menuId: string): Promise<Menu> => {
  if (!!menuId && mockedMenus.has(menuId)) {
    return new Promise(() => mockedMenus.get(menuId));
  } else {
    throw new Error('Menu not found');
  }
};
