import { getMenuCategories } from 'common/api';
import { routes } from 'core/router';
import {
  mapMenuCategoriesToListItems,
  mapProductsToListItems,
} from 'pods/categories-list/categories-list.mapper';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { ProductListComponent } from './product-list.component';
import { useMenuCategories } from './use-menu-categories.hook';
import * as classes from './product-list.styles';
import { Typography } from '@material-ui/core';

export const ProductListContainer: React.FunctionComponent = () => {
  const {
    categories,
    setCategories,
    selectedCategoryId,
    products,
    changeCategory,
    updateSelectedCategoryProducts: updateCurrentCategoryProducts,
  } = useMenuCategories([], 0);
  const history = useHistory();

  const onAddProduct = () => {
    history.push(routes.editProduct());
  };

  const onCancelProductEdit = () => {
    history.push(routes.productList);
  };

  const onChangeCategory = (id: number) => changeCategory(id);

  const onChangeProductVisibility = (id: number) => {
    const newProducts = products.map((p) => (p.id === id ? { ...p, visible: !p.visible } : p));
    updateCurrentCategoryProducts(newProducts);
  };

  const onReorderProducts = (startIndex, endIndex) => {
    const result = Array.from(products);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    updateCurrentCategoryProducts(result);
  };

  const onDeleteProduct = (id: number) => {
    const newProducts = products.filter((p) => p.id !== id);
    updateCurrentCategoryProducts(newProducts);
  };

  const onEditProduct = (id: number) => history.push(routes.editProduct(id));

  const getCategories = async () => {
    const menuCategories = await getMenuCategories();
    setCategories(menuCategories);
  };

  React.useEffect(() => {
    async function loadCategories() {
      await getCategories();
    }
    loadCategories();
  }, []);

  return (
    <div className={classes.container}>
      <Typography>
        <h1>Categorías</h1>
      </Typography>
      <ProductListComponent
        categories={mapMenuCategoriesToListItems(categories)}
        products={mapProductsToListItems(products)}
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
