/* eslint-env node,mocha *//* eslint-disable no-unused-expressions */
import { expect } from 'chai';

import {
    isBoolean,
    isObject,
    isString,
    isUndefined,
} from './assertions';

describe('Assertions testing', () => {
    it('should be all functions and be ok', () => {
        expect(isBoolean).to.be.a('function');
        expect(isObject).to.be.a('function');
        expect(isString).to.be.a('function');
        expect(isUndefined).to.be.a('function');
    });

    it('should verify is a given value is of type boolean', () => {
        expect(isBoolean(true)).to.be.true;
        expect(isBoolean(false)).to.be.true;

        // eslint-disable-next-line no-new-wrappers
        expect(isBoolean(new Boolean())).to.be.true;

        expect(isBoolean('string')).to.be.false;
        expect(isBoolean(42)).to.be.false;
        expect(isBoolean([])).to.be.false;
        expect(isBoolean({})).to.be.false;
    });

    it('should verify if a given value is of type object', () => {
        expect(isObject({})).to.be.true;
        expect(isObject([])).to.be.true;

        // eslint-disable-next-line no-new-object
        expect(isObject(new Object())).to.be.true;

        expect(isObject('string')).to.be.false;
        expect(isObject(42)).to.be.false;
        expect(isObject(true)).to.be.false;
    });

    it('should verify if a given value is of type string', () => {
        expect(isString('hello')).to.be.true;

        // eslint-disable-next-line no-new-wrappers
        expect(isString(new String())).to.be.true;

        expect(isString({})).to.be.false;
        expect(isString(42)).to.be.false;
        expect(isString(true)).to.be.false;
    });

    it('should verify if a given value is of type undefined', () => {
        expect(isUndefined(undefined)).to.be.true;

        expect(isUndefined({})).to.be.false;
        expect(isUndefined(42)).to.be.false;
        expect(isUndefined(true)).to.be.false;
    });
});
