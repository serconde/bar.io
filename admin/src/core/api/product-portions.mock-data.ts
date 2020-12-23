import { ProductPortionType } from './product-portion.model';

export const mockedProductPortionTypes: Array<ProductPortionType> = [
  {
    id: 1,
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
    id: 2,
    name: 'Desayunos',
    portions: [
      {
        id: 4,
        name: 'Pulga',
      },
      {
        id: 5,
        name: 'Pitufo',
      },
      {
        id: 6,
        name: 'Mollete',
      },
      {
        id: 7,
        name: 'Viena',
      },
    ],
  },
];
