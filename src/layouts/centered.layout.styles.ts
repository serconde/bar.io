import { css } from 'emotion';
import { theme } from 'core/theme';

export const root = css`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  margin: 10%;
  @media (min-width: ${theme.breakpoints.values.sm}px) {
    justify-items: center;
  }
`;
