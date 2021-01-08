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
          name: 'Chorizo criollo',
          portions: [
            { name: 'Tapa', price: 4.5 },
            { name: 'Media', price: 7.5 },
            { name: 'Ración', price: 0 },
          ],
        },
        {
          name: 'Queso provolone',
          portions: [
            { name: 'Tapa', price: 0 },
            { name: 'Media', price: 7.5 },
            { name: 'Ración', price: 0 },
          ],
        },
        {
          name: 'Jamón ibérico',
          portions: [
            { name: 'Tapa', price: 0 },
            { name: 'Media', price: 7.5 },
            { name: 'Ración', price: 15 },
          ],
        },
        {
          name: 'Queso de oveja viejo',
          portions: [
            { name: 'Tapa', price: 3.5 },
            { name: 'Media', price: 6.5 },
            { name: 'Ración', price: 0 },
          ],
        },
        {
          name: 'Surtido ibérico',
          portions: [
            { name: 'Tapa', price: 0 },
            { name: 'Media', price: 0 },
            { name: 'Ración', price: 13 },
          ],
        },
        {
          name: 'Morcilla de Burgos',
          portions: [
            { name: 'Tapa', price: 4.5 },
            { name: 'Media', price: 7.5 },
            { name: 'Ración', price: 0 },
          ],
        },
        {
          name: 'Croquetas',
          portions: [
            { name: 'Tapa', price: 2.5 },
            { name: 'Media', price: 4.5 },
            { name: 'Ración', price: 8.5 },
          ],
        },
        {
          name: 'Cogollos de Tudela',
          portions: [
            { name: 'Tapa', price: 0 },
            { name: 'Media', price: 4.5 },
            { name: 'Ración', price: 8.5 },
          ],
        },
        {
          name: 'Anchoas del Cantábrico',
          portions: [
            { name: 'Tapa', price: 3.5 },
            { name: 'Media', price: 6.5 },
            { name: 'Ración', price: 0 },
          ],
        },
        {
          name: 'Aceitunas',
          portions: [
            { name: 'Tapa', price: 3 },
            { name: 'Media', price: 0 },
            { name: 'Ración', price: 0 },
          ],
        },
      ],
    },
    {
      name: 'Platos Principales',
      products: [
        {
          name: 'Flamenquín cordobés',
          portions: [{ name: 'Única', price: 9.5 }],
        },
        {
          name: 'Carrillada ibérica al Predro Ximénez',
          portions: [{ name: 'Única', price: 10.5 }],
        },
        {
          name: 'Huevos rotos con chorizo y patatas fritas',
          portions: [{ name: 'Única', price: 8.5 }],
        },
        {
          name: 'Patatas bravas',
          portions: [{ name: 'Única', price: 6.5 }],
        },
      ],
    },
    {
      name: 'Ensaladas',
      products: [
        {
          name: 'Tomate en rodajas y ventresca',
          portions: [{ name: 'Única', price: 8 }],
        },
        {
          name: 'Ensalada de la casa',
          portions: [{ name: 'Única', price: 6.5 }],
        },
        {
          name: 'Ensalada mixta',
          portions: [{ name: 'Única', price: 6 }],
        },
        {
          name: 'Ensalada de pimientos',
          portions: [{ name: 'Única', price: 7.5 }],
        },
      ],
    },
    {
      name: 'Postres',
      products: [
        {
          name: 'Torrijas',
          portions: [{ name: 'Única', price: 6.5 }],
        },
        {
          name: 'Coulant de chocolate negro con helado de vainilla',
          portions: [{ name: 'Única', price: 8.5 }],
        },
        {
          name: 'Flan de huevo',
          portions: [{ name: 'Única', price: 5.5 }],
        },
        {
          name: 'Crema catalana',
          portions: [{ name: 'Única', price: 6.5 }],
        },
      ],
    },
    {
      name: 'Bebidas',
      products: [
        {
          name: 'Refrescos',
          portions: [{ name: 'Única', price: 2.5 }],
        },
        {
          name: 'Cerveza (caña)',
          portions: [{ name: 'Única', price: 2.5 }],
        },
        {
          name: 'Cerveza (Jarra)',
          portions: [{ name: 'Única', price: 3.5 }],
        },
        {
          name: 'Rioja (Copa)',
          portions: [{ name: 'Única', price: 3.5 }],
        },
        {
          name: 'Agua mineral (1l)',
          portions: [{ name: 'Única', price: 2.5 }],
        },
      ],
    },
  ],
};

mockedMenus.set('00000000-0000-0000-0000-000000000000', mockedMenu);
