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
  id: number;
  name: string;
  price: number;
}
