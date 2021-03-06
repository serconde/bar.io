import { ListItem, SortableListComponent } from 'common/components';
import React from 'react';
import { Card, CardContent, CardHeader, InputLabel, MenuItem, Select } from '@material-ui/core';

interface ProductListComponentProps {
  selectedCategoryId: number;
  categories: Array<ListItem>;
  products: Array<ListItem>;
  onChangeCategory: (id: number) => void;
  onEditProduct: (id: number) => void;
  onDeleteProduct: (id: number) => void;
  onChangeProductVisibility: (id: number) => void;
  onReorderProducts: (startIndex: number, endIndex: number) => void;
  onAddProduct: () => void;
  onCancelProductEdit: () => void;
}

export const ProductListComponent: React.FunctionComponent<ProductListComponentProps> = (props) => {
  const {
    selectedCategoryId,
    categories,
    products,
    onChangeCategory,
    onEditProduct,
    onDeleteProduct,
    onChangeProductVisibility,
    onReorderProducts,
    onAddProduct,
    onCancelProductEdit,
  } = props;
  const handleChangeCategory = (e: React.ChangeEvent<{ value: number }>) =>
    onChangeCategory(e.target.value);

  return (
    <Card>
      <CardHeader component='h1' title='Productos' />
      <CardContent>
        <InputLabel id='categorySelectLabel'>Seleccione una categoría</InputLabel>
        <Select
          labelId='categorySelectLabel'
          id='selectCategory'
          value={!!selectedCategoryId ? selectedCategoryId : ''}
          onChange={handleChangeCategory}
          fullWidth>
          {categories.map((c) => (
            <MenuItem key={c.id} value={c.id} selected={selectedCategoryId === c.id}>
              {c.value}
            </MenuItem>
          ))}
        </Select>

        <br></br>
        <br></br>
        {!!selectedCategoryId && (
          <SortableListComponent
            itemTypeName='productos'
            items={products}
            onEdit={onEditProduct}
            onDelete={onDeleteProduct}
            onChangeVisibility={onChangeProductVisibility}
            onReorder={onReorderProducts}
            onAdd={onAddProduct}
            onCancel={onCancelProductEdit}
          />
        )}
      </CardContent>
    </Card>
  );
};
