import { MenuCategory } from './menu-category.model';

export const mockedMenuCategories: Array<MenuCategory> = [
  {
    id: 1,
    name: 'Entrantes',
    products: [
      {
        id: 1,
        name: 'Jamón Ibérico de Bellota',
        visible: true,
        price: 12,
      },
      {
        id: 2,
        name: 'Queso Manchego',
        visible: false,
        price: 9,
      },
      {
        id: 3,
        name: 'Alcachofas con jamón',
        visible: true,
        price: 9.5,
      },
    ],
  },
  { id: 2, name: 'Primeros', products: [] },
  { id: 3, name: 'Segundos', products: [] },
  { id: 4, name: 'Postres', products: [] },
  { id: 5, name: 'Bebidas', products: [] },
];
