import { fromJS } from 'immutable';
import { handleActions } from 'redux-actions';
import * as Actions from './actions';

const initialState = {
    newsList: []
};

export default handleActions({
    [Actions.FETCH_HOT[0]]: (state, { payload: data }) => {
        return state;
    },
    [Actions.FETCH_HOT[1]]: (state, { payload: data }) => {
        return state.set('newsList', fromJS(data));
    },
    [Actions.FETCH_HOT[2]]: (state, { payload: data }) => {
        return state;
    }
}, fromJS(initialState));
