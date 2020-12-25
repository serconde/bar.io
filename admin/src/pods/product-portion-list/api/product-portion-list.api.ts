//VM Api
import { ProductPortion } from './product-portion.api-model';

//Mock
import { mockProductPortionList } from './product-portion-list.mock.data';

export const getProductPortionList = async (): Promise<ProductPortion[]> =>
  new Promise((resolve) => {
    setTimeout(() => {
      // mock call
      resolve(mockProductPortionList);
    }, 500);
  });

export const saveProductPortion = async (producPortion: ProductPortion): Promise<boolean> => {
  //Mock
  console.log(producPortion);
  return true;
};

export const deleteProductPortion = async (id: number): Promise<boolean> => {
  //Mock
  console.log(id);
  return true;
};
