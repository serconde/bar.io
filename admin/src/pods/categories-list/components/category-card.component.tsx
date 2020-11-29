import { Card, CardActions, CardContent, IconButton, Typography } from '@material-ui/core';
import { Create, Delete } from '@material-ui/icons';
import React from 'react';
import * as classes from './category-card.styles';

interface CategoryCardComponentProps {
  id: number;
  name: string;
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
}

export const CategoryCardComponent: React.FunctionComponent<CategoryCardComponentProps> = (
  props,
) => {
  const { id, name, onDelete, onEdit } = props;
  const handleClickEdit = () => onEdit(id);
  const handleClickDelete = () => onDelete(id);

  return (
    !!id &&
    !!name && (
      <Card className={classes.container}>
        <CardContent className={classes.categoryName}>
          <Typography>{name}</Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label={`Editar ${name}`} onClick={handleClickEdit}>
            <Create />
          </IconButton>
          <IconButton aria-label={`Borrar ${name}`} onClick={handleClickDelete}>
            <Delete />
          </IconButton>
        </CardActions>
      </Card>
    )
  );
};
