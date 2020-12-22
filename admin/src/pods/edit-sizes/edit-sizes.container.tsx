import { Card, CardContent, CardHeader } from '@material-ui/core';
import { SortableListComponent } from 'common/components/sortable-list';
import { ListItem } from 'common/components/sortable-list';
import { reorder } from 'common/utils/array';
import React from 'react';
import * as classes from './edit-sizes.styles';
import { mapProductSizesToListItems } from './edit-sizes.mapper';
import { deleteProductSize, getProductSizeTypeById, saveProductSize } from 'core/api';
import { useParams } from 'react-router-dom';

interface Params {
  typeId: string;
}

export const EditSizesContainer: React.FunctionComponent = () => {
  const [productSizes, setProductSizes] = React.useState<Array<ListItem>>([]);
  const [editProductSizeId, setEditProductSizeId] = React.useState<number | false>(false);
  const [productSizeType, setProductSizeType] = React.useState<string>('');
  const { typeId } = useParams<Params>();

  const getProductSizeType = async () => {
    const productSizeType = await getProductSizeTypeById(+typeId);
    setProductSizeType(productSizeType.name);
    setProductSizes(mapProductSizesToListItems(productSizeType.sizes));
  };

  React.useEffect(() => {
    async function loadProductSizes() {
      await getProductSizeType();
    }
    loadProductSizes();
  }, []);

  const onReorder = (startIndex, endIndex) =>
    setProductSizes(reorder(productSizes, startIndex, endIndex));

  const onSave = (name: string, id?: number) => {
    setEditProductSizeId(false);
    (async () => await saveProductSize(name, +typeId, id))();
    (async () => await getProductSizeType())();
  };

  const onEdit = (id: number) => setEditProductSizeId(id);
  const onDelete = (id: number) => {
    (async () => await deleteProductSize(+typeId, id))();
    (async () => await getProductSizeType())();
  };

  const onCancel = () => setEditProductSizeId(false);
  const onAdd = () => setEditProductSizeId(0);

  return (
    <div className={classes.container}>
      <Card>
        <CardHeader component='h1' title={`Editar ${productSizeType}`} />
        <CardContent>
          <SortableListComponent
            items={productSizes}
            itemTypeName={`${productSizeType}`}
            editItemId={editProductSizeId}
            onSave={onSave}
            onEdit={onEdit}
            onDelete={onDelete}
            onReorder={onReorder}
            onCancel={onCancel}
            onAdd={onAdd}
          />
        </CardContent>
      </Card>
    </div>
  );
};
