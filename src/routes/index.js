import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Homepage from '../views/Homepage';
import Notfound from '../views/Notfound';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Homepage} />
      <Route path="/" component={Notfound} />
    </Switch>
  );
}
