import { fromJS } from 'immutable';
import { handleActions } from 'redux-actions';
import * as Action from './actions';

const initialState = {
    welcome: 'welcome',
    list: [],
};

export default handleActions({
    [Action.HOME_PAGE_START]: (state, { payload: data }) => {
        return state.set('welcome', data);
    },
    [Action.FETCH_TODOS_HOME_PAGE[0]]: (state, { payload: data }) => {
        return state.set('loading', 'isRequesting');
    },
    [Action.FETCH_TODOS_HOME_PAGE[1]]: (state, { payload: data }) => {
        return state.set('loading', 'success')
            .set('list', fromJS(data));
    },
    [Action.FETCH_TODOS_HOME_PAGE[2]]: (state, { payload: data }) => {
        return state.set('loading', 'failure');
    }
}, fromJS(initialState));
