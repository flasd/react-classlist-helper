import { expect } from 'chai';

import classList from './index';


describe('React ClassList Helper', () => {

    it('should be defined without any erros', () => {
        expect(classList).to.be.a('function');
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

    it('should handle diferent types of input', () => {
        const expectedOutput = 'hello react';
        const inputs = [
            'hello',
            {
                react: true,
            },
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

});

