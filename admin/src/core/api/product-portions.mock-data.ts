import { ProductPortionType } from './product-portion.model';

export const mockedProductPortionTypes: Array<ProductPortionType> = [
  { id: 1, name: 'Única', portions: [{ id: 1, name: 'Única' }] },
  {
    id: 2,
    name: 'Raciones',
    portions: [
      {
        id: 1,
        name: 'Tapa',
      },
      {
        id: 2,
        name: 'Media',
      },
      {
        id: 3,
        name: 'Ración',
      },
    ],
  },
  {
    id: 3,
    name: 'Desayunos',
    portions: [
      {
        id: 1,
        name: 'Pulga',
      },
      {
        id: 2,
        name: 'Pitufo',
      },
      {
        id: 3,
        name: 'Mollete',
      },
      {
        id: 4,
        name: 'Viena',
      },
    ],
  },
];
