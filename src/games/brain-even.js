import { getRandom, cons, isEven } from '../utils.js';
import play from '../index.js';

const objective = 'Answer "yes" if the number is even, otherwise answer "no".';

const makeTask = () => {
  const maxNum = 100;
  const minNum = 0;
  const number = getRandom(minNum, maxNum);
  const question = String(number);
  const answer = String(isEven(number) ? 'yes' : 'no');
  return cons(question, answer);
};

const game = cons(objective, makeTask);
const launch = () => play(game);

export default launch;
