import React, { FC } from 'react';
import { CenteredLayout } from 'layouts';
import { EditPortionsContainer } from 'pods/edit-portions';

export const EditPortionsScene: FC = () => {
  return (
    <>
      <CenteredLayout>
        <EditPortionsContainer />
      </CenteredLayout>
    </>
  );
};

