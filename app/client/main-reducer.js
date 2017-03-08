import { combineReducers } from 'redux-immutable';
import Immutable from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';
// import { mountPoint } from './components/routing/logic-bundle';
import HomePage from './components/containers/home-page/reducers';
import global from './components/global/reducers';
// import handleActions, { mountPoint} from './components/todos/logic-bundle';

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
  global
});
