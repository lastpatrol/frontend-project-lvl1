import { getRandom, cons } from '../src/utils.js';

const objective = 'What is the result of the expression?';

const getTask = () => {
  const operators = ['+', '-', '*'];
  const operator = operators[getRandom(3)];
  const a = operator === '*' ? getRandom(14) : getRandom(101);
  const b = operator === '*' ? getRandom(14) : getRandom(101);
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

const game = cons(objective, getTask);

export default game;
