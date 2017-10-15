export const actionKeys = key => ({
    KEY: key,
    PENDING: `${key}_PENDING`,
    FULFILLED: `${key}_FULFILLED`,
    REJECTED: `${key}_REJECTED`
});

export function apiActionCreator(actionKey, getPayload) {
    const actionType = actionKeys(actionKey);
    return {
        ...actionType,
        action: function() {
            return ({
                type: actionType.KEY,
                payload: getPayload(...arguments)
            });
        }
    };
}

export function actionCreator(type, ...argumentNames) {
    return {
        key: type,
        action: (args) => {
            const ret = {type};
            argumentNames.forEach(argName => {
                ret[argName] = args[argName];
            });
            return ret;
        }
    }
}