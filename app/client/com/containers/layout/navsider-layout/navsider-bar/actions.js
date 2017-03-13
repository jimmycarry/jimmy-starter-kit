import fetch from 'isomorphic-fetch';
import * as ActionUtils from '../../../../../helpers/actionUtil';
import getUrl from '../../../../../helpers/get-url';

export const GET_NAV_SIDER_LIST = ActionUtils.actionRequest('GET_NAV_SIDER_LIST');
export const fetchNavList = ActionUtils.createRequestAction(GET_NAV_SIDER_LIST);
export const fetchList = () => dispatch => {
    dispatch(fetchNavList.request());
    return fetch(getUrl('/api/v1/navlist'))
        .then(res => res.json())
        .then(res => dispatch(fetchNavList.success(res)));
};
