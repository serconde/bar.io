import React from 'react';
import { getMenuCategories } from './api';
import { CategoriesListComponent } from './categories-list.component';
import { mapCategoriesListApiModelToViewModel } from './categories-list.mapper';
import { MenuCategory } from './menu-category.vm';

export const CategoriesListContainer: React.FunctionComponent = () => {
  const [categories, setCategories] = React.useState<Array<MenuCategory>>([]);
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
      setCategories(categories.map((c) => (c.id === id ? { ...c, name: name } : c)));
    } else {
      const newId =
        categories
          .map((c) => c.id)
          .reduce((max, current) => (!!!max || current > max ? current : max)) + 1;
      categories.unshift({
        id: newId,
        name: name,
      });
    }
    setEditCategoryId(false);
  };

  const onEdit = (id: number) => setEditCategoryId(id);
  const onDelete = (id: number) => setCategories(categories.filter((c) => c.id !== id));
  const onCancel = () => setEditCategoryId(false);
  const onAdd = () => setEditCategoryId(0);

  return (
    <CategoriesListComponent
      categories={categories}
      editCategoryId={editCategoryId}
      onSave={onSave}
      onEdit={onEdit}
      onDelete={onDelete}
      onReorder={reorder}
      onCancel={onCancel}
      onAdd={onAdd}
    />
  );
};
