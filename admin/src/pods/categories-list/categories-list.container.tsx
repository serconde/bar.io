import React from 'react';
import { getMenuCategories } from './api';
import { CategoriesListComponent } from './categories-list.component';
import { mapCategoriesListApiModelToViewModel } from './categories-list.mapper';
import { MenuCategory } from './menu-category.vm';

interface CategoriesListComponentProps {
  categories: Array<MenuCategory>;
}

export const CategoriesListContainer: React.FunctionComponent<CategoriesListComponentProps> = (
  props,
) => {
  const [categories, setCategories] = React.useState<Array<MenuCategory>>([]);

  const getCategories = async () => {
    const menuCategories = await getMenuCategories();
    setCategories(mapCategoriesListApiModelToViewModel(menuCategories));
  };

  React.useEffect( () => {
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

  const onEdit = (id: number) => console.log(`Edit ${id}`);
  const onDelete = (id: number) => console.log(`Delete ${id}`);

  return (
    <CategoriesListComponent
      categories={categories}
      onEdit={onEdit}
      onDelete={onDelete}
      onReorder={reorder}
    />
  );
};
