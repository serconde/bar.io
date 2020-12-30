export interface Product {
  id: number;
  categoryId: number;
  name: string;
  portionTypeId: number;
  portionPrices: Array<number>;
  visible: boolean;
}

export const initPortionPrices =  () => new Array<number>(20).fill(0);