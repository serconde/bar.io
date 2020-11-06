import { css } from 'emotion';

export const row: string = css`
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  justify-content: start;
  + .row {
    margin-top: 32px;
  }
`;
