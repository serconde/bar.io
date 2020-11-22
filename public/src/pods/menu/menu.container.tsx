import {
  AlertSnackbarComponent,
  HorizontalPosition,
  Severity,
  VerticalPosition,
} from 'common-app/alert-snackbar';
import React from 'react';
import { loadMenu } from './api';
import { MenuComponent } from './menu.component';
import { mapMenuApiModelToViewModel } from './menu.mapper';
import { createEmptyMenu, Menu } from './menu.vm';

interface MenuContainerProps {
  menuId: string;
}

export const MenuContainer: React.FunctionComponent<MenuContainerProps> = ({ menuId }) => {
  const [menu, setMenu] = React.useState<Menu>(createEmptyMenu());
  const [error, setError] = React.useState<string>(null);

  const onLoadMenu = async () => {
    try {
      const menu = await loadMenu(menuId);
      setMenu(mapMenuApiModelToViewModel(menu));
    } catch (error) {
      setMenu(createEmptyMenu());
      setError(error.message);
    }
  };

  const onCloseErrorAlert = () => {
    setError(null);
  };

  React.useEffect(() => {
    async function loadMenu() {
      await onLoadMenu();
    }
    loadMenu();
  }, []);

  return (
    <div>
      <MenuComponent {...menu} />
      <AlertSnackbarComponent
        open={!!error}
        message={error}
        onClose={onCloseErrorAlert}
        severity={Severity.ERROR}
        autoHideDuration={6000}
        vertical={VerticalPosition.TOP}
        horizontal={HorizontalPosition.CENTER}
      />
    </div>
  );
};
