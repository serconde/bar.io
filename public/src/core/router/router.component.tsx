import { Route, HashRouter as Router, Switch } from 'react-router-dom';

import { InitScene, MenuScene } from 'scenes';
import React from 'react';
import { switchRoutes } from './routes';

export const RouterComponent: React.FunctionComponent = () => {
  return (
    <Router>
      <Switch>
        <Route exact={true} path={switchRoutes.root} component={InitScene} />
        <Route exact={true} path={switchRoutes.menu} component={MenuScene} />
      </Switch>
    </Router>
  );
};
