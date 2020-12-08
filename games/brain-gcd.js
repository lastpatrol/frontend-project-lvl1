import { cons, getRandom, getGcd } from '../src/utils.js';

const objective = 'Find the greatest common divisor of given numbers.';

const getTask = () => {
  const a = getRandom(100) + 1;
  const b = getRandom(100) + 1;
  const question = `${a} ${b}`;
  const answer = String(getGcd(a, b));
  return cons(question, answer);
};

const game = cons(objective, getTask);

export default game;
