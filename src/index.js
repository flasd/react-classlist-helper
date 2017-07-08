import isObject from 'lodash.isobject';
import isString from 'lodash.isstring';

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
        } else {
            classList = [...classList, className];
        }
    });

    return classList.join(' ');
}
