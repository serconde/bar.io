export interface ProductPortionType {
  id: number;
  name: string;
  portions: Array<ProductPortion>;
}

export interface ProductPortion {
  id: number;
  name: string;
}
