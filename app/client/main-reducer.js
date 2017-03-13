import { combineReducers } from 'redux-immutable';
import Immutable from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';
import HomePage from './com/containers/home-page/reducers';
import HighPage from './com/containers/high-page/reducers';
import HotPage from './com/containers/hot-page/reducers';
import global from './com/global/reducers';
import StaticPage from './com/static-page/reducers';
import Layout from './com/containers/layout/navsider-layout/navsider-bar/reducers';

const initialState = Immutable.fromJS({
  locationBeforeTransitions: null
});

function routingReducer(state = initialState, action) {
  if (action.type === LOCATION_CHANGE) {
    return state.set('locationBeforeTransitions', action.payload);
  }
  return state;
}

export default combineReducers({
  // [mountPoint]: handleActions,
  routing: routingReducer,
  HomePage,
  HotPage,
  HighPage,
  StaticPage,
  Layout,
  global
});
