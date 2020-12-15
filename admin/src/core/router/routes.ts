import { generatePath } from 'react-router-dom';

interface SwitchRoutes {
  root: string;
  login: string;
  dashboard: string;
  barInfo: string;
  categoriesList: string;
  productList: string;
  editProduct: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  login: '/login',
  dashboard: '/dashboard',
  barInfo: '/barInfo',
  categoriesList: '/categories',
  productList: '/products/:categoryId?',
  editProduct: '/product/:categoryId?/:productId?',
};

interface Routes extends Omit<SwitchRoutes, 'productList' | 'editProduct'> {
  productList: (categoryId?: number) => string;
  editProduct: (categoryId?: number, productId?: number) => string;
}

export const routes: Routes = {
  ...switchRoutes,
  productList: (categoryId?: number) =>
    !!categoryId
      ? generatePath(switchRoutes.productList, { categoryId })
      : generatePath(switchRoutes.productList),
  editProduct: (categoryId?: number, productId?: number) =>
    !!productId
      ? generatePath(switchRoutes.editProduct, { categoryId, productId })
      : !!categoryId
      ? generatePath(switchRoutes.editProduct, { categoryId })
      : generatePath(switchRoutes.editProduct),
};
