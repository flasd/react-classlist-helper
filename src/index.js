import isBoolean from 'lodash.isboolean';
import isObject from 'lodash.isobjectlike';
import isString from 'lodash.isstring';
import isUndefined from 'lodash.isundefined';


/**
 * Spred css class names provided as input
 *
 * @param      {Array}   args  The classe's names.
 * @return     {string}  final className
 */
export function classList(...args) {
    if (args.length === 0) {
        return '';
    }

    let classBuffer = [];

    args.forEach((className) => {
        if (Array.isArray(className)) {
            classBuffer = [...classBuffer, className.reduce((total, curItem) => `${total} ${curItem}`)];
        } else if (isString(className)) {
            classBuffer = [...classBuffer, className];
        } else if (isObject(className)) {
            const keys = Object.keys(className);

            keys.forEach((key) => {
                if (className[key] === true) {
                    classBuffer = [...classBuffer, key];
                }
            });
        } else {
            throw new Error(`Expected className to be a string but instead got ${typeof className}`);
        }
    });

    return classBuffer.join(' ');
}

/**
 * Toggle a class based on a condition.
 *
 * @param      {string}   className  The class name
 * @param      {boolean}  condition  The condition
 * @return     {string}   if condition is true, returns the string, if false,
 *                        returns empty string
 */
export function toggleClass(className, condition) {
    if (isUndefined(className) || !isString(className)) {
        throw new Error(`Expected className to be a string but instead got ${typeof className}`);
    }

    if (isUndefined(condition) || !isBoolean(condition)) {
        throw new Error(`Expected condition to be a boolean value but instead got ${typeof condition}`);
    }

    const ClassMap = {};
    ClassMap[className] = condition;

    return classList(ClassMap);
}

export const cL = classList;
export const tC = toggleClass;

const defaultFunc = classList;

export default defaultFunc;
