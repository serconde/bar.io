import { mockedMenuCategories } from './menu-categories.mock-data';
import { MenuCategory } from './menu-categories.model';
import { ProductPortion, ProductPortionType } from './product-portion.model';
import { mockedProductPortionTypes } from './product-portions.mock-data';
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

export const saveCategories = async (categories: Array<MenuCategory>): Promise<void> => {
  (async () => {
    mockedMenuCategories.splice(0, mockedMenuCategories.length);
    categories.map((c) => mockedMenuCategories.push(c));
  })();
};

export const saveCategory = async (name: string, id?: number): Promise<boolean> => {
  if (!!id) {
    const category = mockedMenuCategories.find((c) => c.id === id);
    if (!!category) {
      const newCategory = { ...category, name };
      const index = mockedMenuCategories.findIndex((c) => c.id === id);
      mockedMenuCategories.splice(index, 1, newCategory);
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

export const saveProduct = async (prod: Product, categoryId?: number): Promise<void> => {
  if (prod.id) {
    const products = mockedMenuCategories.find((c) => c.id === categoryId)?.products;
    const product = products?.find((p) => p.id === prod.id);
    if (!!product) {
      const newProduct = {
        ...product,
        name: prod.name,
        portionTypeId: prod.portionTypeId,
        portions: prod.portions,
      };

      const index = products.findIndex((p) => p.id === prod.id);
      const newProducts = [...products];
      newProducts[index] = newProduct;
      saveProducts(categoryId, newProducts);
    }
  } else if (!!categoryId) {
    prod.id = getNewProductId();
    const categories = mockedMenuCategories.filter((c) => c.id === categoryId);
    !!categories && categories[0].products.push(prod);
  }
};

export const saveProducts = async (categoryId: number, products: Array<Product>): Promise<void> => {
  (async () => {
    const category = mockedMenuCategories.find((c) => c.id === categoryId);
    const index = mockedMenuCategories.findIndex((c) => c.id === categoryId);
    const newCategory = { ...category, products };    
    mockedMenuCategories[index] = newCategory;        
  })();
};

export const getProductPortionTypes = (): Promise<Array<ProductPortionType>> =>
  (async () => mockedProductPortionTypes)();

export const getProductPortionTypeById = (id: number): Promise<ProductPortionType> =>
  (async () => mockedProductPortionTypes.find((ppt) => ppt.id === id))();

export const saveProductPortionType = async (
  typeId: number,
  portions: Array<ProductPortion>,
): Promise<void> =>
  (async () => {
    const type = mockedProductPortionTypes.find((t) => t.id === typeId);
    const index = mockedProductPortionTypes.findIndex((t) => t.id === typeId);
    const newType = { ...type, portions };
    mockedProductPortionTypes[index] = newType;
  })();

export const saveProductPortion = async (
  name: string,
  typeId: number,
  id?: number,
): Promise<boolean> => {
  if (!!id) {
    const portions = mockedProductPortionTypes.find((ppt) => ppt.id === typeId)?.portions;
    const productPortion = portions?.find((ps) => ps.id === id);
    if (!!productPortion) {
      const newPortion = { ...productPortion, name };
      const newPortions = [...portions];
      const index = portions.findIndex((ps) => ps.id === id);
      newPortions[index] = newPortion;
      saveProductPortionType(typeId, newPortions);
      return new Promise(() => true);
    } else {
      return new Promise(() => false);
    }
  } else {
    const newId =
      mockedProductPortionTypes
        .map((ps) => ps.portions.map((s) => s.id))
        .reduce((acc, val) => acc.concat(val))
        .reduce((max, current) => (!!!max || current > max ? current : max)) + 1;
    mockedProductPortionTypes
      .find((ppt) => ppt.id === typeId)
      ?.portions.unshift({
        id: newId,
        name: name,
      });

    return new Promise(() => true);
  }
};

export const deleteProductPortion = (typeId: number, id: number): Promise<void> =>
  (async () => {
    const portions = mockedProductPortionTypes.find((ppt) => ppt.id === typeId).portions;
    portions.splice(
      portions.findIndex((ps) => ps.id === id),
      1,
    );
  })();

const getNewProductId = (): number => {
  let prods: Array<Product> = [];
  mockedMenuCategories.map((c) => (prods = prods.concat(c.products)));
  const ids = prods.map((p) => p.id);
  return Math.max(...ids) + 1;
};
