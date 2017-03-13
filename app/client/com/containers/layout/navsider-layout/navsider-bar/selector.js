import { createSelector } from 'reselect';

export const navSelect = state => state.get('Layout');

export const selector = createSelector(navSelect, (nav) => {
    return {
        navList: nav.get('navList')
    };
});
