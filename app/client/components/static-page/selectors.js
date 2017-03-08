import { createSelector } from 'reselect';

export const staticSelect = state => state.get('StaticPage');

export const selector = createSelector(staticSelect, (sta) => {
    return {
        sta
    };
});
