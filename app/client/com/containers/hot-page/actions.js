import fetch from 'isomorphic-fetch';
import * as ActionUtils from '../../../helpers/actionUtil';
import getUrl from '../../../helpers/get-url';

export const FETCH_HOT = ActionUtils.actionRequest('FETCH_HOT');

export const fetchHot = ActionUtils.createRequestAction(FETCH_HOT);

export const fetchHotList = () => dispatch => {
    dispatch(fetchHot.request());
    return fetch(getUrl('/api/v1/hot'))
        .then(res => res.json())
        .then(res => dispatch(fetchHot.success(res)))
        .catch(res => dispatch(fetchHot.failure()));
};
