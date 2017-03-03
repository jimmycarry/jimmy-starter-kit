/**
 * 返回一个含有REQUEST,SUCCESS,FAILURE 三种类型的action字符串.
 * */
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
export function normalAction(type, palyload, modules) {
    return {
        type: type + (modules ? ('_' + modules.toUpperCase()) : ''),
        ...palyload
    };
}
