import { fromJS } from 'immutable';
import * as Action from './actions';

const initialState = {
    welcome: 'welcome'
};

const HomePage = (state = initialState, action) => {
    switch (action.type) {
        case Action.HOME_PAGE_START:
            
            return state.set('welcome', action.data);

        default:
            return fromJS(initialState);
    }
};

export default HomePage;
