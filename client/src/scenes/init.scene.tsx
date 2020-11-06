import React, { FC } from 'react';

import { CenteredLayout } from 'layouts';
import { InitContainer } from 'pods/init';

export const InitScene: FC = () => {
  return (
    <>
      <CenteredLayout>
        <InitContainer />
      </CenteredLayout>
    </>
  );
};
