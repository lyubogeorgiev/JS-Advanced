const isOddOrEven = require('../07-Unit Testing and Error Handling/E02-EvenOrOdd').isOddOrEven;
const expect = require('chai').expect;

describe('Testing even or odd function', function (){
    it('should return undefined if input type is not a string', function () {
        let actual = isOddOrEven(2);
        expect(actual).to.be.undefined;
    });

    it('should return odd if the length of the passed string is odd', function () {
        let actual = isOddOrEven('Hello');
        expect(actual).to.be.equal('odd');
    });

    it('should return even if the length of the passed string is odd', function () {
        let actual = isOddOrEven('Hell');
        expect(actual).to.be.equal('even');
    });
});