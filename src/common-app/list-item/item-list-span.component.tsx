import React, { FC } from 'react';
import { ItemListSpan } from './item-list.vm';
import { PartialSpanStyles, SpanGroupComponent } from '../span-group';

interface ItemListSpanProps {
  itemMap: ItemListSpan[];
  className?: string;
  classStyle?: PartialSpanStyles;
}

export const ItemListSpanComponent: FC<ItemListSpanProps> = (props) => {
  const { className, itemMap, classStyle } = props;
  return (
    <>
      {itemMap.map(
        (item: ItemListSpan) =>
          item.discount > 0 && (
            <li className={className} key={item.off}>
              <SpanGroupComponent
                currency={'$'}
                price={item.negDiscount}
                text={item.off}
                key={item.off}
                classStyle={classStyle}
              />
            </li>
          ),
      )}
    </>
  );
};

ItemListSpanComponent.defaultProps = {
  className: '',
};
