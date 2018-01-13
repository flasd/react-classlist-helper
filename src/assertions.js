/**
 *
 * @param {*} value Any value
 * @return {boolean} assertion
 */
export function isBoolean(value) {
    return typeof value === 'boolean' ||
        (typeof value === 'object' && value !== null && typeof value.valueOf() === 'boolean');
}

/**
 *
 * @param {*} value Any value
 * @return {boolean} assertion
 */
export function isObject(value) {
    return value !== null && typeof value === 'object';
}

/**
 *
 * @param {*} value Any value
 * @return {boolean} assertion
 */
export function isString(value) {
    return typeof value === 'string' || value instanceof String;
}

/**
 *
 * @param {*} value Any value
 * @return {boolean} assertion
 */
export function isUndefined(value) {
    return typeof value === 'undefined';
}
