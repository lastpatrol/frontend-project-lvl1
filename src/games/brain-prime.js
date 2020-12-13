import getRandom from '../utils.js';
import play from '../index.js';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  const sqrt = Math.sqrt(num);
  for (let i = 2; i <= sqrt; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const makeTask = () => {
  const maxNum = 100;
  const minNum = 1;
  const number = getRandom(minNum, maxNum);
  const question = String(number);
  const answer = isPrime(number) ? 'yes' : 'no';
  return { question, answer };
};

const game = { description, makeTask };
const launch = () => play(game);

export default launch;
