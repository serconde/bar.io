import { getMenuCategories } from 'core/api';
import { routes } from 'core/router';
import {
  mapMenuCategoriesToListItems,
  mapProductsToListItems,
} from 'pods/categories-list/categories-list.mapper';
import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { ProductListComponent } from './product-list.component';
import { useMenuCategories } from './use-menu-categories.hook';
import * as classes from './product-list.styles';
import { reorder } from 'common/utils/array';

interface Params {
  categoryId?: string;
}

export const ProductListContainer: React.FunctionComponent = () => {
  const { categoryId } = useParams<Params>();
  const {
    categories,
    setCategories,
    selectedCategoryId,
    setSelectedCategoryId,
    updateSelectedCategoryProducts,
    getProductsByCategoryId,
  } = useMenuCategories([], +categoryId);
  const history = useHistory();

  const onAddProduct = () => {
    history.push(routes.editProduct(selectedCategoryId));
  };

  const onCancelProductEdit = () => {
    history.push(routes.productList(selectedCategoryId));
  };

  const onChangeCategory = (id: number) => setSelectedCategoryId(id);

  const onChangeProductVisibility = (id: number) => {
    const products = getProductsByCategoryId(selectedCategoryId);
    const newProducts = products.map((p) => (p.id === id ? { ...p, visible: !p.visible } : p));
    updateSelectedCategoryProducts(newProducts);
  };

  const onReorderProducts = (startIndex: number, endIndex: number) => {
    const products = getProductsByCategoryId(selectedCategoryId);
    updateSelectedCategoryProducts(reorder(products, startIndex, endIndex));
  };

  const onDeleteProduct = (id: number) => {
    const products = getProductsByCategoryId(selectedCategoryId);
    const newProducts = products.filter((p) => p.id !== id);
    updateSelectedCategoryProducts(newProducts);
  };

  const onEditProduct = (productId: number) =>
    history.push(routes.editProduct(selectedCategoryId, productId));

  const loadData = async () => {
    const menuCategories = await getMenuCategories();
    setCategories(menuCategories);
  };

  React.useEffect(() => {
    async function load() {
      await loadData();
    }
    load();
  }, []);

  return (
    <div className={classes.container}>
      <ProductListComponent
        categories={mapMenuCategoriesToListItems(categories)}
        products={mapProductsToListItems(getProductsByCategoryId(selectedCategoryId))}
        selectedCategoryId={selectedCategoryId}
        onAddProduct={onAddProduct}
        onCancelProductEdit={onCancelProductEdit}
        onChangeCategory={onChangeCategory}
        onChangeProductVisibility={onChangeProductVisibility}
        onDeleteProduct={onDeleteProduct}
        onEditProduct={onEditProduct}
        onReorderProducts={onReorderProducts}
      />
    </div>
  );
};
