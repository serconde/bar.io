import { MenuCategory, Product } from 'core/api';
import { ListItem } from 'common/components/sortable-list/list-item.vm';
import { createEmptyListItem } from 'common/components/sortable-list/list-item.vm';
import { formatToEuro } from 'common/utils';

export const mapMenuCategoriesToListItems = (categories: Array<MenuCategory>): Array<ListItem> =>
  !!categories ? categories.map((c) => mapMenuCategoryToListItem(c)) : [];

export const mapMenuCategoryToListItem = (menuCategory: MenuCategory): ListItem =>
  !!menuCategory ? { id: menuCategory.id, value: menuCategory.name } : createEmptyListItem();

export const mapProductsToListItems = (products: Array<Product>): Array<ListItem> =>
  !!products ? products.map((d) => mapProductToListItem(d)) : [];

export const mapProductToListItem = (product: Product): ListItem =>
  !!product
    ? {
        id: product.id,
        value: `${product.name}\n(${formatToEuro(product.price)})`,
        visible: product.visible,
      }
    : { ...createEmptyListItem(), visible: true };
