import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, IndexRoute, Route, useRouterHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import createHashHistory from 'history/lib/createHashHistory';
import configureStore from '../store/configureStore';
import reducers from '../reducers/AppSpotipposReducer';

import RootNoOptionSelected from '../components/RootNoOptionSelected';
import Announcements from '../components/Announcements';

const store = configureStore(reducers);

const history = syncHistoryWithStore(
  useRouterHistory(createHashHistory)({queryKey: false}),
  store
);

export default (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={RootNoOptionSelected}>
        <IndexRoute component={RootNoOptionSelected} />
      </Route>
      <Route path="/announcements" component={Announcements}></Route>
    </Router>
  </Provider>
)
