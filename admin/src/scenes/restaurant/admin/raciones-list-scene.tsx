import React, { FC } from 'react';
import { CenteredLayout } from 'layouts';
import { RacionesListContainer } from 'pods/raciones-list/raciones-list.container';

export const RacionesListScene: FC = () => {
  return (
    <>
      <CenteredLayout>
        <RacionesListContainer />
      </CenteredLayout>
    </>
  );
};
