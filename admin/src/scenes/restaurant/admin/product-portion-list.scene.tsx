import React, { FC } from 'react';
import { CenteredLayout } from 'layouts';
import { ProductPortionListContainer } from 'pods/product-portion-list';

export const ProductPortionListScene: FC = () => {
  return (
    <>
      <CenteredLayout>
        <ProductPortionListContainer />
      </CenteredLayout>
    </>
  );
};
