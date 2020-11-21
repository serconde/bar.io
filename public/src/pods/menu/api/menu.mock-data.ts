import { Menu } from './menu.api.model';

export const mockedMenus: Map<string, Menu> = new Map<string, Menu>();

const mockedMenu: Menu = {
  categories: [
    {
      name: 'Entrantes',
      dishes: [
        {
          name: 'Chorizo criollo',
          price: 5,
        },
        {
          name: 'Queso provolone',
          price: 4,
        },
        {
          name: 'Jamón ibérico',
          price: 18,
        },
        {
          name: 'Queso',
          price: 12,
        },
        {
          name: 'Surtido ibérico',
          price: 15,
        },
        {
          name: 'Morcilla de Burgos',
          price: 15,
        },
        {
          name: 'Croquetas',
          price: 8,
        },
        {
          name: 'Cogollos de Tudela',
          price: 9,
        },
        {
          name: 'Anchoas del Cantábrico',
          price: 9,
        },
        {
          name: 'Aceitunas',
          price: 1,
        },
      ],
    },
    {
      name: 'Platos Principales',
      dishes: [
        {
          name: 'Flamenquín cordobés',
          price: 7.5,
        },
        {
          name: 'Carrillada ibérica al Predro Ximénez',
          price: 9.5,
        },
        {
          name: 'Huevos rotos con chorizo y patatas fritas',
          price: 7.5,
        },
        {
          name: 'Flamenquín cordobés',
          price: 7.5,
        },
        {
          name: 'Patatas bravas',
          price: 6.5,
        },
      ],
    },
    {
      name: 'Ensaladas',
      dishes: [
        {
          name: 'Tomate en rodajas y ventresca',
          price: 9.0,
        },
        {
          name: 'Ensalada de la casa',
          price: 10.0,
        },
        {
          name: 'Ensalada mixta',
          price: 9.0,
        },
        {
          name: 'Ensalada de pimientos',
          price: 7.5,
        },
      ],
    },
    {
      name: 'Postres',
      dishes: [
        {
          name: 'Torrijas',
          price: 7.0,
        },
        {
          name: 'Coulant de chocolate negro con helado de vainilla',
          price: 8.5,
        },
        {
          name: 'Flan de huevo',
          price: 6.5,
        },
        {
          name: 'Crema catalana',
          price: 7.5,
        },
      ],
    },
    {
      name: 'Bebidas',
      dishes: [
        {
          name: 'Refrescos',
          price: 2.5,
        },
        {
          name: 'Cerveza (caña)',
          price: 2,
        },
        {
          name: 'Cerveza (Jarra)',
          price: 3.5,
        },
        {
          name: 'Rioja (Copa)',
          price: 2.5,
        },
        {
          name: 'Agua mineral (1l)',
          price: 2.5,
        },
      ],
    },
  ],
};

mockedMenus.set('00000000-0000-0000-0000-000000000000', mockedMenu);
