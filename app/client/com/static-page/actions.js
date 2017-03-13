// @flow
import fetch from 'isomorphic-fetch';
import { normalAction, actionRequest, createRequestAction } from '../../helpers/actionUtil';
import getUrl from '../../helpers/get-url';


export const SET_STATIC_TEXT = 'SET_STATIC_TEXT';
export const setStaticText = normalAction(SET_STATIC_TEXT);

export const fetchStaicText = () => dispatch =>
    fetch(getUrl('/api/v1/homepage'))
        .then(res => res.json())
        .then(res => {
            dispatch(setStaticText(res));
        });
