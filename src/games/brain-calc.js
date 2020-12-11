import { getRandom } from '../utils.js';
import play from '../index.js';

const objective = 'What is the result of the expression?';

const makeTask = () => {
  const minNum = 0;
  const maxNumAddition = 100;
  const maxNumMulti = 13;
  const operators = ['+', '-', '*'];
  const operatorsLength = operators.length;
  const operator = operators[getRandom(0, operatorsLength - 1)];
  let a;
  let b;
  if (operator === '*') {
    a = getRandom(minNum, maxNumMulti);
    b = getRandom(minNum, maxNumMulti);
  } else {
    a = getRandom(minNum, maxNumAddition);
    b = getRandom(minNum, maxNumAddition);
  }

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
  return { question, answer };
};

const game = { objective, makeTask };
const launch = () => play(game);

export default launch;
