const expect = require('chai').expect;
const mathEnforcer = require('../07-Unit Testing and Error Handling/e04-MathEnforcer').mathEnforcer;

describe('testing math enforcer function addFive functionality', function () {
    it('should return undefined if the input parameter is not a number', function () {
        let actual = mathEnforcer.addFive('num');

        expect(actual).to.be.undefined;
    });

    it('should return correct result if the parameter positive integer', function () {
        let actual = mathEnforcer.addFive(5);
        let expected = 10;

        expect(actual).to.be.equal(expected);
    });

    it('should return correct result if the parameter negative integer', function () {
        let actual = mathEnforcer.addFive(-5);
        let expected = 0;

        expect(actual).to.be.equal(expected);
    });

    it('should return correct result if the parameter positive decimal', function () {
        let actual = mathEnforcer.addFive(5.5);
        let expected = 10.5;

        expect(actual).to.be.equal(expected);
    });

    it('should return correct result if the parameter negative decimal', function () {
        let actual = mathEnforcer.addFive(-5.5);
        let expected = -0.5;

        expect(actual).to.be.equal(expected);
    });
});

describe('testing subtract 10 functionality', function () {
    it('should return undefined if the parameter is not a number', function () {
        let actual = mathEnforcer.subtractTen('5');
        let expected = 10;

        expect(actual).to.be.undefined;
    });

    it('should return correct result if the parameter is a positive integer', function () {
        let actual = mathEnforcer.subtractTen(15);
        let expected = 5;

        expect(actual).to.be.equal(expected);
    });

    it('should return correct result if the parameter is a negative integer', function () {
        let actual = mathEnforcer.subtractTen(-15);
        let expected = -25;

        expect(actual).to.be.equal(expected);
    });

    it('should return correct result if the parameter is a positive decimal', function () {
        let actual = mathEnforcer.subtractTen(15.5);
        let expected = 5.5;

        expect(actual).to.be.equal(expected);
    });

    it('should return correct result if the parameter is a negative decimal', function () {
        let actual = mathEnforcer.subtractTen(15);
        let expected = 5;

        expect(actual).to.be.equal(expected);
    });
});

describe('testing MathEnforcer sum two numbers functionality', function () {
    it('should return undefined if the first parameter is not a number', function () {
        let actual = mathEnforcer.sum('1', 2);

        expect(actual).to.be.undefined;
    });

    it('should return undefined if the second parameter is not a number', function () {
        let actual = mathEnforcer.sum(1, '2');

        expect(actual).to.be.undefined;
    });

    it('should return correct sum if both parameters are integers', function () {
        let actual = mathEnforcer.sum(1, 2);
        let expected = 3

        expect(actual).to.be.equal(expected);
    });

    it('should return correct sum if first parameter is decimal and second is integer', function () {
        let actual = mathEnforcer.sum(1.1, 2);
        let expected = 3.1

        expect(actual).to.be.equal(expected);
    });

    it('should return correct sum if first parameter is integer and second is decimal', function () {
        let actual = mathEnforcer.sum(2, 1.1);
        let expected = 3.1

        expect(actual).to.be.equal(expected);
    });

    // it('should return correct sum if both parameters are decimals', function () {
    //     let actual = mathEnforcer.sum(1.1, 2.2);
    //     let expected = 3.3
    //
    //     expect(actual).to.be.equal(expected);
    // });
});