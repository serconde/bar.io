import React, { FC } from 'react';
import { CenteredLayout } from 'layouts';
import { CategoriesListContainer } from 'pods/categories-list/categories-list.container';
import { MenuCategory } from 'pods/categories-list/menu-category.vm';

const categories: Array<MenuCategory> = [
  { id: 1, name: 'Entrantes' },
  { id: 2, name: 'Primeros' },
  { id: 3, name: 'Segundos' },
  { id: 4, name: 'Postres' },
  { id: 5, name: 'Bebidas' },
];

export const CategoriesListScene: FC = () => {
  return (
    <>
      <CenteredLayout>
        <CategoriesListContainer categories={categories} />
      </CenteredLayout>
    </>
  );
};
