import { logRangeSum, logMultiplicationTable, averageOfOddNumbers } from './3';

describe('homework-03', () => {
  describe('logRangeSum', () => {
    let log;
    beforeEach(() => {
      log = jest.spyOn(console, 'log');
    });
    afterEach(() => {
      jest.restoreAllMocks();
    });

    const values = [
      [50, 100, 3825],
      [0, 50, 1275],
      [-50, 50, 0],
      ['50', 100, 'invalid arguments'],
      [50, null, 'invalid arguments'],
    ];
    test.each(values)(
      'sum of numbers from %p to %p is %p',
      (numberFrom, numberTo, res) => {
        logRangeSum(numberFrom, numberTo);
        expect(log).toHaveBeenCalledWith(res);
      },
    );
  });

  describe('logMultiplicationTable', () => {
    let log;
    beforeEach(() => {
      log = jest.spyOn(console, 'log');
    });
    afterEach(() => {
      jest.restoreAllMocks();
    });

    test('table in range 1-9', () => {
      for (let i = 1; i < 10; i += 1) {
        logMultiplicationTable(i);
        for (let j = 1; j < 10; j += 1) {
          expect(log).toHaveBeenCalledWith(`${i} x ${j} = ${i * j}`);
        }
      }
    });

    test('invalid arguments', () => {
      logMultiplicationTable('abc');
      expect(log).toHaveBeenCalledWith('invalid arguments');
    });
  });

  describe('averageOfOddNumbers', () => {
    const values = [
      [5, 3],
      ['5', NaN],
      [-5, null],
    ];
    test.each(values)(
      'average of odd numbers from 1 to %p is %p',
      (num, res) => {
        expect(averageOfOddNumbers(num)).toBe(res);
      },
    );
  });
});
