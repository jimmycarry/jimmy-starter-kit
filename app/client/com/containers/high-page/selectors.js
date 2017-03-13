import { createSelector } from 'reselect';

export const highSelect = state => state.get('HighPage');

export const selector = createSelector(highSelect, (high) => {
    return {
        recomposeText: high.get('recompose')
    };
});
