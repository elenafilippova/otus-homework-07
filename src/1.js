export function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return NaN;
  }
  return a + b;
}

export function multiply(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') return NaN;
  return a * b;
}

export function logSumAndMultiply(a, b) {
  console.log(sum(a, b));
  console.log(multiply(a, b));
}

// ---------------------------------------------------------------------

export function stringsLength(str1, str2) {
  if (typeof str1 !== 'string' || typeof str2 !== 'string') {
    return null;
  }
  return str1.length + str2.length;
}

export function logStringsLength(str1, str2) {
  const result = stringsLength(str1, str2);
  if (result !== null) {
    console.log(result);
  } else {
    console.log('bad arguments');
  }
}

// ---------------------------------------------------------------------

export function sumDigitsFromInput(userText) {
  if (!userText) {
    return null;
  }

  if (userText.length !== 3) {
    return null;
  }

  const number = userText.split('').filter(val => !Number.isNaN(+val));
  if (number.length !== 3) {
    return null;
  }
  return number.reduce((a, b) => +a + +b, 0);
}

export function logSumDigitsFromInput() {
  const userText = prompt('Введите трехзначное число: ');
  const result = sumDigitsFromInput(userText);
  console.log(result == null ? 'bad arguments' : result);
}
