export interface Racion {
  id: number;
  value: string;
}

export const createEmptyRacion = (): Racion => ({
  id: 0,
  value: '',
});
