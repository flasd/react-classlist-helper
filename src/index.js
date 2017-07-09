import isBoolean from 'lodash.isboolean';
import isObject from 'lodash.isobjectlike';
import isString from 'lodash.isstring';
import isUndefined from 'lodash.isundefined';

export default function classList(...classes) {
    if (classes.length === 0) {
        return '';
    }

    let classBuffer = [];

    classes.forEach((className) => {
        if (Array.isArray(className)) {
            classBuffer = [...classBuffer, className.reduce((total, classItem) => `${total} ${classItem}`)];
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
