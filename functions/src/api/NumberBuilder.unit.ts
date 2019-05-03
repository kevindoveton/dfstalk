// tslint:disable-next-line: no-import-side-effect
import 'mocha'
import NumberBuilder from './NumberBuilder';
import { unsafeUnwrap } from '../utils/AppProviderTypes';
import assert from 'assert';


describe('NumberBuilder Unit Tests', function() {

  describe('en_AU_male', function () {
    it('correctly formats numbers 0 < n < 1,000', async () => {
      //Arrange
      const input = [
        0,
        1,
        234,
        19,
        590,
      ]
      const expected = [
        ['zero'],
        ['one'],
        ['two', 'hundred', 'thirty', 'four'],
        ['nineteen'],
        ['five', 'hundred', 'ninety']
      ];

      //Act
      const results: string[][] = [];
      await input.forEach(async n => {
        const result = unsafeUnwrap(await NumberBuilder.buildNumber(n, 'en_AU_male'))
        results.push(result);
      });

      //Assert
      assert.deepStrictEqual(results, expected);
    });

    it('formats numbers for 1,000 <= n < 1,000,000', async () => {
      //Arrange
      const input = [
        8437,
        10398,
        111300,
        12840,
        1409,
        111111,
      ]
      const expected = [
        ['eight', 'thousand', 'four', 'hundred', 'thirty', 'seven'],
        ['ten', 'thousand', 'three', 'hundred', 'ninety', 'eight'],
        ['one', 'hundred', 'eleven', 'thousand', 'three', 'hundred'],
        ['twelve', 'thousand', 'eight', 'hundred', 'forty'],
        ['one', 'thousand', 'four', 'hundred', 'nine'],
        ['one', 'hundred', 'eleven', 'thousand', 'one', 'hundred', 'eleven'],
      ];

      //Act
      const results: string[][] = [];
      await input.forEach(async n => {
        const result = unsafeUnwrap(await NumberBuilder.buildNumber(n, 'en_AU_male'))
        results.push(result);
      });

      //Assert
      assert.deepStrictEqual(results, expected);
    });

    it('formats numbers for 1,000 <= n < 1,000,000', async () => {
      //Arrange
      const input = [
        12837419
      ]
      const expected = [
        ['twelve', 'million', 'eight', 'hundred', 'thirty', 'seven', 'thousand', 'four', 'hundred', 'nineteen'],
      ];

      //Act
      const results: string[][] = [];
      await input.forEach(async n => {
        const result = unsafeUnwrap(await NumberBuilder.buildNumber(n, 'en_AU_male'))
        results.push(result);
      });

      //Assert
      assert.deepStrictEqual(results, expected);
    });

    it('formats negative numbers')
    it('formats numbers with decimals')

  });
});