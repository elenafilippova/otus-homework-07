export function logRangeSum(numberFrom, numberTo) {
  if (typeof numberFrom !== 'number' || typeof numberTo !== 'number') {
    console.log('invalid arguments');
  } else {
    if (numberFrom > numberTo) {
      console.log('invalid arguments');
    }

    let sum = 0;
    for (let i = numberFrom; i <= numberTo; i += 1) {
      sum += i;
    }
    console.log(sum);
  }
}

export function logMultiplicationTable(n) {
  if (typeof n !== 'number') {
    console.log('invalid arguments');
  } else {
    for (let i = 1; i < 10; i += 1) {
      console.log(`${n} x ${i} = ${n * i}`);
    }
  }
}

export function averageOfOddNumbers(num) {
  if (typeof num !== 'number') {
    return NaN;
  }

  const number = +num;

  if (number < 1) {
    return null;
  }

  let sum = 0;
  let oddCount = 0;
  for (let i = 1; i <= number; i += 1) {
    if (i % 2 !== 0) {
      sum += i;
      oddCount += 1;
    }
  }

  return sum / oddCount;
}
