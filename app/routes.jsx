import React from 'react';
import { browserHistory, createMemoryHistory, Router, Route } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import StaticPage from './client/components/static-page';
import HomePage from './client/components/containers/home-page';
import HighPage from './client/components/containers/high-page';
// import Todos from './client/components/todos/index';

export const getClientHistory = (store) =>
  syncHistoryWithStore(browserHistory, store, {
    selectLocationState(state) {
      return state.get('routing').toJS();
    }
  });

export const getServerHistory = (store, url) =>
  syncHistoryWithStore(createMemoryHistory(url), store, {
    selectLocationState(state) {
      return state.get('routing').toJS();
    }
  });

export const getRoutes = (history) => (
  <Router history={history}>
    <Route path="/" component={HomePage} />
    <Route path="/static-page" component={StaticPage} />
    <Route path="/home-page" component={HomePage} />
    <Route path="/high-page" component={HighPage} />
  </Router>
);
