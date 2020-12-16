export interface BarInfo {
  infoA: string;
  infoB: string;
  infoC: string;
}

export const createEmptyBarInfo = (): BarInfo => ({
  infoA: '',
  infoB: '',
  infoC: '',
});
