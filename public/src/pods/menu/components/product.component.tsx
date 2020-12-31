import { Card, CardContent } from '@material-ui/core';
import React from 'react';
import { Product } from '../menu.vm';
import * as classes from './product.styles';

interface ProductComponentProps {
  productIndex: string;
  product: Product;
}

export const ProductComponent: React.FunctionComponent<ProductComponentProps> = (props) => {
  const { productIndex, product } = props;
  return (
    <Card className={classes.container}>
      {product.portions.length > 1 ? (
        <>
          <CardContent>
            <div>
              <strong>{product.name}</strong>
            </div>
            {product?.portions.map((p, index) => (
              <div key={`portion-${productIndex}-${index}`} className={classes.product}>
                <div className={classes.portion}>{p.name}</div>
                <div className={classes.price}>{p.price}</div>
              </div>
            ))}
          </CardContent>
        </>
      ) : (
        <CardContent>
          <div className={classes.product}>
            <div className={classes.portion}>
              <strong>{product.name}</strong>
            </div>
            <div className={classes.price}>{product.portions[0].price}</div>
          </div>
        </CardContent>
      )}
    </Card>
  );
};
