import { cons, getRandom, isEven } from '../src/utils.js';

const isPrime = (num) => {
  if (num < 3) {
    return true;
  }

  if (isEven(num)) {
    return false;
  }

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const objective = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const makeTask = () => {
  const maxNum = 100;
  const minNum = 1;
  const number = getRandom(minNum, maxNum);
  const question = String(number);
  const answer = isPrime(number) ? 'yes' : 'no';
  return cons(question, answer);
};

const game = cons(objective, makeTask);

export default game;
