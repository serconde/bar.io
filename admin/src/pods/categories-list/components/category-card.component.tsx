import {
  Card,
  CardActions,
  CardContent,
  IconButton,
  TextField,
  Typography,
} from '@material-ui/core';
import { Clear, Create, Delete, SaveAlt } from '@material-ui/icons';
import React from 'react';
import * as classes from './category-card.styles';

interface CategoryCardComponentProps {
  id: number;
  name: string;
  edit: boolean;
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
  onSave: (id: number, name: string) => void;
  onCancel: () => void;
}

export const CategoryCardComponent: React.FunctionComponent<CategoryCardComponentProps> = (
  props,
) => {
  const minCategoryLength = 3;
  const { id, name, edit, onDelete, onEdit, onSave, onCancel } = props;
  const [categoryName, setCategoryName] = React.useState<string>(name);
  const [disableSave, setDisableSave] = React.useState<boolean>(false);
  const handleClickEdit = () => onEdit(id);
  const handleClickDelete = () => onDelete(id);
  const handleClickSave = () => {
    onSave(id, categoryName.trim());
    setCategoryName(categoryName.trim());
  };
  const handleClickCancel = () => {
    setCategoryName(name);
    onCancel();
  };
  const handleNameChange = (e) => {
    const newCategoryName = e.target.value;
    if (newCategoryName.trim().length === 0 || newCategoryName.length < minCategoryLength)
      setDisableSave(true);
    else if (newCategoryName.length >= minCategoryLength) setDisableSave(false);
    setCategoryName(newCategoryName);
  };

  return (
    id !== null &&
    id !== undefined &&
    name !== null &&
    name !== undefined && (
      <Card className={classes.container}>
        <CardContent className={classes.categoryName}>
          {edit ? (
            <TextField name='categoryName' value={categoryName} onChange={handleNameChange} />
          ) : (
            <Typography>{name}</Typography>
          )}
        </CardContent>
        <CardActions disableSpacing>
          {edit ? (
            <IconButton
              aria-label='Guardar categoría'
              onClick={handleClickSave}
              disabled={disableSave}>
              <SaveAlt />
            </IconButton>
          ) : (
            <IconButton aria-label={`Editar ${name}`} onClick={handleClickEdit}>
              <Create />
            </IconButton>
          )}
          {edit ? (
            <IconButton aria-label='Cancelar' onClick={handleClickCancel}>
              <Clear />
            </IconButton>
          ) : (
            <IconButton aria-label={`Borrar ${name}`} onClick={handleClickDelete}>
              <Delete />
            </IconButton>
          )}
        </CardActions>
      </Card>
    )
  );
};
