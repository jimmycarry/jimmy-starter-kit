import React from 'react';
import { browserHistory, createMemoryHistory, Router, Route } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import StaticPage from './client/components/static-page';
import HomePage from './client/components/containers/home-page';

const selectLocationState = () => {
    let prevRoutingState;
    let prevRoutingStateJS;

    return (state) => {
        const routingState = state.get('routing');
        // or state.route
        if (!routingState.equals(prevRoutingState)) {
            prevRoutingState = routingState;
            prevRoutingStateJS = routingState.toJS();
        }

        return prevRoutingStateJS; 
    };
};

export const getClientHistory = (store) =>
  syncHistoryWithStore(browserHistory, store, {
    selectLocationState: selectLocationState()
  });

export const getServerHistory = (store, url) =>
  syncHistoryWithStore(createMemoryHistory(url), store, {
    selectLocationState: selectLocationState()
  });

export const getRoutes = (history) => (
  <Router history={history}>
    <Route path="/" component={HomePage} />
    <Route path="/static-page" component={StaticPage} />
    <Route path="/home-page" component={HomePage} />
  </Router>
);
