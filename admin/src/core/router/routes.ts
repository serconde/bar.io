import { generatePath } from 'react-router-dom';

interface SwitchRoutes {
  root: string;
  login: string;
  dashboard: string;
  barInfo: string;
  categoriesList: string;
  productList: string;
  editCategory: string;
  editProduct: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  login: '/login',
  dashboard: '/dashboard',
  barInfo: '/barInfo',
  categoriesList: '/categories',
  productList: '/products',
  editCategory: '/category/:id',
  editProduct: '/product/:id',
};

interface Routes extends Omit<SwitchRoutes, 'editCategory' | 'editProduct'> {
  editCategory: (id: string) => string;
  editProduct: (id: string) => string;
}

export const routes: Routes = {
  ...switchRoutes,
  editCategory: (id) => generatePath(switchRoutes.editCategory, { id }),
  editProduct: (id) => generatePath(switchRoutes.editProduct, { id }),
};
