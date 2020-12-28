import React from 'react';

//Api
import * as api from './api';

//VM
import { ProductPortion, createEmptyProductPortion } from './product-portion.vm';

//Mapper
import {
  mapProductPortionListFromApiToVm,
  mapProductPortionFromVmToApi,
} from './product-portion.mapper';

//Component
import { ProductPortionListComponent } from './product-portion.component';

//Method
import { reorder } from 'common/utils/array';

export const ProductPortionListContainer: React.FunctionComponent = () => {
  const [productPortionList, setproductPortionList] = React.useState<ProductPortion[]>([
    createEmptyProductPortion(),
  ]);
  const [editProductPortionId, setEditProductPortionIdId] = React.useState<number | false>(false);

  React.useEffect(() => {
    onLoadProductPortionList();
  }, []);

  const onLoadProductPortionList = async () => {
    api
      .getProductPortionList()
      .then((result) => {
        setproductPortionList(mapProductPortionListFromApiToVm(result));
      })
      .catch((error) => {
        // Snackbar error
        alert('Error to load productPortion list');
      });
  };

  const handleReorder = (startIndex: number, endIndex: number) =>
    setproductPortionList(reorder(productPortionList, startIndex, endIndex));

  const handleSave = (value: string, id: number) => {
    const newproductPortionAPI = mapProductPortionFromVmToApi({ id, value });

    api
      .saveProductPortion(newproductPortionAPI)
      .then((result) => {
        // Snackbar
        alert('Saved productPortion');
        setEditProductPortionIdId(false);
        const index = productPortionList.findIndex((productPortion) => productPortion.id === id);
        if (index !== -1) {
          const newArray = [...productPortionList];
          newArray[index].value = value;
          setproductPortionList(newArray);
        } else {
          setproductPortionList([...productPortionList, { id, value }]);
        }
      })
      .catch((error) => {
        // Snackbar error
        alert('Error to saved productPortion');
      });
  };

  const handleDelete = (id: number) => {
    api
      .deleteProductPortion(id)
      .then((result) => {
        // Snackbar
        alert('Deleted productPortion');
        setEditProductPortionIdId(false);
        const newArray = productPortionList.filter((productPortion) => productPortion.id !== id);
        setproductPortionList(newArray);
      })

      .catch((error) => {
        // Snackbar error
        alert('Error to deleted productPortion');
      });
  };

  const handleEdit = (id: number) => {
    setEditProductPortionIdId(id);
  };

  const handleCancel = () => setEditProductPortionIdId(false);
  const handleAdd = () => setEditProductPortionIdId(0);

  return (
    <ProductPortionListComponent
      listItem={productPortionList}
      editID={editProductPortionId}
      onSave={handleSave}
      onEdit={handleEdit}
      onDelete={handleDelete}
      onCancel={handleCancel}
      onAdd={handleAdd}
      onReorder={handleReorder}
    />
  );
};
