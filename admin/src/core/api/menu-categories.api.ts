import { mockedMenuCategories } from './menu-categories.mock-data';
import { MenuCategory } from './menu-categories.model';
import { Product } from './product.model';

export const getMenuCategories = (): Promise<Array<MenuCategory>> =>
  (async () => mockedMenuCategories)();

export const getProductById = (id: number): Promise<Product | false> =>
  (async () => {
    let prods: Array<Product> = [];
    mockedMenuCategories.map((c) => (prods = prods.concat(c.products)));
    return prods.filter((p) => p.id === id)[0] ?? false;
  })();

export const getPoductCategoryId = (id: number): Promise<number> =>
  (async () => {
    return mockedMenuCategories.filter((c) => c.products.some((p) => p.id === id))[0]?.id ?? 0;
  })();

export const saveCategory = async (name: string, id?: number): Promise<boolean> => {
  if (!!id) {
    const category = mockedMenuCategories.filter((c) => c.id === id)[0];
    if (!!category) {
      category.name = name;
      return new Promise(() => true);
    } else {
      return new Promise(() => false);
    }
  } else {
    const newId =
      mockedMenuCategories
        .map((c) => c.id)
        .reduce((max, current) => (!!!max || current > max ? current : max)) + 1;
    mockedMenuCategories.unshift({
      id: newId,
      name: name,
      products: [],
    });

    return new Promise(() => true);
  }
};

export const deleteCategory = (id: number): Promise<void> =>
  (async () => {
    mockedMenuCategories.splice(
      mockedMenuCategories.findIndex((c) => c.id === id),
      1,
    );
  })();

export const saveProduct = async (p: Product, categoryId?: number): Promise<void> => {
  if (p.id) {
    const product = await getProductById(p.id);
    if (!!product) {
      product.name = p.name;
      product.price = p.price;
    }
  } else if (!!categoryId) {
    p.id = getNewProductId();
    const categories = mockedMenuCategories.filter((c) => c.id === categoryId);
    !!categories && categories[0].products.push(p);
  }
};

const getNewProductId = (): number => {
  let prods: Array<Product> = [];
  mockedMenuCategories.map((c) => (prods = prods.concat(c.products)));
  const ids = prods.map((p) => p.id);
  return Math.max(...ids) + 1;
};
