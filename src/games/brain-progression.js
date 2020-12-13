import getRandom from '../utils.js';
import play from '../index.js';

const makeProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(String(start + step * i));
  }
  return progression;
};

const description = 'What number is missing in the progression?';

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
  const answerPlaceholder = '..';

  const progression = makeProgression(start, step, length);
  const answer = progression[answerIndex];
  progression[answerIndex] = answerPlaceholder;
  const question = progression.join(' ');
  return { question, answer };
};

const game = { description, makeTask };
const launch = () => play(game);

export default launch;
