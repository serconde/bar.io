import { Button, Card, CardContent, CardHeader, MenuItem } from '@material-ui/core';
import { DropDownComponent, TextFieldComponent } from 'common/components';
import { Field, Form, Formik } from 'formik';
import React, { FunctionComponent } from 'react';
import { formValidation } from './edit-product.validation';
import { MenuCategory } from './menu-category.vm';
import { Product } from './product.vm';

interface EditProductProps {
  categories: Array<MenuCategory>;
  product: Product;
  onSave: (product: Product) => void;
  onChangeCategory: (categoryId: number) => void;
  onCancel: () => void;
}

export const EditProductComponent: FunctionComponent<EditProductProps> = (props) => {
  const { categories, onChangeCategory, product, onSave, onCancel } = props;
  const handleChangeCategory = (e) => onChangeCategory(e.target.value);

  return (
    <Card>
      <CardHeader
        component='h1'
        title={!!product?.id ? `Editar '${product.name}'` : 'Añadir producto'}
      />
      <CardContent>
        <Formik
          enableReinitialize
          onSubmit={onSave}
          initialValues={product}
          validate={formValidation.validateForm}>
          {() => (
            <Form>
              <Field type='hidden' name='id' />
              <Field type='hidden' name='visible' />
              <TextFieldComponent name='name' label='Nombre' />
              <DropDownComponent
                label='Categoría'
                labelId='categoryIdLabel'
                name='categoryId'
                onChange={handleChangeCategory}
                disabled={!!product?.id}
                value={!!categories && !!product.categoryId ? product.categoryId : ''}>
                {categories.map((c) => (
                  <MenuItem key={c.id} value={c.id}>
                    {c.name}
                  </MenuItem>
                ))}
              </DropDownComponent>
              <TextFieldComponent name='price' id='price' label='Precio' type='number' />
              <Button type='submit'>Guardar</Button>
              <Button type='button' onClick={onCancel}>
                Cancelar
              </Button>
            </Form>
          )}
        </Formik>
      </CardContent>
    </Card>
  );
};
