import React, { FC } from 'react';
import { CenteredLayout } from 'layouts';
import { MenuContainer } from 'pods/menu';

export const DashboardScene: FC = () => {
  return (
    <>
      <CenteredLayout>
        <MenuContainer />
      </CenteredLayout>
    </>
  );
};
