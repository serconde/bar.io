export interface ListItem {
  id: number;
  value: string;
  visible?: boolean;
}

export const createEmptyListItem = (): ListItem => ({
  id: 0,
  value: '',
});
