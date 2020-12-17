import { Product } from './product.model';

export interface MenuCategory {
  id: number;
  name: string;
  products: Array<Product>;
}

export const createEmptyMenuCategory = (): MenuCategory => ({
  id: 0,
  name: '',
  products: [],
});
