import React, { FC } from 'react';
import { CenteredLayout } from 'layouts';
import { EditProductContainer } from 'pods/edit-product/edit-product.container';

export const EditProductScene: FC = () => {
  return (
    <>
      <CenteredLayout>
        <EditProductContainer />
      </CenteredLayout>
    </>
  );
};
