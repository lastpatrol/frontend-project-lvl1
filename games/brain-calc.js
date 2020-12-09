import { getRandom, cons } from '../src/utils.js';

const objective = 'What is the result of the expression?';

const makeTask = () => {
  const maxNumAddition = 100;
  const maxNumMulti = 13;
  const operators = ['+', '-', '*'];
  const operator = operators[getRandom(0, 2)];
  const a = operator === '*' ? getRandom(0, maxNumMulti) : getRandom(0, maxNumAddition);
  const b = operator === '*' ? getRandom(0, maxNumMulti) : getRandom(0, maxNumAddition);
  const question = `${a} ${operator} ${b}`;
  let answer;
  switch (operator) {
    case '+':
      answer = String(a + b);
      break;
    case '-':
      answer = String(a - b);
      break;
    default:
      answer = String(a * b);
  }
  return cons(question, answer);
};

const game = cons(objective, makeTask);

export default game;
