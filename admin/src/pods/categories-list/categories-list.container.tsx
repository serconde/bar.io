import { Card, CardContent, CardHeader } from '@material-ui/core';
import { SortableListComponent } from 'common/components/sortable-list';
import { ListItem } from 'common/components/sortable-list';
import { reorder } from 'common/utils/array';
import React from 'react';
import { deleteCategory, getMenuCategories, saveCategory } from 'core/api';
import { mapMenuCategoriesToListItems } from './categories-list.mapper';
import * as classes from './categories-list.styles';

export const CategoriesListContainer: React.FunctionComponent = () => {
  const [categories, setCategories] = React.useState<Array<ListItem>>([]);
  const [editCategoryId, setEditCategoryId] = React.useState<number | false>(false);

  const getCategories = async () => {
    const menuCategories = await getMenuCategories();
    setCategories(mapMenuCategoriesToListItems(menuCategories));
  };

  React.useEffect(() => {
    async function loadCategories() {
      await getCategories();
    }
    loadCategories();
  }, []);

  const onReorder = (startIndex, endIndex) =>
    setCategories(reorder(categories, startIndex, endIndex));

  const onSave = (name: string, id?: number) => {
    setEditCategoryId(false);
    (async () => await saveCategory(name, id))();
    (async () => await getCategories())();
  };

  const onEdit = (id: number) => setEditCategoryId(id);
  const onDelete = (id: number) => {
    (async () => await deleteCategory(id))();
    (async () => await getCategories())();
  };

  const onCancel = () => setEditCategoryId(false);
  const onAdd = () => setEditCategoryId(0);

  return (
    <div className={classes.container}>
      <Card>
        <CardHeader component='h1' title='Categorías' />
        <CardContent>
          <SortableListComponent
            items={categories}
            itemTypeName='categorías'
            editItemId={editCategoryId}
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
