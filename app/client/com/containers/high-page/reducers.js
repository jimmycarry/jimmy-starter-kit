import { fromJS } from 'immutable';
import { handleActions } from 'redux-actions';
import * as Action from './actions';

const initialState = {
    recompose: {}
};

export default handleActions({
    [Action.SET_HIGH_PAGE_TEXT]: (state, { payload: data }) => {
        // console.log('reducers', data.text,state);
        return state.set('recompose', fromJS(data));
    }
}, fromJS(initialState));
