import * as ActioUtils from '../../helpers/actionUtil';

/**
 * 获取客户端的宽和高
 */
export const GET_CLIENT_WIDTH_HEIGHT = 'GET_CLIENT_WIDTH_HEIGHT';
export const getClientWidthHeigt = (data) => ActioUtils.normalAction(GET_CLIENT_WIDTH_HEIGHT, { data });

