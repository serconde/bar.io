import { List, ListItem, RootRef } from '@material-ui/core';
import React from 'react';
import { CategoryCardComponent } from './components';
import { MenuCategory } from './menu-category.vm';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import * as classes from './categories-list.styles';

interface CategoriesListComponentProps {
  categories: Array<MenuCategory>;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  onReorder: (startIndex: number, endIndex: number) => void;
}

export const CategoriesListComponent: React.FunctionComponent<CategoriesListComponentProps> = (
  props,
) => {
  const { categories, onEdit, onDelete, onReorder } = props;

  const handleDragEnd = (result) => {
    if (!!result.destination) onReorder(result.source.index, result.destination.index);
    else return;
  };

  return (
    !!categories && (
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId='droppable'>
          {(provided) => (
            <RootRef rootRef={provided.innerRef}>
              <List className={classes.container}>
                {categories.map((c, index) => (
                  <Draggable key={c.id} draggableId={`${c.id}`} index={index}>
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
                          onEdit={onEdit}
                          onDelete={onDelete}
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
    )
  );
};
