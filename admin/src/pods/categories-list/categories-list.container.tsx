import { Typography } from '@material-ui/core';
import { SortableListComponent } from 'common/components/sortable-list';
import { ListItem } from 'common/components/sortable-list';
import React from 'react';
import { getMenuCategories } from '../../core/api';
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

  const onReorder = (startIndex, endIndex) => {
    const result = Array.from(categories);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    setCategories(result);
  };

  const onSave = (id: number, name: string) => {
    if (id !== 0) {
      setCategories(categories.map((c) => (c.id === id ? { ...c, value: name } : c)));
    } else {
      const newId =
        categories
          .map((c) => c.id)
          .reduce((max, current) => (!!!max || current > max ? current : max)) + 1;
      categories.unshift({
        id: newId,
        value: name,
      });
    }
    setEditCategoryId(false);
  };

  const onEdit = (id: number) => setEditCategoryId(id);
  const onDelete = (id: number) => setCategories(categories.filter((c) => c.id !== id));
  const onCancel = () => setEditCategoryId(false);
  const onAdd = () => setEditCategoryId(0);

  return (
    <div className={classes.container}>
      <Typography>
        <h1>Categorías</h1>
      </Typography>
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
    </div>
  );
};
