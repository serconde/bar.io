import React, { FC } from 'react';
import { CenteredLayout } from 'layouts';
import { EditSizesContainer } from 'pods/edit-sizes';

export const ProductSizesScene: FC = () => {
  return (
    <>
      <CenteredLayout>
        <EditSizesContainer />
      </CenteredLayout>
    </>
  );
};
