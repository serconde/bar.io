import React, { FC } from 'react';
import { CenteredLayout } from 'layouts';
import { ProductListContainer } from 'pods/product-list';

export const ProductListScene: FC = () => {
  return (
    <>
      <CenteredLayout>
        <ProductListContainer />
      </CenteredLayout>
    </>
  );
};
