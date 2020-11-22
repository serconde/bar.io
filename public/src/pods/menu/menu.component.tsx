import React from 'react';
import { MenuCategory, RestaurantInfo } from './menu.vm';
import { HeaderComponent, MenuList } from './components';

interface MenuComponentProps {
  restaurantInfo: RestaurantInfo;
  categories: Array<MenuCategory>;
}

export const MenuComponent: React.FunctionComponent<MenuComponentProps> = (props) => {
  const { restaurantInfo, categories } = props;
  return (
    <div>
      <HeaderComponent {...restaurantInfo} />
      <MenuList categories={categories} />
    </div>
  );
};
