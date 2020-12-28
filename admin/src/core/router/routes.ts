import { generatePath } from 'react-router-dom';

interface SwitchRoutes {
  root: string;
  login: string;
  dashboard: string;
  barInfo: string;
  categoriesList: string;
  productList: string;
  editProduct: string;
  productPortionList: string;
  editPortions: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  login: '/login',
  dashboard: '/dashboard',
  barInfo: '/barInfo',
  categoriesList: '/categories',
  productList: '/products',
  editProduct: '/product/:productId?',
  productPortionList: '/productPortionList',
  editPortions: '/editPortions/:typeId',
};

interface Routes extends Omit<SwitchRoutes, 'editProduct' | 'editPortions'> {
  editProduct: (productId?: string) => string;
  editPortions: (typeId: string) => string;
}

export const routes: Routes = {
  ...switchRoutes,
  editProduct: (productId?: string) =>
    !!productId
      ? generatePath(switchRoutes.editProduct, { productId })
      : generatePath(switchRoutes.editProduct),
  editPortions: (typeId: string) => generatePath(switchRoutes.editPortions, { typeId }),
};
