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

export const getRandom = (max) => Math.floor(Math.random() * max);
