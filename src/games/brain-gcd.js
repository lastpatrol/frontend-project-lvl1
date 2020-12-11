import { getRandom } from '../utils.js';
import play from '../index.js';

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
  return { question, answer };
};

const game = { objective, makeTask };
const launch = () => play(game);

export default launch;
