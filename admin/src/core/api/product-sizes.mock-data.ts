import { ProductSizeType } from './product-size.model';

export const mockedProductSizeTypes: Array<ProductSizeType> = [
  {
    id: 1,
    name: 'Raciones',
    sizes: [
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
    sizes: [
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
