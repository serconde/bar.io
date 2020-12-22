import {
  Card,
  CardActions,
  CardContent,
  IconButton,
  TextField,
  Typography,
} from '@material-ui/core';
import { Clear, Create, Delete, SaveAlt, Visibility, VisibilityOff } from '@material-ui/icons';
import React from 'react';
import * as classes from './item-card.styles';

interface ItemCardComponentProps {
  id?: number;
  visible?: boolean;
  value: string;
  edit: boolean;
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
  onSave?: (value: string, id?: number) => void;
  onCancel?: () => void;
  onChangeVisibility?: (id: number) => void;
}

export const ItemCardComponent: React.FunctionComponent<ItemCardComponentProps> = (props) => {
  const minValueLength = 4;
  const {
    id,
    value,
    visible,
    edit,
    onDelete,
    onEdit,
    onSave,
    onCancel,
    onChangeVisibility,
  } = props;
  const [itemValue, itesetItemValue] = React.useState<string>(value);
  const [disableSave, setDisableSave] = React.useState<boolean>(false);
  const handleClickEdit = () => onEdit(id);
  const handleClickDelete = () => onDelete(id);
  const handleClickSave = () => {
    onSave(itemValue.trim(), id);
    itesetItemValue(itemValue.trim());
  };
  const handleClickCancel = () => {
    itesetItemValue(value);
    onCancel();
  };
  const handleValueChange = (e) => {
    const newItemName = e.target.value;
    if (newItemName.trim().length === 0 || newItemName.length < minValueLength)
      setDisableSave(true);
    else if (newItemName.length >= minValueLength) setDisableSave(false);
    itesetItemValue(newItemName);
  };
  const handleChangeVisibility = () => onChangeVisibility(id);

  return (
    id !== null &&
    id !== undefined &&
    value !== null &&
    value !== undefined && (
      <Card className={classes.container}>
        <CardContent className={classes.card}>
          {edit ? (
            <TextField name='itemValue' value={itemValue} onChange={handleValueChange} />
          ) : (
            <Typography>{value}</Typography>
          )}
        </CardContent>
        <CardActions disableSpacing>
          {edit ? (
            <IconButton aria-label='Guardar' onClick={handleClickSave} disabled={disableSave}>
              <SaveAlt />
            </IconButton>
          ) : (
            <IconButton aria-label={`Editar ${value}`} onClick={handleClickEdit}>
              <Create />
            </IconButton>
          )}
          {visible !== undefined && !!!edit && (
            <IconButton
              aria-label={`Hacer ${visible ? 'invisible' : 'visible'} ${value}`}
              onClick={handleChangeVisibility}>
              {visible ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          )}
          {edit ? (
            <IconButton aria-label='Cancelar' onClick={handleClickCancel}>
              <Clear />
            </IconButton>
          ) : (
            <IconButton aria-label={`Borrar ${value}`} onClick={handleClickDelete}>
              <Delete />
            </IconButton>
          )}
        </CardActions>
      </Card>
    )
  );
};
