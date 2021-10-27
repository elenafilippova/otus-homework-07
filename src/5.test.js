import {
  logSumOfArrayElements,
  arrayWithMultiplyValues,
  logMaxAndMinFromArr,
} from './5';

describe('homework-05', () => {
  describe('sumOfArrayElements', () => {
    let log;
    beforeEach(() => {
      log = jest.spyOn(console, 'log');
    });
    afterEach(() => {
      jest.restoreAllMocks();
    });
    test('sum of elements in array', () => {
      const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      logSumOfArrayElements(arr);
      expect(log).toHaveBeenCalledWith(55);
    });
    const values = [
      [1, 'argument is not array!'],
      [[1, 2, 3, 4, 5, 6, 7, 8, 9], 'length != 10'],
      [[1, 2, 3, 4, 'a', 6, 7, 8, 9, 10], 'Value a is NaN'],
    ];
    test.each(values)('%p throws %p', (arr, err) => {
      try {
        logSumOfArrayElements(arr);
      } catch (e) {
        expect(e.message).toBe(err);
      }
    });
  });

  describe('arrayWithMultiplyValues', () => {
    test('multiply', () => {
      const arr = [1, 2, 3, 4, 5];
      expect(arrayWithMultiplyValues(arr)).toEqual([2, 4, 6, 8, 10]);
    });
    test('Throw NaN error', () => {
      try {
        const arr = ['abc', 2, 3, 4, 5, 6, 7, 8, 9, 10];
        arrayWithMultiplyValues(arr);
      } catch (e) {
        expect(e.message).toBe(`Value abc is NaN`);
      }
    });
  });

  describe('logMaxAndMinFromArr', () => {
    test('Max min elements in5-length array', () => {
      const arr = [1, 2, 3, 4, 5];
      const log = jest.spyOn(console, 'log');
      logMaxAndMinFromArr(arr);
      expect(log).toHaveBeenCalledWith(`Max: 5; Min: 1`);
    });
    const values = [
      [1, 'argument is not array!'],
      [['a', 2, 3, 4, 5, 6, 7, 8, 9], 'Value a is NaN'],
    ];
    test.each(values)('%p throws %p', (obj, err) => {
      try {
        logMaxAndMinFromArr(obj);
      } catch (e) {
        expect(e.message).toBe(err);
      }
    });
    test('Throw empty array', () => {
      try {
        logMaxAndMinFromArr([1, 2, 3]);
      } catch (e) {
        expect(e.message).toBe('array is empty');
      }
    });
  });
});
