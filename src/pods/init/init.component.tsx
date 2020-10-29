import React, { FC } from 'react';
import { TitleComponent } from '../../common-app/title/title.component';

interface InitProps {
  name: string;
}
export const InitComponent: FC<InitProps> = (props) => {
  const { name } = props;
  return (
    <>
      <TitleComponent variant='h3'>Wellcome to {name}</TitleComponent>
    </>
  );
};
