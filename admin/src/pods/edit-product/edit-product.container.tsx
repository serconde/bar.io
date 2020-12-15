import { getMenuCategories, getProductById, saveProduct } from 'core/api';
import { routes } from 'core/router';
import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { EditProductComponent } from './edit-product.component';
import * as classes from './edit-product.styles';
import { mapMenuCategoryApiModelsToViewModels } from './menu-category.mapper';
import { MenuCategory } from './menu-category.vm';
import {
  createEmptyProduct,
  mapProductApiModelToViewModel,
  mapProductViewModelToApiModel,
} from './product.mapper';
import { Product } from './product.vm';

interface Params {
  categoryId: string;
  productId?: string;
}

export const EditProductContainer: React.FunctionComponent = () => {
  const { categoryId, productId } = useParams<Params>();
  const [categories, setCategories] = React.useState<Array<MenuCategory>>([]);
  const [product, setProduct] = React.useState<Product>({
    ...createEmptyProduct(),
    categoryId: +categoryId,
  });

  const history = useHistory();

  const onChangeCategory = (categoryId: number) => {
    setProduct({ ...product, categoryId });
  };

  const onSave = (p: Product) => {
    saveProduct(mapProductViewModelToApiModel({ ...p, visible: false }), p.categoryId).then(() =>
      history.push(routes.productList(p.categoryId)),
    );
  };

  const onCancel = () => history.goBack();

  const getProductInfo = async () => {
    if (!!productId) {
      const prod = await getProductById(+productId);
      !!prod && setProduct({ ...mapProductApiModelToViewModel(prod), categoryId: +categoryId });
    }
    const menuCategories = await getMenuCategories();
    setCategories(mapMenuCategoryApiModelsToViewModels(menuCategories));
  };

  React.useEffect(() => {
    async function loadProductInfo() {
      await getProductInfo();
    }
    loadProductInfo();
  }, []);

  return (
    <div className={classes.container}>
      <EditProductComponent
        categories={categories}
        product={product}
        onSave={onSave}
        onCancel={onCancel}
        onChangeCategory={onChangeCategory}
      />
    </div>
  );
};
