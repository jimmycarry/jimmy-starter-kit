// @flow
import fetch from 'isomorphic-fetch';
import { normalAction, actionRequest, createRequestAction } from '../../../helpers/actionUtil';
import getUrl from '../../../helpers/get-url';

export const HOME_PAGE_START = 'HOME_PAGE_START';
export const homePageStart = (data) => normalAction(HOME_PAGE_START);

export const FETCH_TODOS_HOME_PAGE = actionRequest('FETCH_TODOS_HOME_PAGE');


export const fetchTodosList = createRequestAction(FETCH_TODOS_HOME_PAGE);


export const fetchTodos = () => (dispatch: Function): Promise<any[]> =>
    fetch(getUrl('/api/v1/todos'))
        .then(res => res.json())
        .then((res: any[]) => dispatch(fetchTodosList.success(res)));
