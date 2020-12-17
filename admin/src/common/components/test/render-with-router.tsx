import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { HashRouter, Switch } from 'react-router-dom';

export const renderWithRouter = (
  component: React.ReactElement,
  routes: React.ReactElement,
): RenderResult => {
  return {
    ...render(
      <HashRouter>
        <Switch>{routes}</Switch>
        {component}
      </HashRouter>,
    ),
  };
};
