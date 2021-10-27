import { numbersDiff, isWord, pow } from './6';

describe('homework-06', () => {
  describe('numbersDiff', () => {
    expect(numbersDiff(1, 2)).toBe(1);
    expect(numbersDiff(1, 1)).toBe(0);
    expect(numbersDiff('1', 2)).toBe(null);
  });

  describe('isWord', () => {
    let words = ['f1rst second 345 ...', 'one', '1234 ttt 222'];
    test.each(words)('%p contains one word', string => {
      expect(isWord(string)).toBeTruthy();
    });
    words = ['first second 345 ...', 'one two', '1234 ttt 222 \n ttt'];
    test.each(words)('%p contains more than a word', string => {
      expect(isWord(string)).toBeFalsy();
    });
    test('Throw no words error', () => {
      try {
        isWord('123 d1');
      } catch (e) {
        expect(e.message).toBe('No words');
      }
    });
  });

  describe('pow', () => {
    const values = [
      [1, 2, 1],
      [2, 5, 32],
      [-1, 2, 1],
      [0, 5, 0],
      ['1', 2, null],
      [1, '2', null],
      ['1', '2', null],
    ];
    test.each(values)('%p to the power %p is %p', (a, x, res) => {
      expect(pow(a, x)).toBe(res);
    });
  });
});
