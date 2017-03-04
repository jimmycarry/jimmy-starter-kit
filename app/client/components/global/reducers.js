import { fromJS } from 'immutable';
import * as Actions from './actions';

const initalState = {
    userVO: {},
    configVO: {}
};

export default (state = fromJS(initalState), action) => {
    switch (action.type) {
        case Actions.SET_WIDTH_AND_HEIGHT:
            return state.updateIn(['configVO'], x => x.merge(action.data));
        default:
            return state;
    }
};
