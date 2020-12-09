import { getRandom, cons } from '../src/utils.js';

const objective = 'What is the result of the expression?';

const makeTask = () => {
  const minNum = 0;
  const maxNumAddition = 100;
  const maxNumMulti = 13;
  const operators = ['+', '-', '*'];
  const operator = operators[getRandom(0, 2)];
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
  return cons(question, answer);
};

const game = cons(objective, makeTask);

export default game;
