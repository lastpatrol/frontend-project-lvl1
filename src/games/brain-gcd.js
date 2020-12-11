import { cons, getRandom } from '../utils.js';

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
  const maxNum = 100;
  const minNum = 1;
  const a = getRandom(minNum, maxNum);
  const b = getRandom(minNum, maxNum);
  const question = `${a} ${b}`;
  const answer = String(getGcd(a, b));
  return cons(question, answer);
};

const game = cons(objective, makeTask);

export default game;
