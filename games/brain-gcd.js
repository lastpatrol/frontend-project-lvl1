import { cons, getRandom, getGcd } from '../src/utils.js';

const objective = 'Find the greatest common divisor of given numbers.';

const getTask = () => {
  const maxNumber = 100;
  const a = getRandom(1, maxNumber);
  const b = getRandom(1, maxNumber);
  const question = `${a} ${b}`;
  const answer = String(getGcd(a, b));
  return cons(question, answer);
};

const game = cons(objective, getTask);

export default game;
