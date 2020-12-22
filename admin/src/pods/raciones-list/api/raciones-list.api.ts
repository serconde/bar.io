//VM Api
import { Racion } from './racion.api-model';

//Mock
import { mockRacionesList } from './raciones-list.mock.data';

export const getRacionesList = async (): Promise<Racion[]> =>
  new Promise((resolve) => {
    setTimeout(() => {
      // mock call
      resolve(mockRacionesList);
    }, 500);
  });

export const saveRacion = async (racion: Racion): Promise<boolean> => {
  //Mock
  console.log(racion);
  return true;
};

export const deleteRacion = async (id: number): Promise<boolean> => {
  //Mock
  console.log(id);
  return true;
};
