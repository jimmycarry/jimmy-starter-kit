import * as ActionUtils from '../../helpers/actionUtil';

export const SET_WIDTH_AND_HEIGHT = 'SET_WIDTH_AND_HEIGHT';
export const setWidthAndHeight = (data) => ActionUtils.normalAction(SET_WIDTH_AND_HEIGHT, { data });
