import React, { FC } from 'react';
import { CenteredLayout } from 'layouts';
import { BarInfoContainer } from 'pods/bar-info';

export const BarInfoScene: FC = () => {
  return (
    <>
      <CenteredLayout>
        <BarInfoContainer />
      </CenteredLayout>
    </>
  );
};
