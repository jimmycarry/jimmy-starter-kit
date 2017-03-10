import fetch from 'isomorphic-fetch';
import * as ActionUtils from '../../../helpers/actionUtil';
import getUrl from '../../../helpers/get-url';

export const SET_HIGH_PAGE_TEXT = 'SET_HIGH_PAGE_TEXT';
export const setText = ActionUtils.normalAction(SET_HIGH_PAGE_TEXT);
export const fetchText = () => dispatch =>
    fetch(getUrl('/api/v1/homepage'))
        .then(res => res.json())
        .then(res => {
            dispatch(setText(res));
            console.log(res);
        });
