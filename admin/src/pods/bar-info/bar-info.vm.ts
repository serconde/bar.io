export interface BarInfo {
  name: string;
  address: string;
  numberPhone: number;
}

export const createEmptyBarInfo = (): BarInfo => ({
  name: '',
  address: '',
  numberPhone: 0,
});
