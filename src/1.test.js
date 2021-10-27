import {
  sum,
  multiply,
  logSumAndMultiply,
  stringsLength,
  logStringsLength,
  logSumDigitsFromInput,
  sumDigitsFromInput,
} from './1';

describe('homework-01', () => {
  describe('logSumAndMultiply', () => {
    it('is a function', () => {
      expect(logSumAndMultiply).toBeInstanceOf(Function);
    });

    describe('logSumAndMultiply', () => {
      it('log to console sum and multiply of numbers', () => {
        const spy = jest.spyOn(console, 'log');
        logSumAndMultiply(2, 3);
        expect(spy).toHaveBeenCalledWith(5);
        expect(spy).toHaveBeenCalledWith(6);
        spy.mockRestore();
      });
    });

    describe('sum', () => {
      describe('calculate sum of 2 numbers', () => {
        const values = [
          [1, 2, 3],
          [-1, -2, -3],
          [[0], 1, NaN],
          [null, 1, NaN],
          ['1', '2', NaN],
          ['1', 2, NaN],
          [1, '2', NaN],
        ];
        test.each(values)(`%p + %p = %p`, (a, b, res) => {
          expect(sum(a, b)).toBe(res);
        });
      });
    });
  });

  describe('multiply', () => {
    describe('calculate multiply of 2 numbers', () => {
      const values = [
        [1, 2, 2],
        [-1, -2, 2],
        [[0], 1, NaN],
        [null, 1, NaN],
        ['1', '2', NaN],
        ['1', 2, NaN],
        [1, '2', NaN],
      ];
      test.each(values)(`%p * %p = %p`, (a, b, res) => {
        expect(multiply(a, b)).toBe(res);
      });
    });
  });
});

// ---------------------------------------------------------------------

describe('logStringsLength', () => {
  it('is a function', () => {
    expect(logStringsLength).toBeInstanceOf(Function);
  });

  describe('logStringsLength', () => {
    it('log to console sum of string digits', () => {
      const spy = jest.spyOn(console, 'log');
      logStringsLength('abc', 'de');
      expect(spy).toHaveBeenCalledWith(5);
      spy.mockRestore();
    });
  });

  describe('stringsLength', () => {
    describe('calculate sum of symbols', () => {
      const values = [
        ['abc', 'def', 6],
        [null, 'abc', null],
        ['abc', null, null],
        ['1', '234', 4],
        ['abc', ['def'], null],
        ['abc', '', 3],
      ];
      test.each(values)(
        `summary string length of %p and %p is %p`,
        (a, b, res) => {
          expect(stringsLength(a, b)).toBe(res);
        },
      );
    });
  });
});

// ---------------------------------------------------------------------

describe('logSumDigitsFromInput', () => {
  it('is a function', () => {
    expect(logSumDigitsFromInput).toBeInstanceOf(Function);
  });

  describe('logSumDigitsFromInput', () => {
    it('log sum of numbers', () => {
      const spy = jest.spyOn(console, 'log');
      jest.spyOn(window, 'prompt').mockReturnValue('623');
      logSumDigitsFromInput();
      expect(spy).toHaveBeenCalledWith(11);
      spy.mockRestore();
    });
  });
});

describe('sumDigitsFromInput', () => {
  describe('calculate sum of 3-digit numbers', () => {
    const values = [
      ['123', 6],
      ['321', 6],
      ['000', 0],
      ['12', null],
      ['abc', null],
      ['a12', null],
    ];
    test.each(values)(`sum of digits in string %p is %p`, (number, res) => {
      expect(sumDigitsFromInput(number)).toBe(res);
    });
  });
});
