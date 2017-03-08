/**
 * 返回一个含有REQUEST,SUCCESS,FAILURE 三种类型的action字符串.
 * */
import { createAction } from 'redux-actions';

export function actionRequest(act, modules) {
    const newAct = act.toUpperCase();
    const mdl = modules ? modules + '_' : '';
    const arr = [
        mdl + newAct + '_REQUEST',
        mdl + newAct + '_SUCCESS',
        mdl + newAct + '_FAILURE'
    ];
    return arr;
}

/**
 * 返回一个普通的action
 * */
export function normalAction(type) {
    return createAction(type);
}

export function createRequestAction(type) {
    const obj = {
        request: null,
        success: null,
        failure: null,
    };
    obj.request = createAction(type[0]);
    obj.success = createAction(type[1]);
    obj.failure = createAction(type[2]);
    return obj;
}
