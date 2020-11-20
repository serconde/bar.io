import { Theme as DefaultTheme } from '@material-ui/core/styles';
import { Palette as DefaultPalette, PaletteColor } from '@material-ui/core/styles/createPalette';
import { Overrides as DefaultOverrides } from '@material-ui/core/styles/overrides';
import { CssBaselineClassKey } from '@material-ui/core';

interface Palette extends DefaultPalette {
  table: {
    row: PaletteColor;
  };
}

interface Overrides extends DefaultOverrides {
  overrides: CssBaselineClassKey;
}

export interface ThemePalete extends Omit<DefaultTheme, 'palette'> {
  palette: Palette;
}

export interface Theme extends Omit<ThemePalete, 'overrides'> {
  overrides: Overrides;
}
