import React from 'react';

//Componentes
import { MenuComponent } from './menu.component';
import { DashboardItemProps } from 'common/components';

//Material UI
import InfoIcon from '@material-ui/icons/Info';
import FolderIcon from '@material-ui/icons/Folder';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import { routes } from 'core/router';

export const MenuContainer: React.FunctionComponent = () => {
  const items: DashboardItemProps[] = React.useMemo(
    (): DashboardItemProps[] => [
      {
        title: 'Información del bar',
        linkTo: routes.barInfo,
        icon: InfoIcon,
      },
      {
        title: 'Categorías',
        linkTo: routes.categoriesList,
        icon: FolderIcon,
      },
      {
        title: 'Comida',
        linkTo: '#', // No link defined
        icon: RestaurantMenuIcon,
      },
    ],
    [],
  );

  return <MenuComponent items={items} />;
};
