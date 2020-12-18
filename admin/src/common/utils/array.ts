import { produce } from 'immer';

export const reorder = (source: Array<any>, startIndex: number, endIndex: number): Array<any> =>
  produce(source, (draft) => {
    const [removed] = draft.splice(startIndex, 1);
    draft.splice(endIndex, 0, removed);
  });
