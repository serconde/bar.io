import { Menu } from './menu.api.model';

export const mockedMenus: Map<string, Menu> = new Map<string, Menu>();

const mockedMenu: Menu = {
  restaurantInfo: {
    name: 'Asador Paquito',
    description: 'Comida andaluza',
    telephone: '951123123',
  },
  categories: [
    {
      name: 'Entrantes',
      products: [
        {
          id: 1,
          name: 'Chorizo criollo',
          price: 5,
        },
        {
          id: 2,
          name: 'Queso provolone',
          price: 4,
        },
        {
          id: 3,
          name: 'Jamón ibérico',
          price: 18,
        },
        {
          id: 4,
          name: 'Queso',
          price: 12,
        },
        {
          id: 5,
          name: 'Surtido ibérico',
          price: 15,
        },
        {
          id: 6,
          name: 'Morcilla de Burgos',
          price: 15,
        },
        {
          id: 7,
          name: 'Croquetas',
          price: 8,
        },
        {
          id: 8,
          name: 'Cogollos de Tudela',
          price: 9,
        },
        {
          id: 10,
          name: 'Anchoas del Cantábrico',
          price: 9,
        },
        {
          id: 11,
          name: 'Aceitunas',
          price: 1,
        },
      ],
    },
    {
      name: 'Platos Principales',
      products: [
        {
          id: 12,
          name: 'Flamenquín cordobés',
          price: 7.5,
        },
        {
          id: 13,
          name: 'Carrillada ibérica al Predro Ximénez',
          price: 9.5,
        },
        {
          id: 14,
          name: 'Huevos rotos con chorizo y patatas fritas',
          price: 7.5,
        },
        {
          id: 15,
          name: 'Flamenquín cordobés',
          price: 7.5,
        },
        {
          id: 16,
          name: 'Patatas bravas',
          price: 6.5,
        },
      ],
    },
    {
      name: 'Ensaladas',
      products: [
        {
          id: 17,
          name: 'Tomate en rodajas y ventresca',
          price: 9.0,
        },
        {
          id: 18,
          name: 'Ensalada de la casa',
          price: 10.0,
        },
        {
          id: 19,
          name: 'Ensalada mixta',
          price: 9.0,
        },
        {
          id: 20,
          name: 'Ensalada de pimientos',
          price: 7.5,
        },
      ],
    },
    {
      name: 'Postres',
      products: [
        {
          id: 21,
          name: 'Torrijas',
          price: 7.0,
        },
        {
          id: 22,
          name: 'Coulant de chocolate negro con helado de vainilla',
          price: 8.5,
        },
        {
          id: 23,
          name: 'Flan de huevo',
          price: 6.5,
        },
        {
          id: 24,
          name: 'Crema catalana',
          price: 7.5,
        },
      ],
    },
    {
      name: 'Bebidas',
      products: [
        {
          id: 24,
          name: 'Refrescos',
          price: 2.5,
        },
        {
          id: 25,
          name: 'Cerveza (caña)',
          price: 2,
        },
        {
          id: 26,
          name: 'Cerveza (Jarra)',
          price: 3.5,
        },
        {
          id: 27,
          name: 'Rioja (Copa)',
          price: 2.5,
        },
        {
          id: 28,
          name: 'Agua mineral (1l)',
          price: 2.5,
        },
      ],
    },
  ],
};

mockedMenus.set('00000000-0000-0000-0000-000000000000', mockedMenu);
