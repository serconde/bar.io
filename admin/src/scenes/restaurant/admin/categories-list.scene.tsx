import React, { FC } from 'react';
import { CenteredLayout } from 'layouts';
import { CategoriesListContainer } from 'pods/categories-list/categories-list.container';

export const CategoriesListScene: FC = () => {
  return (
    <>
      <CenteredLayout>
        <CategoriesListContainer />
      </CenteredLayout>
    </>
  );
};
