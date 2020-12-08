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
  productList: '/products',
  editProduct: '/product/:id?',
};

interface Routes extends Omit<SwitchRoutes, 'editProduct'> {
  editProduct: (id?: number) => string;
}

export const routes: Routes = {
  ...switchRoutes,
  editProduct: (id) =>
    !!id ? generatePath(switchRoutes.editProduct, { id }) : generatePath(switchRoutes.editProduct),
};
