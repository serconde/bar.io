import React, { FC } from 'react';

import { CenteredLayout } from 'layouts';
import { MenuContainer } from 'pods/menu';

export const MenuScene: FC = () => {
  return (
    <>
      <CenteredLayout>
        <MenuContainer menuId={process.env.MENU_ID} />
      </CenteredLayout>
    </>
  );
};
