import { List, ListItem, RootRef, Typography } from '@material-ui/core';
import React from 'react';
import { AddCategoryComponent, CategoryCardComponent } from './components';
import { MenuCategory } from './menu-category.vm';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import * as classes from './categories-list.styles';

interface CategoriesListComponentProps {
  categories: Array<MenuCategory>;
  editCategoryId: number | boolean;
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
  onSave: (id: number, name: string) => void;
  onAdd: () => void;
  onCancel: () => void;
  onReorder: (startIndex: number, endIndex: number) => void;
}

export const CategoriesListComponent: React.FunctionComponent<CategoriesListComponentProps> = (
  props,
) => {
  const {
    categories,
    editCategoryId,
    onSave,
    onCancel,
    onEdit,
    onDelete,
    onReorder,
    onAdd,
  } = props;

  const handleDragEnd = (result) => {
    if (!!result.destination) onReorder(result.source.index, result.destination.index);
    else return;
  };

  return (
    <div className={classes.container}>
      <AddCategoryComponent
        isAdding={editCategoryId === 0}
        onAdd={onAdd}
        onSave={onSave}
        onCancel={onCancel}
      />
      {!!categories && categories.length > 0 ? (
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId='droppable'>
            {(provided) => (
              <RootRef rootRef={provided.innerRef}>
                <List className={classes.container}>
                  {categories.map((c, index) => (
                    <Draggable
                      isDragDisabled={editCategoryId !== false}
                      key={c.id}
                      draggableId={`${c.id}`}
                      index={index}>
                      {(provided) => (
                        <ListItem
                          className={classes.item}
                          ref={provided.innerRef}
                          ContainerComponent='li'
                          ContainerProps={{ ref: provided.innerRef }}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}>
                          <CategoryCardComponent
                            id={c.id}
                            name={c.name}
                            edit={editCategoryId === c.id}
                            onEdit={onEdit}
                            onDelete={onDelete}
                            onCancel={onCancel}
                            onSave={onSave}
                          />
                        </ListItem>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </List>
              </RootRef>
            )}
          </Droppable>
        </DragDropContext>
      ) : (
        <Typography align='center'>No existen categorías</Typography>
      )}
    </div>
  );
};
