import {
  getMenuCategories,
  getPoductCategoryId,
  getProductById,
  getProductPortionTypes as getProductPortionTypes,
  ProductPortionType,
  saveProduct,
} from 'core/api';
import { routes } from 'core/router';
import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { EditProductComponent } from './edit-product.component';
import * as classes from './edit-product.styles';
import { mapMenuCategoryApiModelsToViewModels } from './menu-category.mapper';
import { MenuCategory } from './menu-category.vm';
import {
  mapProductPortionApiModelsToViewModels,
  mapProductPortionTypeApiModelsToViewModels,
} from './product-portion.mapper';
import { ProductPortion } from './product-portion.vm';
import {
  createEmptyProductVm,
  mapProductApiModelToViewModel,
  mapProductViewModelToApiModel,
} from './product.mapper';
import { initPortionPrices, Product } from './product.vm';
import produce from 'immer';

interface Params {
  productId?: string;
}

export const EditProductContainer: React.FunctionComponent = () => {
  const { productId } = useParams<Params>();
  const [categories, setCategories] = React.useState<Array<MenuCategory>>([]);
  const [product, setProduct] = React.useState<Product>(createEmptyProductVm());
  const [portionTypes, setPortionTypes] = React.useState<Array<ProductPortionType>>([]);
  const history = useHistory();

  const onChangeName = (name: string) => setProduct({ ...product, name: name });

  const onChangePortionPrice = (id: number, price: number) =>
    setProduct({
      ...product,
      portionPrices: produce(product.portionPrices, (draft) => {
        const newPortionPrices = [...draft];
        newPortionPrices[id] = !!price ? price : 0;
        return newPortionPrices;
      }),
    });

  const onChangeCategory = (categoryId: number) => {
    setProduct({ ...product, categoryId });
  };

  const onChangePortionType = (portionTypeId: number) => {
    setProduct({ ...product, portionTypeId, portionPrices: initPortionPrices() });
  };


  const onSave = (p: Product) => {
    saveProduct(mapProductViewModelToApiModel({ ...p, visible: false }), p.categoryId).then(() =>
      history.push(routes.productList),
    );
  };

  const onCancel = () => history.goBack();

  const getProductInfo = async () => {
    if (!!productId) {
      const prod = await getProductById(+productId);
      const prodCategoryId = !!prod ? await getPoductCategoryId(prod.id) : 0;

      !!prod &&
        setProduct({
          ...mapProductApiModelToViewModel(prod),
          categoryId: prodCategoryId,
        });
    }

    const menuCategories = await getMenuCategories();
    setCategories(mapMenuCategoryApiModelsToViewModels(menuCategories));

    const portionTypes = await getProductPortionTypes();
    setPortionTypes(portionTypes);
  };

  const getPortions = (): Array<ProductPortion> =>
    !!product.portionTypeId
      ? mapProductPortionApiModelsToViewModels(
          portionTypes.find((pt) => pt.id === product.portionTypeId)?.portions ?? [],
        )
      : [];

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
        portionTypes={mapProductPortionTypeApiModelsToViewModels(portionTypes)}
        portions={getPortions()}
        product={product}
        onSave={onSave}
        onCancel={onCancel}
        onChangeCategory={onChangeCategory}
        onChangePortionType={onChangePortionType}
        onChangeName={onChangeName}
        onChangePortionPrice={onChangePortionPrice}
      />
    </div>
  );
};
