import { List, ListItem } from '@material-ui/core';
import React from 'react';
import { Product } from '../menu.vm';
import * as classes from './menu-list.styles';

interface SubmenuCategoryComponentProps {
  products: Array<Product>;
}

export const SubmenuCategoryComponent: React.FunctionComponent<SubmenuCategoryComponentProps> = ({
  products,
}) => (
  <List component='div' className={classes.category}>
    {!!products &&
      products.map((product) => (
        <ListItem key={`product-${product.id}`} aria-label={`${product.name} ${product.price}`} button>
          <div className={classes.name}>{product.name}</div>
          <div className={classes.price}>{product.price}</div>
        </ListItem>
      ))}
  </List>
);
