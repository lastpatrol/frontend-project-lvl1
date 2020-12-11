export const getRandom = (min, max) => Math.floor(Math.random() * (max + 1 - min)) + min;

export const isEven = (num) => (num % 2) === 0;
