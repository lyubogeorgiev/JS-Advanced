let expect = require('chai').expect;
let rgbToHexColor = require('../07-Unit Testing and Error Handling/l06-RGBToHEX').rgbToHexColor;

describe('test RGB to HEX color', function (){
    it('should return undefined if any number is out of range', function () {
        let actual = rgbToHexColor(257, 255, 255);

        expect(actual).to.be.equal(undefined);
    });
    it('should return undefined if any number is out of range', function () {
        let actual = rgbToHexColor(255, 257, 255);

        expect(actual).to.be.equal(undefined);
    });
    it('should return undefined if any number is out of range', function () {
        let actual = rgbToHexColor(255, 255, 257);

        expect(actual).to.be.equal(undefined);
    });
    it('should return undefined if any parameter is not the right type', function () {
        let actual = rgbToHexColor('10', 3, 5);

        expect(actual).to.be.equal(undefined);
    });
    it('should return undefined if any parameter is not the right type', function () {
        let actual = rgbToHexColor(10, '3', 5);

        expect(actual).to.be.equal(undefined);
    });
    it('should return undefined if any parameter is not the right type', function () {
        let actual = rgbToHexColor(10, 3, '5');

        expect(actual).to.be.equal(undefined);
    });
    it('should return the right color in HEX', function () {
        let actual = rgbToHexColor(10, 10, 10);

        expect(actual).to.be.equal('#0A0A0A');
    });
    it('should return the right color in HEX', function () {
        let actual = rgbToHexColor(0, 0, 0);

        expect(actual).to.be.equal('#000000');
    });
    it('should return the right color in HEX', function () {
        let actual = rgbToHexColor(255, 255, 255);

        expect(actual).to.be.equal('#FFFFFF');
    });
    it('should return undefined if any number is out of range', function () {
        let actual = rgbToHexColor(-1, 255, 255);

        expect(actual).to.be.equal(undefined);
    });
});