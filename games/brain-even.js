import { getRandom, cons } from '../src/utils.js';

const isEven = (num) => (num % 2) === 0;

const objective = 'Answer "yes" if the number is even, otherwise answer "no".';

const getTask = () => {
  const maxNumber = 100;
  const number = getRandom(maxNumber);
  const question = String(number);
  const answer = String(isEven(number) ? 'yes' : 'no');
  return cons(question, answer);
};

const game = cons(objective, getTask);

export default game;
