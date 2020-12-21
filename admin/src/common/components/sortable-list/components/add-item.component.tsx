import { IconButton } from '@material-ui/core';
import { AddCircleOutlined } from '@material-ui/icons';
import React from 'react';
import { ItemCardComponent } from './item-card.component';

interface AddItemComponentProps {
  onCancel: () => void;
  onSave: (name: string, id?: number) => void;
  onAdd: () => void;
  isAdding: boolean;
}

export const AddItemComponent: React.FunctionComponent<AddItemComponentProps> = (props) => {
  const { onCancel, onSave, onAdd, isAdding } = props;
  return (
    <>
      <IconButton aria-label='Añadir' onClick={onAdd} disabled={isAdding}>
        <AddCircleOutlined fontSize='large' />
      </IconButton>
      {isAdding && (
        <ItemCardComponent
          id={0}
          value={''}
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
      )}
    </>
  );
};
