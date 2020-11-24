import React, { FC } from 'react';
import { PartialSpanStyles } from './span-group.vm';
import * as innerSpanGroupStyles from './span-group.styles';
import { cx } from 'emotion';

interface SpanGroupProps {
  numItems?: string | number;
  text: string;
  price: number;
  currency: string;
  classStyle?: PartialSpanStyles;
}

export const SpanGroupComponent: FC<SpanGroupProps> = (props) => {
  const { numItems, text, price, currency, classStyle } = props;
  return (
    <>
      <span
        className={cx(innerSpanGroupStyles.itemsNumber, classStyle.itemsNumber)}
        data-testid='numTest'>
        {numItems} {text}
      </span>
      <span
        className={cx(innerSpanGroupStyles.itemsPrice, classStyle.itemsPrice)}
        data-testid='price'>
        {price}
        <span
          className={cx(innerSpanGroupStyles.currencyStyle, classStyle.currencyStyle)}
          data-testid='currency'>
          {currency}
        </span>
      </span>
    </>
  );
};

SpanGroupComponent.defaultProps = {
  classStyle: {
    currencyStyle: '',
    itemsPrice: '',
    itemsNumber: '',
  },
  numItems: '',
};
