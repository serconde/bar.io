import React, { FC, memo } from 'react';
import * as classesStyles from './list-cell.styles';
import { cx } from 'emotion';
import { TitleComponent } from '../title/title.component';
import { PartialListCellVm } from './list-cell.vm';
import notFoundImage from 'assets/notFoundImage.png';

interface ListCellProps {
  className?: PartialListCellVm;
  image: string;
  name: string;
  code: string;
  onChangeModalState?: (value: number) => void;
  index: number;
}
// eslint-disable-next-line react/display-name
export const ListCell: FC<ListCellProps> = memo((props) => {
  const { className, image, name, code, onChangeModalState, index } = props;
  const img = image !== '' ? image : notFoundImage;

  return (
    <div
      className={cx(classesStyles.colProduct, className.colProduct)}
      onClick={() => onChangeModalState(index)}>
      <figure className={cx(classesStyles.productImage, className.productImage)}>
        <img src={img} alt={name} />
        <div className={cx(classesStyles.productDescription, className.productDescription)}>
          <TitleComponent variant={'h1'}> {name}</TitleComponent>
          <p className={cx(classesStyles.productCode, className.productCode)}>
            Product code {code}
          </p>
        </div>
      </figure>
    </div>
  );
});

ListCell.defaultProps = {
  onChangeModalState: () => undefined,
  className: {
    productImage: '',
    productDescription: '',
    productCode: '',
    colProduct: '',
  },
};
