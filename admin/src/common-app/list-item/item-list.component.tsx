import React, { FC, memo } from 'react';
import { ItemListVm } from './item-list.vm';

interface ItemListProps {
  className: string;
  itemMap: ItemListVm[];
}

// eslint-disable-next-line react/display-name
export const ItemListComponent: FC<ItemListProps> = memo((props) => {
  const { className, itemMap } = props;
  return (
    <li className={className}>
      {itemMap.map((item) => (
        <div className={item.className} key={item.name}>
          {item.name}
        </div>
      ))}
    </li>
  );
});
