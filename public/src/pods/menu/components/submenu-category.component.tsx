import { List, ListItem } from '@material-ui/core';
import React from 'react';
import { Dish } from '../menu.vm';
import * as classes from './menu-list.styles';

interface SubmenuCategoryComponentProps {
  dishes: Array<Dish>;
}

export const SubmenuCategoryComponent: React.FunctionComponent<SubmenuCategoryComponentProps> = ({
  dishes,
}) => (
  <List component='div' className={classes.category}>
    {!!dishes &&
      dishes.map((dish) => (
        <ListItem key={`dish-${dish.id}`} aria-label={`${dish.name} ${dish.price}`} button>
          <div className={classes.name}>{dish.name}</div>
          <div className={classes.price}>{dish.price}</div>
        </ListItem>
      ))}
  </List>
);
