import { Theme } from './theme.vm';
import { createMuiTheme } from '@material-ui/core/styles';
import createPalette from '@material-ui/core/styles/createPalette';
import createTypography from '@material-ui/core/styles/createTypography';
import merge from 'lodash.merge';

const palete = {
  primary: {
    light: '#4a8089',
    main: '#1a535c',
    dark: '#002a33',
  },
  secondary: {
    light: '#fff584',
    main: '#d6c254',
    dark: '#a29223',
  },
  success: {
    main: '#43a047',
  },
  info: {
    main: '#1976d2',
  },
  warning: {
    main: '#ffa000',
  },
  table: {
    row: {
      main: '#ddd',
    },
  },
};

const defaultTheme = createMuiTheme();

export const theme: Theme = merge(defaultTheme, {
  typography: createTypography(createPalette(palete), {
    fontFamily: 'Avenir, "Avenir Next", "Segoe UI", sans-serif',
  }),
  overrides: {},
});
