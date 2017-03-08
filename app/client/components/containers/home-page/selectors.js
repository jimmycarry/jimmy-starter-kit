import { createSelector } from 'reselect';

export const homeSelect = state => state.get('HomePage');
export const globalSelect = state => state.get('global');

export const selector = createSelector(homeSelect, globalSelect, (home, global) => {
    return {
        home,
        global
    };
});
