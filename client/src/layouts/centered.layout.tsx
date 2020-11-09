import React, { FC } from 'react';
import * as classes from './centered.layout.styles';

export const CenteredLayout: FC = (props) => {
  const { children } = props;
  return <div className={classes.root}>{children}</div>;
};
