import React from 'react';

import * as classes from './app.layout.styles';

export const AppLayout: React.FC = ({ children }) => {
  return <div className={classes.root}>{children}</div>;
};
