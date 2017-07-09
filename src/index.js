import isObject from 'lodash.isobject';
import isString from 'lodash.isstring';

const err = new Error(`Expected className to be a string but instead got ${typeof className}`);

export default function spred(...classes) {
    let classList = [];

    classes.forEach((className) => {
        if (isObject(className)) {
            const keys = Object.keys(className);
            keys.forEach((key) => {
                if (className[key] === true && isString(key)) {
                    classList = [...classList, key];
                }
            });
        } else if (isString(className)) {
            classList = [...classList, className];
        } else {
            throw err;
        }
    });

    return classList.join(' ');
}

export function toggleClass(shouldShow, className) {
    if (className && isString(className)) {
        return shouldShow ? className : '';
    }

    throw err;
}
