import { createSelector } from 'reselect';

export const homeSelect = state => state.get('HomePage');

export const selector = createSelector(homeSelect, (home) => {
    return {
        welcome: home.get('welcome')
    };
});
