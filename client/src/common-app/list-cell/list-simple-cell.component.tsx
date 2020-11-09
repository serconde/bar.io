import React, { FC, memo } from 'react';
import * as classesStyles from './list-cell.styles';
import { cx } from 'emotion';
import { PartialListSimpleCellVm } from './list-cell.vm';

interface ListCellProps {
  className?: PartialListSimpleCellVm;
  num: number;
  letter: string;
}

// eslint-disable-next-line react/display-name
export const ListSimpleCell: FC<ListCellProps> = memo((props) => {
  const { className, num, letter } = props;
  return (
    <div className={cx(classesStyles.colProduct, className.colProduct)}>
      <span className={cx(classesStyles.unitPrice, className.unitPrice)}>{num}</span>
      <span
        className={cx(
          classesStyles.unitCurrency,
          classesStyles.currency,
          className.unitCurrency,
          className.currency,
        )}>
        {letter}
      </span>
    </div>
  );
});

ListSimpleCell.defaultProps = {
  className: {
    colProduct: classesStyles.colProduct,
    unitPrice: classesStyles.unitPrice,
    unitCurrency: classesStyles.unitCurrency,
    currency: classesStyles.currency,
  },
};
