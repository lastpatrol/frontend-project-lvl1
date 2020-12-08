export const cons = (a, b) => (whatToGet) => {
  switch (whatToGet) {
    case 'cdr':
      return b;
    default:
      return a;
  }
};
export const car = (pair) => pair('car');
export const cdr = (pair) => pair('cdr');

export const getArithmeticProgression = (start, step, length) => {
  const result = [];
  for (let i = 0; i < length; i += 1) {
    result.push(start + step * i);
  }

  return result;
};

export const getGcd = (a, b) => {
  const iter = (divisor) => {
    if (a % divisor === 0 && b % divisor === 0) {
      return divisor;
    }

    return iter(divisor - 1);
  };

  const smaller = a < b ? a : b;
  return iter(smaller);
};

export const getRandom = (min, max) => Math.floor(Math.random() * (max + 1 - min)) + min;

export const isEven = (num) => (num % 2) === 0;
