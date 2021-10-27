export function getMaxNumber(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return NaN;
  }
  return a > b ? a : b;
}

export function getMonthName(monthNumber) {
  if (typeof monthNumber !== 'number') return null;

  const num = +monthNumber;
  if (num < 1 || num > 12) return null;

  const options = {
    month: 'long',
  };
  const date = new Date(Date.UTC(2021, num - 1, 1));
  const monthName = date.toLocaleString('en-US', options);
  return monthName;
}

export function isCircleInSquare(circleArea, squareArea) {
  if (typeof circleArea !== 'number' || typeof squareArea !== 'number')
    return NaN;

  const circleDiameter = 2 * Math.sqrt(circleArea / Math.PI);
  const squareSide = Math.sqrt(squareArea);

  return squareSide >= circleDiameter;
}
