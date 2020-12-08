import { getRandom, cons } from '../src/utils.js';

const getArithmeticProgression = (start, step, length) => {
  const result = [];
  for (let i = 0; i < length; i += 1) {
    result.push(start + step * i);
  }

  return result;
};

const objective = 'What number is missing in the progression?';

const getTask = () => {
  const start = getRandom(101);
  const step = getRandom(10) + 1;
  const length = 10;
  const progression = getArithmeticProgression(start, step, length);
  const answerIndex = getRandom(length);
  const answerPlaceholder = '..';
  const answer = String(progression[answerIndex]);
  progression[answerIndex] = answerPlaceholder;
  const question = progression.join(' ');
  return cons(question, answer);
};

const game = cons(objective, getTask);

export default game;
