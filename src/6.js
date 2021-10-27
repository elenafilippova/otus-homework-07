export function numbersDiff(num1, num2) {
  if (typeof num1 !== 'number' || typeof num1 !== 'number') return null;
  return Math.abs(num1 - num2);
}

export function isWord(str) {
  const words = str.split(' ');
  let num = 0;
  words.forEach(val => {
    const nonLetter = val.match(/([^a-zA-Z])/g);
    if (!nonLetter) num += 1;
  });
  if (!num) throw new Error('No words');
  return num === 1;
}

export function pow(a, x) {
  if (typeof a !== 'number' || typeof x !== 'number') {
    return null;
  }
  if (x === 0) return 1;
  return a * pow(a, x - 1);
}
