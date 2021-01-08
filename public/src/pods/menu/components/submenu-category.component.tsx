import { Card, CardContent, CardHeader, List, ListItem } from '@material-ui/core';
import React from 'react';
import { Product } from '../menu.vm';
import * as classes from './submenu-category.styles';
import { ProductComponent } from './product.component';

interface SubmenuCategoryComponentProps {
  categoryIndex: number;
  products: Array<Product>;
}

export const SubmenuCategoryComponent: React.FunctionComponent<SubmenuCategoryComponentProps> = ({
  categoryIndex,
  products,
}) => (
  <List component='ul' className={classes.container}>
    {!!products &&
      products.filter(p => !!p.portions).map((product, index) => (
        <ListItem
          key={`product-${categoryIndex}-${index}`}
          id={`product-${categoryIndex}-${index}`}
          aria-label={`${product.name}`}
          component='li'>
            <ProductComponent productIndex={`${categoryIndex}-${index}`} product={product} />
        </ListItem>
      ))}
  </List>
);
