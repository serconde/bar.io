import { MenuCategory } from './menu-categories.model';

export const mockedMenuCategories: Array<MenuCategory> = [
  {
    id: 1,
    name: 'Entrantes',
    products: [
      {
        id: 1,
        name: 'Jamón Ibérico de Bellota',
        visible: true,
        portionTypeId: 2,
        portions: [
          {
            id: 1,
            price: 0,
          },
          {
            id: 2,
            price: 6,
          },
          {
            id: 3,
            price: 12,
          },
        ],
      },
      {
        id: 2,
        name: 'Queso Manchego',
        portionTypeId: 2,
        visible: false,
        portions: [
          {
            id: 1,
            price: 2.5,
          },
          {
            id: 2,
            price: 5,
          },
          {
            id: 3,
            price: 10,
          },
        ],
      },
      {
        id: 3,
        name: 'Alcachofas con jamón',
        visible: true,
        portionTypeId: 1,
        portions: [{ id: 1, price: 6 }],
      },
    ],
  },
  { id: 2, name: 'Primeros', products: [] },
  { id: 3, name: 'Segundos', products: [] },
  { id: 4, name: 'Postres', products: [] },
  { id: 5, name: 'Bebidas', products: [] },
];
