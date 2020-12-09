import { cons, getRandom } from '../src/utils.js';

const getGcd = (a, b) => {
  const iter = (divisor) => {
    if (a % divisor === 0 && b % divisor === 0) {
      return divisor;
    }

    return iter(divisor - 1);
  };

  const smaller = a < b ? a : b;
  return iter(smaller);
};

const objective = 'Find the greatest common divisor of given numbers.';

const makeTask = () => {
  const maxNumber = 100;
  const a = getRandom(1, maxNumber);
  const b = getRandom(1, maxNumber);
  const question = `${a} ${b}`;
  const answer = String(getGcd(a, b));
  return cons(question, answer);
};

const game = cons(objective, makeTask);

export default game;
