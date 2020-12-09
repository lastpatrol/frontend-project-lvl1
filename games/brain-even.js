import { getRandom, cons, isEven } from '../src/utils.js';

const objective = 'Answer "yes" if the number is even, otherwise answer "no".';

const makeTask = () => {
  const maxNumber = 100;
  const number = getRandom(0, maxNumber);
  const question = String(number);
  const answer = String(isEven(number) ? 'yes' : 'no');
  return cons(question, answer);
};

const game = cons(objective, makeTask);

export default game;
