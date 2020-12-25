import React from 'react';
//Material ui
import { Card, CardContent, CardHeader } from '@material-ui/core';

//Components
import { SortableListComponent } from 'common/components/sortable-list';
import { ListItem } from 'common/components/sortable-list';

//CSS
import * as classes from './product-portion-list.styles';

interface Props {
  listItem: ListItem[];
  editID: number | false;
  onSave: (value: string, id: number) => void;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  onReorder: (start: number, end: number) => void;
  onCancel: () => void;
  onAdd: () => void;
}

export const ProductPortionListComponent: React.FunctionComponent<Props> = (props) => {
  const { listItem, editID, onSave, onEdit, onDelete, onReorder, onCancel, onAdd } = props;
  return (
    <>
      <div className={classes.container}>
        <Card>
          <CardHeader component='h1' title='Raciones' />
          <CardContent>
            <SortableListComponent
              items={listItem}
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
      </div>
    </>
  );
};
