import React, { FC, memo } from 'react';
import { cx } from 'emotion';
import * as innerClasses from './item-list.styles';

interface ItemListCustomProps {
  classStyleList?: string;
}
// eslint-disable-next-line react/display-name
export const ItemListCustomComponent: FC<ItemListCustomProps> = memo((props) => {
  const { classStyleList, children } = props;
  return <li className={cx(innerClasses.row, classStyleList)}>{children}</li>;
});

ItemListCustomComponent.defaultProps = {
  classStyleList: '',
};
