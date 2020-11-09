import React from 'react';

import { InitComponent } from './init.component';
import { AppLayout } from 'layouts';

export const InitContainer = () => {
  return (
    <AppLayout>
      <InitComponent name={'Bar.io'} />
    </AppLayout>
  );
};
