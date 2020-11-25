import React from 'react';
import { MenuCategory, RestaurantInfo } from './menu.vm';
import { HeaderComponent, MenuListComponent } from './components';

interface MenuComponentProps {
  restaurantInfo: RestaurantInfo;
  categories: Array<MenuCategory>;
}

export const MenuComponent: React.FunctionComponent<MenuComponentProps> = (props) => {
  const { restaurantInfo, categories } = props;
  return (
    <div>
      <HeaderComponent {...restaurantInfo} />
      <MenuListComponent categories={categories} />
    </div>
  );
};
