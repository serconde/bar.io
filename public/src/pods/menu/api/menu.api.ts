import { Menu } from './menu.api.model';
import { mockedMenus } from './menu.mock-data';

export const loadMenu = async (menuId: string): Promise<Menu> => {
  if (!!menuId && mockedMenus.has(menuId)) {
    return await mockedMenus.get(menuId);
  } else {
    throw new Error('Menu not found');
  }
};
