import { createSelector } from 'reselect';

export const hotSelect = state => state.get('HotPage');

export const selector = createSelector(hotSelect, (hot) => {
    return {
        newsList: hot.get('newsList')
    };
});
