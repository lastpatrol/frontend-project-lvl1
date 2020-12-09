import { getRandom, cons } from '../src/utils.js';

const objective = 'What number is missing in the progression?';

const getArithmeticProgression = (start, step, length) => {
  const result = [];
  for (let i = 0; i < length; i += 1) {
    result.push(start + step * i);
  }

  return result;
};

const makeTask = () => {
  const maxStart = 100;
  const maxStep = 20;
  const minLength = 5;
  const maxLength = 10;
  const start = getRandom(0, maxStart);
  const step = getRandom(1, maxStep);
  const length = getRandom(minLength, maxLength);
  const progression = getArithmeticProgression(start, step, length);
  const answerIndex = getRandom(0, length - 1);
  const answerPlaceholder = '..';
  const answer = String(progression[answerIndex]);
  progression[answerIndex] = answerPlaceholder;
  const question = progression.join(' ');
  return cons(question, answer);
};

const game = cons(objective, makeTask);

export default game;
