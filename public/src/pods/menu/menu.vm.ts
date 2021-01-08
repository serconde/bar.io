export interface Menu {
  restaurantInfo: RestaurantInfo;
  categories: Array<MenuCategory>;
}

export interface RestaurantInfo {
  name: string;
  description?: string;
  telephone?: string;
}

export interface MenuCategory {
  name: string;
  products: Array<Product>;
}

export interface Product {
  name: string;
  portions: Array<Portion>;
}

export interface Portion {
  name: string;
  price: string;
}

export const createEmptyMenu = (): Menu => ({
  restaurantInfo: createEmptyRestaurantInfo(),
  categories: [],
});

export const createEmptyRestaurantInfo = (): RestaurantInfo => ({
  name: '',
});
