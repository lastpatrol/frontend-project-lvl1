import getRandom from '../utils.js';
import play from '../index.js';

const description = 'What is the result of the expression?';

const calculate = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    default:
      return a * b;
  }
};

const makeTask = () => {
  const minNum = 0;
  const maxNum = 20;
  const operators = ['+', '-', '*'];
  const operatorsLength = operators.length;
  const operator = operators[getRandom(0, operatorsLength - 1)];
  const a = getRandom(minNum, maxNum);
  const b = getRandom(minNum, maxNum);

  const question = `${a} ${operator} ${b}`;
  const answer = String(calculate(a, b, operator));
  return { question, answer };
};

const game = { description, makeTask };
const launch = () => play(game);

export default launch;
