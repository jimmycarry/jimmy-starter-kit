import { fromJS } from 'immutable';
import * as Actions from './actions';

const initialState = {
    configVO: {},
    userVO: {},
};

export default (state = fromJS(initialState), action) => {
    switch (action.type) {
        case Actions.GET_CLIENT_WIDTH_HEIGHT:
            return state.setIn(['configVO', 'width'], action.data.width)
                .setIn(['configVO', 'height'], action.data.height);
        default:
            return state;
    }
};
