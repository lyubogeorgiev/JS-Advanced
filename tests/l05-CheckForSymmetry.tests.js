let expect = require('chai').expect;
let isSymmetric = require('../07-Unit Testing and Error Handling/l05-CheckForSymmetry').isSymmetric;

describe('take an array as argument', function (){
    it('should take an array as argument, if not, return false', function () {
        let actual = isSymmetric(1);

        expect(actual).to.be.equal(false);
    });
    it('should return same array', function () {
        let actual = isSymmetric([2,1,2]);

        expect(actual).to.be.equal(true);
    });
    it('should return the same array 4 symbols', function () {
        let actual = isSymmetric(['1', '2', '2', '1']);

        expect(actual).to.be.equal(true);
    });
    it('should return false', function () {
        let actual = isSymmetric([1, 2, 2]);

        expect(actual).to.be.equal(false);
    });
    it('should return false with 4 symbols', function () {
        let actual = isSymmetric(2, 2, 2, 1);

        expect(actual).to.be.equal(false);
    });
    it('should return true, 1 argument only', function () {
        let actual = isSymmetric([1]);

        expect(actual).to.be.equal(true);
    });
    it('should return true with empty array', function () {
        let actual = isSymmetric([]);

        expect(actual).to.be.equal(true);
    });
    it('should return false with different data types like 1 and "1"', function () {
        let actual = isSymmetric([1, '1']);

        expect(actual).to.be.equal(false);
    });
});