/* eslint-env node,mocha */
import { expect } from 'chai';

import { classList, toggleClass, cL, tC } from './index';


describe('React classList Function', () => {
    it('should be defined without any erros', () => {
        expect(classList).to.be.a('function');
        // eslint-disable-next-line no-unused-expressions
        expect(classList).to.be.ok;
    });

    it('should handle strings as input', () => {
        const expectedOutput = 'hello react';
        const inputs = ['hello', 'react'];

        const output = classList(...inputs);

        expect(output).to.equal(expectedOutput);
        expect(output).to.be.a('string');
    });

    it('should handle objects as input', () => {
        const expectedOutput = 'mama mia';
        const inputs = [{
            mama: true,
            mia: true,
        }];

        const output = classList(...inputs);

        expect(output).to.equal(expectedOutput);
        expect(output).to.be.a('string');
    });

    it('should handle arrays as input', () => {
        const expectedOutput = 'hello react';
        const inputs = ['hello', 'react'];

        const output = classList(inputs);

        expect(output).to.equal(expectedOutput);
        expect(output).to.be.a('string');
    });

    it('should handle diferent types of input', () => {
        const expectedOutput = 'hello react world';
        const inputs = [
            'hello',
            {
                react: true,
            },
            ['world'],
        ];

        const output = classList(...inputs);

        expect(output).to.equal(expectedOutput);
        expect(output).to.be.a('string');
    });

    it('should discart object keys with false flag', () => {
        const expectedOutput = 'react rocks';
        const inputs = [{
            react: true,
            doNot: false,
            rocks: true,
        }];

        const output = classList(...inputs);
        expect(output).to.equal(expectedOutput);
        expect(output).to.be.a('string');
    });

    it('should throw an error when something other than a string/object/array is passed', () => {
        expect(() => classList(2)).to.throw();
        expect(() => classList(1, 'string')).to.throw();
        expect(() => classList(undefined)).to.throw();
    });

    it('should handle empty inputs gracefully', () => {
        const expectedOutput = '';
        const output = classList();

        expect(output).to.equal(expectedOutput);
        expect(output).to.be.a('string');
    });

});


describe('React toggleClass Function', () => {
    it('should be defined without any erros', () => {
        expect(classList).to.be.a('function');
        // eslint-disable-next-line no-unused-expressions
        expect(classList).to.be.ok;
    });

    it('should return a class if condition is true', () => {
        const expectedOutput = 'Hello';
        const condition = true;

        const output = toggleClass('Hello', condition);

        expect(output).to.be.a('string');
        expect(output).to.equal(expectedOutput);
    });

    it('should return an empty string if condition is false', () => {
        const expectedOutput = '';
        const condition = false;

        const output = toggleClass('Hello', condition);

        expect(output).to.be.a('string');
        expect(output).to.equal(expectedOutput);
    });

    it('should throw an error if something is wrong with the input', () => {
        expect(() => toggleClass()).to.throw();
        expect(() => toggleClass('a')).to.throw();
        expect(() => toggleClass(2, true)).to.throw();
        expect(() => toggleClass('', '')).to.throw();
    });
});

describe('React classList alias', () => {
    it('should be defined and be the classList function', () => {
        expect(cL).to.equal(classList);
        expect(cL).to.be.a('function');
    });
});

describe('React toggleClass alias', () => {
    it('should be defined and be the toggleClass function', () => {
        expect(tC).to.equal(toggleClass);
        expect(tC).to.be.a('function');
    });
});
