import { ProductSize } from 'core/api';
import { ListItem } from 'common/components/sortable-list/list-item.vm';
import { createEmptyListItem } from 'common/components/sortable-list/list-item.vm';

export const mapProductSizesToListItems = (productSizes: Array<ProductSize>): Array<ListItem> =>
  !!productSizes ? productSizes.map((ps) => mapProductSizeToListItem(ps)) : [];

export const mapProductSizeToListItem = (productSize: ProductSize): ListItem =>
  !!productSize ? { id: productSize.id, value: productSize.name } : createEmptyListItem();
