//VM Api
import { BarInfo } from './bar-info.api-model';

//Mock
import { mockBarInfo } from './bar-info.mock.data';

export const getBarInfo = async (): Promise<BarInfo> =>
  new Promise((resolve) => {
    setTimeout(() => {
      // mock call
      resolve(mockBarInfo);
    }, 500);
  });

export const saveBarInfo = async (barInfo: BarInfo): Promise<boolean> => {
  //Mock
  console.log(barInfo);
  return true;
};
