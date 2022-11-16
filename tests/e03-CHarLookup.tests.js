const expect = require('chai').expect;
const lookupChar = require('../07-Unit Testing and Error Handling/e03-CharLookup').lookupChar;

describe('Testing charLookup function', function (){
    it('should return undefined if the first parameter is not a string', function () {
        let actual = lookupChar(1, 0);

        expect(actual).to.be.undefined;
    });

    it('should should return undefined if the second parameter is not an integer', function () {
        let actual = lookupChar('name', '2');

        expect(actual).to.be.undefined;
    });

    it('should should return undefined if the second parameter is decimal', function () {
        let actual = lookupChar('name', 2.2);

        expect(actual).to.be.undefined;
    });

    it('should return "Incorrect index" if the index is equal to the string length', function () {
        let expected = 'Incorrect index';
        let actual = lookupChar('name', 4);

        expect(actual).to.be.equal(expected);
    });

    it('should return "Incorrect index" if the index is bigger than the string length', function () {
        let expected = 'Incorrect index';
        let actual = lookupChar('name', 6);

        expect(actual).to.be.equal(expected);
    });

    it('should return "Incorrect index" if the index is negative number', function () {
        let expected = 'Incorrect index';
        let actual = lookupChar('name', -3);

        expect(actual).to.be.equal(expected);
    });

    it('should return the character of the specified index of the string', function () {
        let expected = 'e';
        let actual = lookupChar('name', 3);

        expect(expected).to.be.equal(actual);
    });
});