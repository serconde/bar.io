import { generatePath } from 'react-router-dom';

interface SwitchRoutes {
  root: string;
  login: string;
  dashboard: string;
  barInfo: string;
  categoriesList: string;
  productList: string;
  editProduct: string;
  editSizes: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  login: '/login',
  dashboard: '/dashboard',
  barInfo: '/barInfo',
  categoriesList: '/categories',
  productList: '/products',
  editProduct: '/product/:productId?',
  editSizes: '/editSizes/:typeId',
};

interface Routes extends Omit<SwitchRoutes, 'editProduct' | 'editSizes'> {
  editProduct: (productId?: number) => string;
  editSizes: (typeId: number) => string;
}

export const routes: Routes = {
  ...switchRoutes,
  editProduct: (productId?: number) =>
    !!productId
      ? generatePath(switchRoutes.editProduct, { productId })
      : generatePath(switchRoutes.editProduct),
  editSizes: (typeId: number) => generatePath(switchRoutes.editSizes, { typeId }),
};
