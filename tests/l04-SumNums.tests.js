let expect = require("chai").expect;
let sum = require('../07-Unit Testing and Error Handling/l04-SumNums').sum;

describe ("sum(arr) - sum array of numbers", function() {
    it('should return 3 for [1,2]', function () {
        let expectedSum = 3;
        let actualSum = sum([1,2]);
        expect(actualSum).to.be.equal(expectedSum);
    });
});