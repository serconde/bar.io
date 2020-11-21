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
  dishes: Array<Dish>;
}

export interface Dish {
  name: string;
  price: number;
}
