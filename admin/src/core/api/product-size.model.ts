export interface ProductSizeType {
  id: number;
  name: string;
  sizes: Array<ProductSize>;
}

export interface ProductSize {
  id: number;
  name: string;
}
