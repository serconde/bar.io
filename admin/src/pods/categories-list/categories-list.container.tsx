import { SortableListComponent } from 'common/components/sortable-list';
import { ListItem } from 'common/components/sortable-list';
import React from 'react';
import { getMenuCategories } from './api';
import { mapCategoriesListApiModelToViewModel } from './categories-list.mapper';

export const CategoriesListContainer: React.FunctionComponent = () => {
  const [categories, setCategories] = React.useState<Array<ListItem>>([]);
  const [editCategoryId, setEditCategoryId] = React.useState<number | false>(false);

  const getCategories = async () => {
    const menuCategories = await getMenuCategories();
    setCategories(mapCategoriesListApiModelToViewModel(menuCategories));
  };

  React.useEffect(() => {
    async function loadCategories() {
      await getCategories();
    }
    loadCategories();
  }, []);

  const reorder = (startIndex, endIndex) => {
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
    <SortableListComponent
      items={categories}
      itemTypeName='categorías'
      editItemId={editCategoryId}
      onSave={onSave}
      onEdit={onEdit}
      onDelete={onDelete}
      onReorder={reorder}
      onCancel={onCancel}
      onAdd={onAdd}
    />
  );
};
