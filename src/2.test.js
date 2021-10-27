import { getMaxNumber, getMonthName, isCircleInSquare } from './2';

describe('homework-02', () => {
  describe('getMaxNumber', () => {
    const values = [
      [1, 2, 2],
      [2, 1, 2],
      ['1', 2, NaN],
      [1, '2', NaN],
      [1, [2], NaN],
      ['abc', 2, NaN],
    ];
    test.each(values)(`max number from %p and %p is %p`, (a, b, res) => {
      expect(getMaxNumber(a, b)).toBe(res);
    });
  });

  describe('getMonthName', () => {
    const values = [
      [1, 'January'],
      [5, 'May'],
      [12, 'December'],
      [0, null],
      ['12', null],
      [13, null],
      ['', null],
      ['some word', null],
      [[1], null],
    ];
    test.each(values)(`%p month is %p`, (num, res) => {
      expect(getMonthName(num)).toBe(res);
    });
  });

  describe('isCircleInSquare', () => {
    const values = [
      [5, 2, false],
      [2, 5, true],
      [[2], [5], NaN],
      [10, '5', NaN],
      ['1', '5', NaN],
    ];
    test.each(values)(
      `circle with area %p in square with area %p result is %p`,
      (circleArea, squareArea, res) => {
        expect(isCircleInSquare(circleArea, squareArea)).toBe(res);
      },
    );
  });
});
