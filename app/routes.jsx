import React from 'react';
import { browserHistory, createMemoryHistory, Router, Route, IndexRoute } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import Layout from './client/com/containers/layout';
import StaticPage from './client/com/static-page';
import HomePage from './client/com/containers/home-page';
import HighPage from './client/com/containers/high-page';
import SciencePage from './client/com/containers/science-page';
import MiltaryPage from './client/com/containers/miltary-page';
import SocialPage from './client/com/containers/social-page';
import HotPage from './client/com/containers/hot-page';

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
      <Route path="/" component={Layout}>
        <IndexRoute component={HomePage} />
        <Route path="/static-page" component={StaticPage} />
        <Route path="/science" component={SciencePage} />
        <Route path="/military" component={MiltaryPage} />
        <Route path="/social" component={SocialPage} />
        <Route path="/hot" component={HotPage} />
        <Route path="/high-page" component={HighPage} />
      </Route>
  </Router>
);
