import { normalAction } from '../../../helpers/actionUtil';

export const HOME_PAGE_START = 'HOME_PAGE_START';
export const homePageStart = (data) => normalAction(HOME_PAGE_START, { data });
