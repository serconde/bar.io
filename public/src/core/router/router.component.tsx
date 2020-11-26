import { Route, HashRouter as Router, Switch } from 'react-router-dom';

import { MenuScene } from 'scenes';
import React from 'react';
import { switchRoutes } from './routes';

export const RouterComponent: React.FunctionComponent = () => {
  return (
    <Router>
      <Switch>
        <Route exact={true} path={switchRoutes.root} component={MenuScene} />
      </Switch>
    </Router>
  );
};
