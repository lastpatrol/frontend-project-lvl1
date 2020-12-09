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

export const getRandom = (min, max) => Math.floor(Math.random() * (max + 1 - min)) + min;

export const isEven = (num) => (num % 2) === 0;
