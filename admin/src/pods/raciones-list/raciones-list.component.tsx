import React from 'react';

interface Props {
  raciones: ListItem[];
  editID: number | false;
  onSave: (value: string, id: number) => void;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  onReorder: (start: number, end: number) => void;
  onCancel: () => void;
  onAdd: () => void;
}

//Material ui
import { Card, CardContent, CardHeader } from '@material-ui/core';

//Components
import { SortableListComponent } from 'common/components/sortable-list';
import { ListItem } from 'common/components/sortable-list';

export const RacionesListComponent: React.FunctionComponent<Props> = (props) => {
  const { raciones, editID, onSave, onEdit, onDelete, onReorder, onCancel, onAdd } = props;
  return (
    <>
      <Card>
        <CardHeader component='h1' title='Raciones' />
        <CardContent>
          <SortableListComponent
            items={raciones}
            itemTypeName='raciones'
            editItemId={editID}
            onSave={onSave}
            onEdit={onEdit}
            onDelete={onDelete}
            onReorder={onReorder}
            onCancel={onCancel}
            onAdd={onAdd}
          />
        </CardContent>
      </Card>
    </>
  );
};
