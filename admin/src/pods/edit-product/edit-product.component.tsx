import { Button, Card, CardContent, CardHeader, MenuItem } from '@material-ui/core';
import { DropDownComponent, TextFieldComponent } from 'common/components';
import { Field, Form, Formik } from 'formik';
import React, { FunctionComponent } from 'react';
import { formValidation } from './edit-product.validation';
import { MenuCategory } from './menu-category.vm';
import { ProductPortion, ProductPortionType } from './product-portion.vm';
import { Product } from './product.vm';

interface EditProductProps {
  categories: Array<MenuCategory>;
  portionTypes: Array<ProductPortionType>;
  portions: Array<ProductPortion>;
  product: Product;
  onSave: (product: Product) => void;
  onChangeName: (name: string) => void;
  onChangePortionPrice: (portionId: number, price: number) => void;
  onChangeCategory: (categoryId: number) => void;
  onChangePortionType: (portionTypeId: number) => void;
  onCancel: () => void;
}

export const EditProductComponent: FunctionComponent<EditProductProps> = (props) => {
  const {
    categories,
    portionTypes,
    product,
    portions,
    onChangeName,
    onChangePortionPrice,
    onChangeCategory,
    onChangePortionType,
    onSave,
    onCancel,
  } = props;
  const handleChangeCategory = (e) => onChangeCategory(e.target.value);
  const handlePortionTypeChange = (e) => onChangePortionType(e.target.value);
  const handleChangeName = (e) => onChangeName(e.target.value);
  const handleChangePortionPrice = (e) =>
    onChangePortionPrice(e.target.getAttribute('name').split(/[\[\]]/)[1], e.target.value);

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
              <TextFieldComponent name='name' label='Nombre' onKeyUp={handleChangeName} />
              <DropDownComponent
                label='Categoría'
                labelId='categoryIdLabel'
                name='categoryId'
                onChange={handleChangeCategory}
                disabled={!!product?.id}
                value={!!categories && !!product.categoryId ? product.categoryId ?? '' : ''}>
                {categories.map((c) => (
                  <MenuItem key={`category-${c.id}`} value={c.id}>
                    {c.name}
                  </MenuItem>
                ))}
              </DropDownComponent>
              <DropDownComponent
                label='Ración'
                labelId='portionTypeIdLabel'
                name='portionTypeId'
                onChange={handlePortionTypeChange}
                value={!!portionTypes && !!product.portionTypeId ? product.portionTypeId : ''}>
                {!!portionTypes ? (
                  portionTypes.map((t) => (
                    <MenuItem key={`portionType-${t.id}`} value={t.id}>
                      {t.name}
                    </MenuItem>
                  ))
                ) : (
                  <MenuItem key='portionType-0' value='0'>
                    Única
                  </MenuItem>
                )}
              </DropDownComponent>
              {!!portions &&
                portions.map((p) => (
                  <TextFieldComponent
                    key={`portionPrices[${p.id}]`}
                    name={`portionPrices[${p.id}]`}
                    label={`Precio - ${p.name}`}
                    type='number'
                    onKeyUp={handleChangePortionPrice}
                  />
                ))}
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
