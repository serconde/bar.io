export interface ProductPortion {
  id: number;
  value: string;
}

export const createEmptyProductPortion = (): ProductPortion => ({
  id: 0,
  value: '',
});
