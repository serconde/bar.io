import { Card, CardContent, CardHeader } from '@material-ui/core';
import { SortableListComponent } from 'common/components/sortable-list';
import { ListItem } from 'common/components/sortable-list';
import { reorder } from 'common/utils/array';
import React from 'react';
import * as classes from './edit-portions.styles';
import { mapProductPortionsToListItems } from './edit-portions.mapper';
import { deleteProductPortion, getProductPortionTypeById, saveProductPortion } from 'core/api';
import { useParams } from 'react-router-dom';

interface Params {
  typeId: string;
}

export const EditPortionsContainer: React.FunctionComponent = () => {
  const [productPortions, setProductPortions] = React.useState<Array<ListItem>>([]);
  const [editProductPortionId, setEditProductPortionId] = React.useState<number | false>(false);
  const [productPortionType, setProductPortionType] = React.useState<string>('');
  const { typeId } = useParams<Params>();

  const getProductPortionType = async () => {
    const productPortionType = await getProductPortionTypeById(+typeId);
    setProductPortionType(productPortionType.name);
    setProductPortions(mapProductPortionsToListItems(productPortionType.portions));
  };

  React.useEffect(() => {
    async function loadProductPortions() {
      await getProductPortionType();
    }
    loadProductPortions();
  }, []);

  const onReorder = (startIndex, endIndex) =>
    setProductPortions(reorder(productPortions, startIndex, endIndex));

  const onSave = (name: string, id?: number) => {
    setEditProductPortionId(false);
    (async () => await saveProductPortion(name, +typeId, id))();
    (async () => await getProductPortionType())();
  };

  const onEdit = (id: number) => setEditProductPortionId(id);
  const onDelete = (id: number) => {
    (async () => await deleteProductPortion(+typeId, id))();
    (async () => await getProductPortionType())();
  };

  const onCancel = () => setEditProductPortionId(false);
  const onAdd = () => setEditProductPortionId(0);

  return (
    <div className={classes.container}>
      <Card>
        <CardHeader component='h1' title={`Editar ${productPortionType}`} />
        <CardContent>
          <SortableListComponent
            items={productPortions}
            itemTypeName={`${productPortionType}`}
            editItemId={editProductPortionId}
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
