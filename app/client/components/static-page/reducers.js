import { fromJS } from 'immutable';
import { handleActions } from 'redux-actions';
import * as Action from './actions';


const initialState = {
    staticText: ''
};

export default handleActions({
    [Action.SET_STATIC_TEXT]: (state, { payload: data }) => {
        return state.set('staticText', data.text);
    }
}, fromJS(initialState));
