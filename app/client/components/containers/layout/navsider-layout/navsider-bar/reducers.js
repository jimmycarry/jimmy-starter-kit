import { fromJS } from 'immutable';
import { handleActions } from 'redux-actions';
import * as Actions from './actions';


const initialState = {
    navList: [],
    isRequesting: false
};

export default handleActions({
    [Actions.GET_NAV_SIDER_LIST[0]]: (state, { payload: data }) => {
        return state.set('isRequesting', true);
    },
    [Actions.GET_NAV_SIDER_LIST[1]]: (state, { payload: data }) => {
        return state.set('navList', fromJS(data))
            .set('isRequesting', false);
    },
    [Actions.GET_NAV_SIDER_LIST[2]]: (state, { payload: data }) => {
        return state.set('isRequesting', false);
    }
}, fromJS(initialState));
