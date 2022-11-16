let expect = require('chai').expect;
let assert = require('chai').assert;
let createCalculator = require('../07-Unit Testing and Error Handling/l07-AddSubtract').createCalculator;

describe('check calculator outputs', function (){
    it('should calculate addition right', function () {
        let calculator = createCalculator();
        calculator.add(5);
        let actual = calculator.get();
        let expected = 5;

        expect(actual).to.be.equal(expected);
    });

    it('should calculate subtraction right', function () {
        let calculator = createCalculator();
        calculator.subtract(5);
        let actual = calculator.get();
        let expected = -5;

        expect(actual).to.be.equal(expected);
    });

    it('should work with string parameters subtraction', function () {
        let calculator = createCalculator();
        calculator.subtract('5');
        calculator.subtract('5');
        let actual = calculator.get();
        let expected = -10;

        expect(actual).to.be.equal(expected);
    });

    it('should work with string parameters addition', function () {
        let calculator = createCalculator();
        calculator.add('5');
        calculator.add('5');
        let actual = calculator.get();
        let expected = 10;

        expect(actual).to.be.equal(expected);
    });

    it('should return undefined if called with no parameters', function () {
        let calculator = createCalculator();
        calculator.subtract();
        let actual = calculator.get();
        let expected = NaN;

        // expect(actual).to.be.equal(expected);
        assert.isTrue(isNaN(actual));
    });
});