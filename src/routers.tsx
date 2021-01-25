import * as React from 'react';
import { Route, IndexRoute } from 'react-router';
import Hello from './containers/Hello';
import login from './views/login';

export default (
  <Route path="/">
    <IndexRoute component={login} />
    <Route path="/demo"  >
      <IndexRoute component={Hello} />
    </Route>
  </Route>
);