import { IconButton } from '@material-ui/core';
import { AddCircleOutlined } from '@material-ui/icons';
import React from 'react';
import { CategoryCardComponent } from '.';
import * as classes from './add-category.styles';

interface AddCategoryComponentProps {
  onCancel: () => void;
  onSave: (id: number, name: string) => void;
  onAdd: () => void;
  isAdding: boolean;
}

export const AddCategoryComponent: React.FunctionComponent<AddCategoryComponentProps> = (props) => {
  const { onCancel, onSave, onAdd, isAdding } = props;
  return (
    <>
      <IconButton aria-label='Añadir categoría' onClick={onAdd} disabled={isAdding}>
        <AddCircleOutlined fontSize='large' />
      </IconButton>
      {isAdding && (
        <div className={classes.addCard}>
          <CategoryCardComponent
            id={0}
            name={''}
            edit={true}
            onEdit={() => {
              return;
            }}
            onDelete={() => {
              return;
            }}
            onCancel={onCancel}
            onSave={onSave}
          />
        </div>
      )}
    </>
  );
};
