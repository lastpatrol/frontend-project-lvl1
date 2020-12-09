import { getRandom, cons } from '../src/utils.js';

const objective = 'What number is missing in the progression?';

const makeTask = () => {
  const maxStart = 100;
  const minStart = 0;
  const maxStep = 20;
  const minStep = 1;
  const minLength = 5;
  const maxLength = 10;
  const start = getRandom(minStart, maxStart);
  const step = getRandom(minStep, maxStep);
  const length = getRandom(minLength, maxLength);
  const answerIndex = getRandom(0, length - 1);
  const answer = String(start + step * answerIndex);
  const answerPlaceholder = '..';

  const progression = [];
  for (let i = 0; i < length; i += 1) {
    if (i === answerIndex) {
      progression.push(answerPlaceholder);
    } else {
      progression.push(String(start + step * i));
    }
  }

  const question = progression.join(' ');
  return cons(question, answer);
};

const game = cons(objective, makeTask);

export default game;
