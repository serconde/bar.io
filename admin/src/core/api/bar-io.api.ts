import { mockedMenuCategories } from './menu-categories.mock-data';
import { MenuCategory } from './menu-categories.model';
import { ProductSize, ProductSizeType } from './product-size.model';
import { mockedProductSizeTypes } from './product-sizes.mock-data';
import { Product } from './product.model';

export const getMenuCategories = (): Promise<Array<MenuCategory>> =>
  (async () => mockedMenuCategories)();

export const getProductById = (id: number): Promise<Product | false> =>
  (async () => {
    let prods: Array<Product> = [];
    mockedMenuCategories.map((c) => (prods = prods.concat(c.products)));
    return prods.find((p) => p.id === id) ?? false;
  })();

export const getPoductCategoryId = (id: number): Promise<number> =>
  (async () => {
    return mockedMenuCategories.find((c) => c.products.some((p) => p.id === id))?.id ?? 0;
  })();

export const saveCategory = async (name: string, id?: number): Promise<boolean> => {
  if (!!id) {
    const category = mockedMenuCategories.find((c) => c.id === id);
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

export const getProductSizeTypeById = (id: number): Promise<ProductSizeType> =>
  (async () => mockedProductSizeTypes.find((pst) => pst.id === id))();

export const saveProductSize = async (
  name: string,
  typeId: number,
  id?: number,
): Promise<boolean> => {
  if (!!id) {
    const productSize = mockedProductSizeTypes
      .find((pst) => pst.id === typeId)
      ?.sizes.find((ps) => ps.id === id);
    if (!!productSize) {
      productSize.name = name;
      return new Promise(() => true);
    } else {
      return new Promise(() => false);
    }
  } else {
    const newId =
      mockedProductSizeTypes
        .map((ps) => ps.sizes.map((s) => s.id))
        .reduce((acc, val) => acc.concat(val))
        .reduce((max, current) => (!!!max || current > max ? current : max)) + 1;
    mockedProductSizeTypes
      .find((pst) => pst.id === typeId)
      ?.sizes.unshift({
        id: newId,
        name: name,
      });

    return new Promise(() => true);
  }
};

export const deleteProductSize = (typeId: number, id: number): Promise<void> =>
  (async () => {
    const sizes = mockedProductSizeTypes.find((pst) => pst.id === typeId).sizes;
    sizes.splice(
      sizes.findIndex((ps) => ps.id === id),
      1,
    );
  })();

const getNewProductId = (): number => {
  let prods: Array<Product> = [];
  mockedMenuCategories.map((c) => (prods = prods.concat(c.products)));
  const ids = prods.map((p) => p.id);
  return Math.max(...ids) + 1;
};
